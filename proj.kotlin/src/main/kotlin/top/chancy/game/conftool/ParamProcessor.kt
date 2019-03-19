package top.chancy.game.conftool

import java.io.File

class ParamProcessor {
    private var oneDimensionalTablePath: String? = null
    private var twoDimensionalTablePath: String? = "."
    var protoOutputPath: String = "."
    var bytesOutputPath: String = "."
    var packageName: String = ""
    var confWrapperName: String = "ConfCenter"

    var oneDimensionalTablePathFile: File? = null
    var twoDimensionalTablePathFile: File? = null

    fun readArg(arg: String) {
        if (paramRegex.matchEntire(arg) != null) {
            val entry = arg.substring(2).split('=')
            val key = entry[0]
            val value = entry[1]
            when (key) {
                "src1" -> oneDimensionalTablePath = value
                "src2" -> twoDimensionalTablePath = value
                "proto_out" -> protoOutputPath = value
                "bytes_out" -> bytesOutputPath = value
                "pkg" -> packageName = value
                "wrapper" -> confWrapperName = value
            }
        } else {
            throw Exception("无法识别的参数:$arg,请参照 $USAGE")
        }
    }

    fun validate() {
        if (oneDimensionalTablePath == null || oneDimensionalTablePath!!.isBlank() || oneDimensionalTablePath == "null") {
            oneDimensionalTablePathFile = null
        } else {
            val file = File(oneDimensionalTablePath)
            if (!file.exists()) {
                throw Exception("一维表路径不存在:$oneDimensionalTablePath")
            }
            oneDimensionalTablePathFile = file
        }
        if (twoDimensionalTablePath == null || twoDimensionalTablePath!!.isBlank() || twoDimensionalTablePath == "null") {
            twoDimensionalTablePathFile = null
        } else {
            val file = File(twoDimensionalTablePath)
            if (!file.exists()) {
                throw Exception("二维表路径不存在:$twoDimensionalTablePath")
            }
            twoDimensionalTablePathFile = file
        }
        if (oneDimensionalTablePath == twoDimensionalTablePath) {
            throw Exception("一维表和二维表不能在相同路径下:$oneDimensionalTablePath")
        }
        if (packageNameRegex.matchEntire(packageName) == null) {
            throw Exception("包名不正确:$packageName")
        }
        if (wrapperNameRegex.matchEntire(confWrapperName) == null) {
            throw Exception("包装类类名不正确:$confWrapperName")
        }
        println("src1 = $oneDimensionalTablePath")
        println("src2 = $twoDimensionalTablePath")
        println("proto_out = $protoOutputPath")
        println("bytes_out = $bytesOutputPath")
        println("pkg = $packageName")
        println("wrapper = $confWrapperName")
    }

    companion object {
        private val paramRegex = Regex("--(src1|src2|proto_out|bytes_out|pkg|wrapper)=.+")
        private val packageNameRegex = Regex("[a-zA-Z][-a-zA-Z0-9]*(\\.[a-zA-Z][-a-zA-Z0-9]+)*")
        private val wrapperNameRegex = Regex("[a-zA-Z][_a-zA-Z0-9]*")
        private const val USAGE = "usage:\n" +
                "java -jar conf-decoder\n" +
                "--src1=null  //path for one dimensional tables,default null\n" +
                "--src2=. //path for two dimensional tables\n" +
                "--proto_out=. //path for proto files outputs\n" +
                "--bytes_out=. //path for bytes outputs\n" +
                "--pkg=top.chancy.game //package name\n" +
                "--wrapper=ConfCenter //wrapper class name\n"
    }
}