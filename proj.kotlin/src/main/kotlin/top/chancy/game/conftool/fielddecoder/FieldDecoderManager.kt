package top.chancy.game.conftool.fielddecoder

object FieldDecoderManager {
    private const val LIST_SPLITTER = ','
    private const val MAP_KEY_VALUE_SPLITTER = ':'
    private const val MAP_ENTRY_SPLITTER = ','
    private val fieldDecoderMap = mutableMapOf<String, IFieldDecoder<*>>()

    init {
        registerDecoder(DoubleDecoder())
        registerDecoder("int", IntDecoder())
        registerDecoder("long", LongDecoder())
        registerDecoder(BoolDecoder())
        registerDecoder(StringDecoder())
    }

    fun registerDecoder(fieldType: String, decoder: IFieldDecoder<*>) {
        fieldDecoderMap[fieldType.toUpperCase()] = decoder
    }

    fun registerDecoder(decoder: IFieldDecoder<*>) {
        registerDecoder(decoder.getFieldTypeString(), decoder)
    }

    fun getDecoder(fieldType: String): IFieldDecoder<*>? {
        return fieldDecoderMap[fieldType]
    }

    fun <T : Any> getListDecoder(decoder: IFieldDecoder<T>) = fun(content: String) =
        decodeList(content, decoder)

    fun <T : Any> decodeList(content: String, decoder: IFieldDecoder<T>): List<T> {
        val contentArr = content.split(LIST_SPLITTER)
        return if (contentArr.isEmpty()) {
            emptyList()
        } else {
            var resultList: MutableList<T> = mutableListOf()
            contentArr.forEach {
                val value = decoder.decodeValue(it)
                resultList.add(value)
            }
            resultList
        }
    }

    fun <T : Any, K : Any> getMapDecoder(keyDecoder: IFieldDecoder<T>, valueDecoder: IFieldDecoder<K>) =
        fun(content: String) =
            decodeMap(content, keyDecoder, valueDecoder)

    fun <T : Any, K : Any> decodeMap(
        content: String,
        keyDecoder: IFieldDecoder<T>,
        valueDecoder: IFieldDecoder<K>
    ): Map<T, K> {
        val contentArr = content.split(MAP_ENTRY_SPLITTER)
        return if (contentArr.isEmpty()) {
            emptyMap()
        } else {
            var resultMap: MutableMap<T, K> = mutableMapOf()
            contentArr.forEach {
                val keyValueArr = it.split(MAP_KEY_VALUE_SPLITTER)
                if (keyValueArr.size != 2) {
                    throw Exception("wrong key-value format:$it")
                } else {
                    val key = keyDecoder.decodeValue(keyValueArr[0])
                    val value = valueDecoder.decodeValue(keyValueArr[1])
                    resultMap[key] = value
                }
            }
            resultMap
        }
    }


}