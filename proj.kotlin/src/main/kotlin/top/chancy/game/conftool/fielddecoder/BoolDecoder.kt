package top.chancy.game.conftool.fielddecoder

class BoolDecoder : IFieldDecoder<Boolean> {
    override fun getFieldTypeString(): String = "bool"

    override fun decodeValue(content: String): Boolean {
        return if (content == "1" || content.toUpperCase() == "Y") true
        else if (content == "0" || content.toUpperCase() == "N") false
        else throw Exception("Invalid bool value:$content")
    }
}