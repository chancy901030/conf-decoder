package top.chancy.game.conftool

class EnumDecoder{
    private val enumMap = mutableMapOf<String, MutableList<String>>()

    fun getEnumDecoder(enumName: String) = fun(content: String) =
        decodeEnum(enumName, content)

    fun decodeEnum(enumName: String, content: String): String {
        val enumKey = content.toUpperCase()
        val enumKeyList = enumMap.getOrPut(enumName) {
            mutableListOf()
        }
        enumKeyList.forEach {
            if (it == enumKey) {
                return it
            }
        }
        enumKeyList.add(enumKey)
        return enumKey
    }

    fun getAllEnumDefine(): String {
        val stringBuilder = StringBuilder()
        enumMap.forEach { enumName, enumValueList ->
            stringBuilder.append("enum $enumName{\n")
            enumValueList.forEachIndexed { index, key ->
                stringBuilder.append("\t$key = $index;\n")
            }
            stringBuilder.append("}\n")
        }
        return stringBuilder.toString()
    }
}