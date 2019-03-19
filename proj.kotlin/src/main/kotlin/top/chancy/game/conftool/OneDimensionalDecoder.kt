package top.chancy.game.conftool

import com.baidu.bjf.remoting.protobuf.IDLProxyObject
import top.chancy.game.conftool.ConfDecoder.Companion.CLIENT_FLAG
import top.chancy.game.conftool.ConfDecoder.Companion.SERVER_FLAG

/**
 * 表头为两行
 * 第一行为中文字段描述，例如： 属性名，属性值，属性值类型，端，属性描述
 * 第二行为字段名，包括：Key，Value，Type，End，Desc，顺序可选，忽略大小写
 * ->key为字段名
 * ->value为值
 * ->type为字段类型，合法的有bool,double,int,long,string,数组例如int[],map例如int:string，枚举例如{TestEnum}
 * ->end为客户端服务端标志 C => 客户端 ,S => 服务端，忽略大小写
 * ->desc为字段描述
 */
class OneDimensionalDecoder(val confName: String, rawRect: Array<Array<String>>, enumDecoder: EnumDecoder) {
    //columnIndex -> 客户端标志数组
    private var clientFlagList: MutableList<Boolean> = mutableListOf()

    //columnIndex -> 服务端标志数组
    private var serverFlagList: MutableList<Boolean> = mutableListOf()

    //columnIndex -> data数组
    private var valueList: MutableList<Any> = mutableListOf()

    //columnIndex -> 字段名
    private var nameList: MutableList<String> = mutableListOf()

    //所有字段结构体定义
    var allProtoDefine: String?

    //客户端结构体定义
    var clientProtoDefine: String?

    //服务端结构体定义
    var serverProtoDefine: String?

    init {
        if (rawRect.size < 3) {
            throw Exception("一维表格式行数不足，至少3行")
        }
        //默认跳过第一行，作为中文描述
        val fieldNameArray = rawRect[1]
        //分析各个字段对应的columnIndex
        val indexArray = intArrayOf(-1, -1, -1, -1, -1)
        fieldNameArray.forEachIndexed { index, fieldName ->
            val fieldNameUpperCase = fieldName.toUpperCase()
            val i = FIELD_NAME_ARRAY.indexOf(fieldNameUpperCase)
            if (i >= 0) {
                indexArray[i] = index
            }
        }
        if (indexArray.any { it == -1 }) {
            throw Exception("一维表格式不正确，必须包含[key,value,type,end,desc]五列")
        }
        val allBuilder = StringBuilder("message $confName{\n")
        val clientBuilder = StringBuilder(allBuilder)
        val serverBuilder = StringBuilder(allBuilder)
        var allIndex = 0
        var clientIndex = 0
        var serverIndex = 0

        val valueColumnIndex = indexArray[1]
        val typeColumnIndex = indexArray[2]
        for (i in 2 until rawRect.size) {
            val row = rawRect[i]
            val name = row[indexArray[0]]
            nameList.add(name)
            val desc = row[indexArray[4]]
            val endFlag = row[indexArray[3]].toUpperCase()
            val clientFlag = endFlag.contains(CLIENT_FLAG)
            clientFlagList.add(clientFlag)
            val serverFlag = endFlag.contains(SERVER_FLAG)
            serverFlagList.add(serverFlag)
            val fieldType = try {
                FieldType.getFieldType(row[typeColumnIndex], enumDecoder)
            } catch (e: Exception) {
                throw Exception("${e.message},at row:${i + 1},column:${typeColumnIndex + 1}")
            }
            allBuilder.append("\t//$desc\n\t${fieldType.typeString} $name = ${++allIndex};\n")
            if (clientFlag) {
                clientBuilder.append("\t//$desc\n\t${fieldType.typeString} $name = ${++clientIndex};\n")
            }
            if (serverFlag) {
                serverBuilder.append("\t//$desc\n\t${fieldType.typeString} $name = ${++serverIndex};\n")
            }
            val value = try {
                fieldType.decodeFunc(row[valueColumnIndex])
            } catch (e: Exception) {
                throw Exception("${e.message},at row:${i + 1},column:${valueColumnIndex + 1}")
            }
            valueList.add(value)
        }
        allProtoDefine = if (allIndex <= 0) null else allBuilder.append("}\n").toString()
        clientProtoDefine = if (clientIndex <= 0) null else clientBuilder.append("}\n").toString()
        serverProtoDefine = if (serverIndex <= 0) null else serverBuilder.append("}\n").toString()
    }

    fun getAllData(proxy: IDLProxyObject): Any {
        nameList.forEachIndexed { index, name ->
            proxy.put(name, valueList[index])
        }
        return proxy.target
    }

    fun getClientData(proxy: IDLProxyObject): Any {
        clientFlagList.forEachIndexed { index, b ->
            if (b) {
                proxy.put(nameList[index], valueList[index])
            }
        }
        return proxy.target
    }

    fun getServerData(proxy: IDLProxyObject): Any {
        serverFlagList.forEachIndexed { index, b ->
            if (b) {
                proxy.put(nameList[index], valueList[index])
            }
        }
        return proxy.target
    }

    fun getDataFieldName(): String = "${ConfDecoder.firstLetterLowerCase(confName)}Conf"

    fun getDataFieldStatement(index: Int): String =
        "\t$confName ${getDataFieldName()} = $index;\n"

    companion object {
        private const val FIELD_KEY = "KEY"
        private const val FIELD_VALUE = "VALUE"
        private const val FIELD_TYPE = "TYPE"
        private const val FIELD_END = "END"
        private const val FIELD_DESC = "DESC"
        private val FIELD_NAME_ARRAY = arrayOf(FIELD_KEY, FIELD_VALUE, FIELD_TYPE, FIELD_END, FIELD_DESC)
    }
}
