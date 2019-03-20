# What is this?
A tool that can decode one/two dimensional config tables into protobuf structure and bytes file at the same time.

## Usage
    * 1.Make sure jdk1.8 is installed
    * 2.Run like this 
            >java -jar conf-decoder-1.0-SNAPSHOT-all.jar
            > --src1=null  //path for one dimensional tables,default null
            > --src2=. //path for two dimensional tables
            > --proto_out=. //path for proto files outputs
            > --bytes_out=. //path for bytes outputs
            > --pkg=top.chancy.game //package name
            > --wrapper=ConfCenter //wrapper class name

## Supported field type
    | config field type |   protobuf type   |     java type     | description                                         
    |:-----------------:|:-----------------:|:-----------------:|:----------------------------:
    |      int          |      int32        |      int          |                              
    |      long         |      int64        |      long         |                              
    |      double       |      double       |      double       |                              
    |      bool         |      bool         |      bool         | 'y' 'yes' or 'n' 'no'          
    |      string       |      string       |      String       |                              
    |       int[]       |   repeated int32  |    List<Integer>  | Use comma to split up. eg. 1,2,3 
    |      long[]       |   repeated int64  |    List<Long>     | Use comma to split up. eg. 12345678901234567,12345678901234567
    |    double[]       |   repeated double |    List<Double>   | Use comma to split up. eg. 3.14,3.1415                 
    |      bool[]       |   repeated bool   |    List<Boolean>  | Use comma to split up. eg. y,n,y 
    |    string[]       |   repeated string |    List<String>   | Use comma to split up. eg. John,Rick
    |     xxx:xxx       |    map<xxx,xxx>   |    Map<xxx,xxx>   | Use colon to split key and value.Use comma to split Key-vale pairs. eg. 1:John,2:Rick
    |  {SomeEnum}       |     SomeEnum      |     SomeEnum      | Will auto create a enumeration named "SomeEnum".