package top.chancy.game.conftool.filereader

import java.io.File

interface IFileReader {
    fun read(file: File): Array<Array<String>>
}