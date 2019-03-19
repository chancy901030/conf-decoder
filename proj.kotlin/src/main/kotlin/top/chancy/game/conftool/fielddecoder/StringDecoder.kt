package top.chancy.game.conftool.fielddecoder

class StringDecoder : IFieldDecoder<String> {
    override fun getFieldTypeString(): String = "string"

    override fun decodeValue(content: String): String = content
}