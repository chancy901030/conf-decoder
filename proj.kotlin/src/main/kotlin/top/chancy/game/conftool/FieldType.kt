package top.chancy.game.conftool

import top.chancy.game.conftool.fielddecoder.FieldDecoderManager

class FieldType(val typeString: String, val decodeFunc: (String) -> Any) {
    companion object {
        private const val LIST_SUFFIX = "[]"
        private const val ENUM_PREFIX = '{'
        private const val ENUM_SUFFIX = '}'
        private const val MAP_INFIX = ':'

        fun getFieldType(fieldType: String, enumDecoder: EnumDecoder): FieldType {
            //读取字段类型，并保存decode方法
            return if (fieldType.endsWith(LIST_SUFFIX)) {
                val type = fieldType.substring(0, fieldType.lastIndex - 1)
                val fieldItemType = type.toUpperCase()
                val decoder = FieldDecoderManager.getDecoder(fieldItemType)
                    ?: throw Exception("分析list结构字段decode方法失败，无法识别的类型:$type")
                FieldType("repeated ${decoder.getFieldTypeString()}", FieldDecoderManager.getListDecoder(decoder))
            } else if (fieldType.startsWith(ENUM_PREFIX) && fieldType.endsWith(ENUM_SUFFIX)) {
                val enumName = fieldType.substring(1, fieldType.lastIndex)
                FieldType(enumName, enumDecoder.getEnumDecoder(enumName))
            } else if (fieldType.contains(MAP_INFIX)) {
                val fieldItemTypeArr = fieldType.split(MAP_INFIX)
                if (fieldItemTypeArr.size == 2) {
                    val type1 = fieldItemTypeArr[0]
                    val decoder1 = FieldDecoderManager.getDecoder(type1.toUpperCase())
                        ?: throw Exception("分析map结构字段decode方法失败，无法识别的类型1:$type1")
                    val type2 = fieldItemTypeArr[1]
                    val decoder2 = FieldDecoderManager.getDecoder(type2.toUpperCase())
                        ?: throw Exception("分析map结构字段decode方法失败，无法识别的类型2:$type2")
                    FieldType(
                        "map<${decoder1.getFieldTypeString()},${decoder2.getFieldTypeString()}>",
                        FieldDecoderManager.getMapDecoder(decoder1, decoder2)
                    )
                } else {
                    throw Exception("分析map结构字段decode方法失败，存在多个map中缀字符（只能有一个）")
                }
            } else {
                val decoder = FieldDecoderManager.getDecoder(fieldType.toUpperCase())
                    ?: throw Exception("分析普通字段decode方法失败，无法识别的类型：$fieldType")
                FieldType(decoder.getFieldTypeString(), decoder::decodeValue)
            }
        }
    }
}