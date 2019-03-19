package top.chancy.game.conftool

import com.baidu.bjf.remoting.protobuf.ProtobufIDLProxy
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import top.chancy.game.conftool.filereader.FileReaderManager
import java.io.File

class ConfDecoder {
    fun run(paramProcessor: ParamProcessor) {
        val enumDecoder = EnumDecoder()
        val allBuilder = StringBuilder(PROTO_HEADER).append("package ").append(paramProcessor.packageName).append(";\n")
        val clientBuilder = StringBuilder(allBuilder)
        val serverBuilder = StringBuilder(allBuilder)

        val allWrapperBuilder = StringBuilder("message ${paramProcessor.confWrapperName}{\n")
        val clientWrapperBuilder = StringBuilder(allWrapperBuilder)
        val serverWrapperBuilder = StringBuilder(allWrapperBuilder)

        var allIndex = 0
        var clientIndex = 0
        var serverIndex = 0

        val oneDimensionalTablePathFile = paramProcessor.oneDimensionalTablePathFile
        val oneDimensionalDecoderList = mutableListOf<OneDimensionalDecoder>()
        if (oneDimensionalTablePathFile != null) {
            val files = oneDimensionalTablePathFile.listFiles()
            files.forEach {
                if (!it.isDirectory) {
                    val fileReader = FileReaderManager.getFileReader(it.extension)
                    if (fileReader == null) {
                        logger.info("${it.name} 文件类型不支持，自动跳过")
                    } else {
                        val decoder = try {
                            OneDimensionalDecoder(
                                firstLetterUpperCase(it.nameWithoutExtension),
                                fileReader.read(it),
                                enumDecoder
                            )
                        } catch (e: Exception) {
                            throw Exception("${e.message},in file:${it.name}")
                        }
                        if (decoder.allProtoDefine != null) {
                            allBuilder.append(decoder.allProtoDefine)
                            allWrapperBuilder.append(decoder.getDataFieldStatement(++allIndex))
                        }
                        if (decoder.clientProtoDefine != null) {
                            clientBuilder.append(decoder.clientProtoDefine)
                            clientWrapperBuilder.append(decoder.getDataFieldStatement(++clientIndex))
                        }
                        if (decoder.serverProtoDefine != null) {
                            serverBuilder.append(decoder.serverProtoDefine)
                            serverWrapperBuilder.append(decoder.getDataFieldStatement(++serverIndex))
                        }
                        oneDimensionalDecoderList.add(decoder)
                    }
                }
            }
        }

        val twoDimensionalTablePathFile = paramProcessor.twoDimensionalTablePathFile
        val twoDimensionalDecoderList = mutableListOf<TwoDimensionalDecoder>()
        if (twoDimensionalTablePathFile != null) {
            val files = twoDimensionalTablePathFile.listFiles()
            files.forEach {
                if (!it.isDirectory) {
                    val fileReader = FileReaderManager.getFileReader(it.extension)
                    if (fileReader == null) {
                        logger.info("${it.name} 文件类型不支持，自动跳过")
                    } else {
                        val decoder = try {
                            TwoDimensionalDecoder(
                                firstLetterUpperCase(it.nameWithoutExtension),
                                fileReader.read(it),
                                enumDecoder
                            )
                        } catch (e: Exception) {
                            throw Exception("${e.message},in file:${it.name}")
                        }
                        if (decoder.allProtoDefine != null) {
                            allBuilder.append(decoder.allProtoDefine)
                            allWrapperBuilder.append(decoder.getDataFieldStatement(++allIndex))
                        }
                        if (decoder.clientProtoDefine != null) {
                            clientBuilder.append(decoder.clientProtoDefine)
                            clientWrapperBuilder.append(decoder.getDataFieldStatement(++clientIndex))
                        }
                        if (decoder.serverProtoDefine != null) {
                            serverBuilder.append(decoder.serverProtoDefine)
                            serverWrapperBuilder.append(decoder.getDataFieldStatement(++serverIndex))
                        }
                        twoDimensionalDecoderList.add(decoder)
                    }
                }
            }
        }

        val allEnumDefine = enumDecoder.getAllEnumDefine()
        val allProtoDefine = allBuilder.append(allEnumDefine).append(allWrapperBuilder).append("}\n").toString()
        val clientProtoDefine =
            clientBuilder.append(allEnumDefine).append(clientWrapperBuilder).append("}\n").toString()
        val serverProtoDefine =
            serverBuilder.append(allEnumDefine).append(serverWrapperBuilder).append("}\n").toString()
        val allProxyMap = ProtobufIDLProxy.create(allProtoDefine)
        val allProxy = allProxyMap[paramProcessor.confWrapperName]!!
        val clientProxyMap = ProtobufIDLProxy.create(clientProtoDefine)
        val clientProxy = clientProxyMap[paramProcessor.confWrapperName]!!
        val serverProxyMap = ProtobufIDLProxy.create(serverProtoDefine)
        val serverProxy = serverProxyMap[paramProcessor.confWrapperName]!!
        oneDimensionalDecoderList.forEach { decoder ->
            val confName = decoder.confName
            val fieldName = decoder.getDataFieldName()
            allProxy.put(fieldName, decoder.getAllData(allProxyMap[confName]!!))
            if (decoder.clientProtoDefine != null) {
                clientProxy.put(fieldName, decoder.getClientData(clientProxyMap[confName]!!))
            }
            if (decoder.serverProtoDefine != null) {
                serverProxy.put(fieldName, decoder.getServerData(serverProxyMap[confName]!!))
            }
        }
        twoDimensionalDecoderList.forEach { decoder ->
            val confName = decoder.confName
            val fieldName = decoder.getDataFieldName()
            allProxy.put(fieldName, decoder.getAllData(allProxyMap[confName]!!)!!)
            if (decoder.clientProtoDefine != null) {
                clientProxy.put(fieldName, decoder.getClientData(clientProxyMap[confName]!!)!!)
            }
            if (decoder.serverProtoDefine != null) {
                serverProxy.put(fieldName, decoder.getServerData(serverProxyMap[confName]!!)!!)
            }
        }
        val protoDesPath = paramProcessor.protoOutputPath
        val bytesDesPath = paramProcessor.bytesOutputPath
        if (allIndex > 0) {
            val allProtoFile = File("$protoDesPath/conf.all.proto")
            allProtoFile.writeText(allProtoDefine)
            val allDataFile = File("$bytesDesPath/conf.all.dat")
            allDataFile.writeBytes(allProxy.encode())
            if (serverIndex > 0) {
                val serverProtoFile = File("$protoDesPath/conf.server.proto")
                serverProtoFile.writeText(serverProtoDefine)
                val serverDataFile = File("$bytesDesPath/conf.server.dat")
                serverDataFile.writeBytes(serverProxy.encode())
            } else {
                println("服务端部分为空")
            }
            if (clientIndex > 0) {
                val clientProtoFile = File("$protoDesPath/conf.client.proto")
                clientProtoFile.writeText(clientProtoDefine)
                val clientDataFile = File("$bytesDesPath/conf.client.dat")
                clientDataFile.writeBytes(clientProxy.encode())
            } else {
                println("客户端部分为空")
            }
        } else {
            println("没有可识别的配置文件")
        }
    }


    companion object {
        private val logger: Logger = LoggerFactory.getLogger(ConfDecoder::class.java)
        private const val PROTO_HEADER = "syntax = \"proto3\";\n"
        const val CLIENT_FLAG = 'C'
        const val SERVER_FLAG = 'S'

        fun firstLetterUpperCase(content: String): String {
            return content.first().toUpperCase() + content.substring(1)
        }

        fun firstLetterLowerCase(content: String): String {
            return content.first().toLowerCase() + content.substring(1)
        }
    }

}