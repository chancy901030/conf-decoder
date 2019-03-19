package top.chancy.game.conftool.fielddecoder

interface IFieldDecoder<T : Any> {
    fun getFieldTypeString(): String
    fun decodeValue(content: String): T
}