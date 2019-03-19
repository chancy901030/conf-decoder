package top.chancy.game.conftool.fielddecoder

class IntDecoder : IFieldDecoder<Int> {
    override fun getFieldTypeString(): String = "int32"

    override fun decodeValue(content: String): Int =
        content.toIntOrNull() ?: throw Exception("Invalid int value:$content")
}