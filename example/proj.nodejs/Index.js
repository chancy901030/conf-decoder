"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var proto = __importStar(require("./ProtoDefine"));
var data = fs.readFileSync("../output/conf.client.dat");
var wrapper = proto.top.chancy.game.ConfCenter.decode(data);
console.log(JSON.stringify(wrapper));
