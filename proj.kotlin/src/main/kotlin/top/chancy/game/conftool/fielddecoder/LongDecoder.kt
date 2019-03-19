package top.chancy.game.conftool.fielddecoder

class LongDecoder : IFieldDecoder<Long> {
    override fun getFieldTypeString(): String = "int64"

    override fun decodeValue(content: String): Long =
        content.toLongOrNull() ?: throw Exception("Invalid long value:$content")
}