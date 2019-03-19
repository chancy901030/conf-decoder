package top.chancy.game.conftool.filereader

object FileReaderManager {
    private val fileReaderMap = mutableMapOf<String, IFileReader>()

    init {
        registerFileReader("xlsx", ExcelFileReader())
    }

    fun registerFileReader(fileExtension: String, reader: IFileReader) {
        fileReaderMap[fileExtension] = reader
    }

    fun getFileReader(fileExtension: String): IFileReader? {
        return fileReaderMap[fileExtension]
    }
}