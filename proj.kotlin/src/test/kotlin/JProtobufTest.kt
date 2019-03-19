import com.baidu.bjf.remoting.protobuf.ProtobufIDLProxy
import org.junit.Assert
import org.junit.Test
import java.util.ArrayList

class JProtobufTest{
    @Test
    fun test(){
        val proto = "syntax = \"proto3\";" +
                "message Wrapper{" +
                "int32 id = 1;" +
                "repeated Content contentArr = 2;" +
                "}" +
                "message Content{" +
                "repeated string stringArrValue = 1;" +
                "}"
        val objectMap = ProtobufIDLProxy.create(proto)
        val wrapperObject = objectMap["Wrapper"]!!
        val contentObject = objectMap["Content"]!!
        val stringArr = ArrayList<String>()
        stringArr.add("piece")
        stringArr.add("of")
        stringArr.add("shit")
        contentObject.put("stringArrValue", stringArr)
        wrapperObject.put("id", 10086)
        val contentArr = ArrayList<Any>()
        contentArr.add(contentObject.target)
        contentArr.add(contentObject.target)
        contentArr.add(contentObject.target)
        wrapperObject.put("contentArr", contentArr)
        val encodedBytes = wrapperObject.encode()

        val wrapperDeocded = wrapperObject.decode(encodedBytes)
        Assert.assertEquals(wrapperDeocded.get("id"),wrapperObject.get("id"))
        val contentArrDecoded = wrapperDeocded.get("contentArr")
        Assert.assertNotNull(contentArrDecoded)
    }
}