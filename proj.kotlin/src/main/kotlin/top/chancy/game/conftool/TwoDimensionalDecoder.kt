package top.chancy.game.conftool

import com.baidu.bjf.remoting.protobuf.IDLProxyObject
import top.chancy.game.conftool.ConfDecoder.Companion.CLIENT_FLAG
import top.chancy.game.conftool.ConfDecoder.Companion.SERVER_FLAG

/**
 * 表头为四行
 * 第一行为客户端服务端标志 C => 客户端 ,S => 服务端，忽略大小写
 * 第二行为字段类型，合法的有bool,double,int,long,string,数组例如int[],map例如int:string，枚举例如{TestEnum}
 * 第三行为字段描述
 * 第四行为字段名
 */
class TwoDimensionalDecoder(val confName: String, rawRect: Array<Array<String>>, enumDecoder: EnumDecoder) {
    //值矩阵[rowIndex][columnIndex]
    private var valueRect: Array<Array<Any>>

    //columnIndex -> 客户端标志数组
    private var clientFlagArray: BooleanArray

    //columnIndex -> 服务端标志数组
    private var serverFlagArray: BooleanArray

    //columnIndex -> FieldType数组
    private var typeArray: Array<FieldType>

    //columnIndex -> 字段名
    private var nameArray: Array<String>

    //所有字段结构体定义
    var allProtoDefine: String?

    //客户端结构体定义
    var clientProtoDefine: String?

    //服务端结构体定义
    var serverProtoDefine: String?

    init {
        val maxRow = rawRect.size
        if (maxRow <= 4) {
            throw Exception("表头格式不正确或内容为空")
        }
        val maxColumn = rawRect[0].size
        if (maxColumn <= 0) {
            throw Exception("没有字段")
        }
        //客户端标志
        clientFlagArray = BooleanArray(maxColumn) { index ->
            getFlag(index, rawRect[0], CLIENT_FLAG)
        }
        //服务端标志
        serverFlagArray = BooleanArray(maxColumn) { index ->
            getFlag(index, rawRect[0], SERVER_FLAG)
        }
        //字段类型&decode方法
        typeArray = Array(maxColumn) { index ->
            FieldType.getFieldType(rawRect[1][index], enumDecoder)
        }
        //字段名
        nameArray = Array(maxColumn) { index ->
            rawRect[3][index]
        }
        //解析字段值
        val lineNum = maxRow - 4
        valueRect = Array(lineNum) { rowIndex ->
            val rawRowIndex = rowIndex + 4
            val rawValueArray = rawRect[rawRowIndex]
            Array(maxColumn) { columnIndex ->
                try {
                    decodeData(columnIndex, rawValueArray)
                } catch (decodeException: Exception) {
                    throw Exception("${decodeException.message},at row:${rawRowIndex + 1},column:${columnIndex + 1}")
                }
            }
        }
        //生成结构
        val allBuilder = StringBuilder("message $confName{\n")
        val clientBuilder = StringBuilder(allBuilder)
        val serverBuilder = StringBuilder(allBuilder)
        var allIndex = 0
        var clientIndex = 0
        var serverIndex = 0
        nameArray.forEachIndexed { i, name ->
            val typeString = typeArray[i].typeString
            val desc = rawRect[2][i]
            allBuilder.append("\t//$desc\n\t$typeString $name = ${++allIndex};\n")
            if (clientFlagArray[i]) {
                clientBuilder.append("\t//$desc\n\t$typeString $name = ${++clientIndex};\n")
            }
            if (serverFlagArray[i]) {
                serverBuilder.append("\t//$desc\n\t$typeString $name = ${++serverIndex};\n")
            }
        }
        allProtoDefine = if (allIndex <= 0) null else allBuilder.append("}\n").toString()
        clientProtoDefine = if (clientIndex <= 0) null else clientBuilder.append("}\n").toString()
        serverProtoDefine = if (serverIndex <= 0) null else serverBuilder.append("}\n").toString()
    }

    private fun getFlag(index: Int, rawFlagArray: Array<String>, flag: Char): Boolean {
        return rawFlagArray[index].toUpperCase().contains(flag)
    }

    //解析数据
    private fun decodeData(columnIndex: Int, rawValueArray: Array<String>): Any {
        val rawValue = rawValueArray[columnIndex]
        val decodeFunc = typeArray[columnIndex].decodeFunc
        return decodeFunc(rawValue)
    }

    fun getAllData(proxy: IDLProxyObject): List<Any>? {
        if (allProtoDefine == null) {
            return null
        }
        val result = mutableListOf<Any>()
        valueRect.forEach { row ->
            val obj = proxy.newInstnace()
            nameArray.forEachIndexed { i, name ->
                obj.put(name, row[i])
            }
            result.add(obj.target)
        }
        return result
    }

    fun getServerData(proxy: IDLProxyObject): List<Any>? {
        if (serverProtoDefine == null) {
            return null
        }
        val result = mutableListOf<Any>()
        valueRect.forEach { row ->
            val obj = proxy.newInstnace()
            serverFlagArray.forEachIndexed { i, flag ->
                if (flag) {
                    obj.put(nameArray[i], row[i])
                }
            }
            result.add(obj.target)
        }
        return result
    }

    fun getClientData(proxy: IDLProxyObject): List<Any>? {
        if (clientProtoDefine == null) {
            return null
        }
        val result = mutableListOf<Any>()
        valueRect.forEach { row ->
            val obj = proxy.newInstnace()
            clientFlagArray.forEachIndexed { i, flag ->
                if (flag) {
                    obj.put(nameArray[i], row[i])
                }
            }
            result.add(obj.target)
        }
        return result
    }

    fun getDataFieldName(): String = "${ConfDecoder.firstLetterLowerCase(confName)}ConfList"

    fun getDataFieldStatement(index: Int): String =
        "\trepeated $confName ${getDataFieldName()} = $index;\n"
}