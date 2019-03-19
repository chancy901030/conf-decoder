package top.chancy.game.conftool

fun main(args: Array<String>) {
    val paramProcessor = ParamProcessor()
    args.forEach {
        paramProcessor.readArg(it)
    }
    paramProcessor.validate()
    ConfDecoder().run(paramProcessor)
}