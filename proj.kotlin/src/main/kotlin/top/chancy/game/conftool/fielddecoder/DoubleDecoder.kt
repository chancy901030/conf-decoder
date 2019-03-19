package top.chancy.game.conftool.fielddecoder

class DoubleDecoder : IFieldDecoder<Double> {
    override fun getFieldTypeString(): String = "double"

    override fun decodeValue(content: String): Double =
        content.toDoubleOrNull() ?: throw Exception("Invalid double value:$content")
}