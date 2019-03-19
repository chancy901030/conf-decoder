import * as fs from 'fs';
import * as proto from './ProtoDefine';

let data = fs.readFileSync("../output/conf.client.dat")
let wrapper:proto.top.chancy.game.ConfCenter = proto.top.chancy.game.ConfCenter.decode(data)
console.log(JSON.stringify(wrapper))
