/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.top = (function() {

    /**
     * Namespace top.
     * @exports top
     * @namespace
     */
    var top = {};

    top.chancy = (function() {

        /**
         * Namespace chancy.
         * @memberof top
         * @namespace
         */
        var chancy = {};

        chancy.game = (function() {

            /**
             * Namespace game.
             * @memberof top.chancy
             * @namespace
             */
            var game = {};

            game.Global = (function() {

                /**
                 * Properties of a Global.
                 * @memberof top.chancy.game
                 * @interface IGlobal
                 * @property {number|null} [IntValue] Global IntValue
                 */

                /**
                 * Constructs a new Global.
                 * @memberof top.chancy.game
                 * @classdesc Represents a Global.
                 * @implements IGlobal
                 * @constructor
                 * @param {top.chancy.game.IGlobal=} [properties] Properties to set
                 */
                function Global(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Global IntValue.
                 * @member {number} IntValue
                 * @memberof top.chancy.game.Global
                 * @instance
                 */
                Global.prototype.IntValue = 0;

                /**
                 * Creates a new Global instance using the specified properties.
                 * @function create
                 * @memberof top.chancy.game.Global
                 * @static
                 * @param {top.chancy.game.IGlobal=} [properties] Properties to set
                 * @returns {top.chancy.game.Global} Global instance
                 */
                Global.create = function create(properties) {
                    return new Global(properties);
                };

                /**
                 * Encodes the specified Global message. Does not implicitly {@link top.chancy.game.Global.verify|verify} messages.
                 * @function encode
                 * @memberof top.chancy.game.Global
                 * @static
                 * @param {top.chancy.game.IGlobal} message Global message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Global.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.IntValue);
                    return writer;
                };

                /**
                 * Encodes the specified Global message, length delimited. Does not implicitly {@link top.chancy.game.Global.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof top.chancy.game.Global
                 * @static
                 * @param {top.chancy.game.IGlobal} message Global message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Global.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Global message from the specified reader or buffer.
                 * @function decode
                 * @memberof top.chancy.game.Global
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {top.chancy.game.Global} Global
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Global.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.top.chancy.game.Global();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.IntValue = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a Global message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof top.chancy.game.Global
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {top.chancy.game.Global} Global
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Global.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Global message.
                 * @function verify
                 * @memberof top.chancy.game.Global
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Global.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                        if (!$util.isInteger(message.IntValue))
                            return "IntValue: integer expected";
                    return null;
                };

                /**
                 * Creates a Global message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof top.chancy.game.Global
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {top.chancy.game.Global} Global
                 */
                Global.fromObject = function fromObject(object) {
                    if (object instanceof $root.top.chancy.game.Global)
                        return object;
                    var message = new $root.top.chancy.game.Global();
                    if (object.IntValue != null)
                        message.IntValue = object.IntValue | 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Global message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof top.chancy.game.Global
                 * @static
                 * @param {top.chancy.game.Global} message Global
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Global.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.IntValue = 0;
                    if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                        object.IntValue = message.IntValue;
                    return object;
                };

                /**
                 * Converts this Global to JSON.
                 * @function toJSON
                 * @memberof top.chancy.game.Global
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Global.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return Global;
            })();

            game.FuckConf = (function() {

                /**
                 * Properties of a FuckConf.
                 * @memberof top.chancy.game
                 * @interface IFuckConf
                 * @property {number|null} [DoubleValue] FuckConf DoubleValue
                 * @property {number|null} [IntValue] FuckConf IntValue
                 * @property {number|Long|null} [longValue] FuckConf longValue
                 * @property {boolean|null} [boolValue] FuckConf boolValue
                 * @property {string|null} [stringValue] FuckConf stringValue
                 * @property {top.chancy.game.TestEnum|null} [enumValue] FuckConf enumValue
                 * @property {Object.<string,string>|null} [mapValue] FuckConf mapValue
                 */

                /**
                 * Constructs a new FuckConf.
                 * @memberof top.chancy.game
                 * @classdesc Represents a FuckConf.
                 * @implements IFuckConf
                 * @constructor
                 * @param {top.chancy.game.IFuckConf=} [properties] Properties to set
                 */
                function FuckConf(properties) {
                    this.mapValue = {};
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * FuckConf DoubleValue.
                 * @member {number} DoubleValue
                 * @memberof top.chancy.game.FuckConf
                 * @instance
                 */
                FuckConf.prototype.DoubleValue = 0;

                /**
                 * FuckConf IntValue.
                 * @member {number} IntValue
                 * @memberof top.chancy.game.FuckConf
                 * @instance
                 */
                FuckConf.prototype.IntValue = 0;

                /**
                 * FuckConf longValue.
                 * @member {number|Long} longValue
                 * @memberof top.chancy.game.FuckConf
                 * @instance
                 */
                FuckConf.prototype.longValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * FuckConf boolValue.
                 * @member {boolean} boolValue
                 * @memberof top.chancy.game.FuckConf
                 * @instance
                 */
                FuckConf.prototype.boolValue = false;

                /**
                 * FuckConf stringValue.
                 * @member {string} stringValue
                 * @memberof top.chancy.game.FuckConf
                 * @instance
                 */
                FuckConf.prototype.stringValue = "";

                /**
                 * FuckConf enumValue.
                 * @member {top.chancy.game.TestEnum} enumValue
                 * @memberof top.chancy.game.FuckConf
                 * @instance
                 */
                FuckConf.prototype.enumValue = 0;

                /**
                 * FuckConf mapValue.
                 * @member {Object.<string,string>} mapValue
                 * @memberof top.chancy.game.FuckConf
                 * @instance
                 */
                FuckConf.prototype.mapValue = $util.emptyObject;

                /**
                 * Creates a new FuckConf instance using the specified properties.
                 * @function create
                 * @memberof top.chancy.game.FuckConf
                 * @static
                 * @param {top.chancy.game.IFuckConf=} [properties] Properties to set
                 * @returns {top.chancy.game.FuckConf} FuckConf instance
                 */
                FuckConf.create = function create(properties) {
                    return new FuckConf(properties);
                };

                /**
                 * Encodes the specified FuckConf message. Does not implicitly {@link top.chancy.game.FuckConf.verify|verify} messages.
                 * @function encode
                 * @memberof top.chancy.game.FuckConf
                 * @static
                 * @param {top.chancy.game.IFuckConf} message FuckConf message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FuckConf.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.DoubleValue != null && message.hasOwnProperty("DoubleValue"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.DoubleValue);
                    if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.IntValue);
                    if (message.longValue != null && message.hasOwnProperty("longValue"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int64(message.longValue);
                    if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.boolValue);
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.stringValue);
                    if (message.enumValue != null && message.hasOwnProperty("enumValue"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.enumValue);
                    if (message.mapValue != null && message.hasOwnProperty("mapValue"))
                        for (var keys = Object.keys(message.mapValue), i = 0; i < keys.length; ++i)
                            writer.uint32(/* id 7, wireType 2 =*/58).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.mapValue[keys[i]]).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified FuckConf message, length delimited. Does not implicitly {@link top.chancy.game.FuckConf.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof top.chancy.game.FuckConf
                 * @static
                 * @param {top.chancy.game.IFuckConf} message FuckConf message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FuckConf.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a FuckConf message from the specified reader or buffer.
                 * @function decode
                 * @memberof top.chancy.game.FuckConf
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {top.chancy.game.FuckConf} FuckConf
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FuckConf.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.top.chancy.game.FuckConf(), key;
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.DoubleValue = reader.double();
                            break;
                        case 2:
                            message.IntValue = reader.int32();
                            break;
                        case 3:
                            message.longValue = reader.int64();
                            break;
                        case 4:
                            message.boolValue = reader.bool();
                            break;
                        case 5:
                            message.stringValue = reader.string();
                            break;
                        case 6:
                            message.enumValue = reader.int32();
                            break;
                        case 7:
                            reader.skip().pos++;
                            if (message.mapValue === $util.emptyObject)
                                message.mapValue = {};
                            key = reader.int32();
                            reader.pos++;
                            message.mapValue[key] = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a FuckConf message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof top.chancy.game.FuckConf
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {top.chancy.game.FuckConf} FuckConf
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FuckConf.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a FuckConf message.
                 * @function verify
                 * @memberof top.chancy.game.FuckConf
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FuckConf.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.DoubleValue != null && message.hasOwnProperty("DoubleValue"))
                        if (typeof message.DoubleValue !== "number")
                            return "DoubleValue: number expected";
                    if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                        if (!$util.isInteger(message.IntValue))
                            return "IntValue: integer expected";
                    if (message.longValue != null && message.hasOwnProperty("longValue"))
                        if (!$util.isInteger(message.longValue) && !(message.longValue && $util.isInteger(message.longValue.low) && $util.isInteger(message.longValue.high)))
                            return "longValue: integer|Long expected";
                    if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                        if (typeof message.boolValue !== "boolean")
                            return "boolValue: boolean expected";
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        if (!$util.isString(message.stringValue))
                            return "stringValue: string expected";
                    if (message.enumValue != null && message.hasOwnProperty("enumValue"))
                        switch (message.enumValue) {
                        default:
                            return "enumValue: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    if (message.mapValue != null && message.hasOwnProperty("mapValue")) {
                        if (!$util.isObject(message.mapValue))
                            return "mapValue: object expected";
                        var key = Object.keys(message.mapValue);
                        for (var i = 0; i < key.length; ++i) {
                            if (!$util.key32Re.test(key[i]))
                                return "mapValue: integer key{k:int32} expected";
                            if (!$util.isString(message.mapValue[key[i]]))
                                return "mapValue: string{k:int32} expected";
                        }
                    }
                    return null;
                };

                /**
                 * Creates a FuckConf message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof top.chancy.game.FuckConf
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {top.chancy.game.FuckConf} FuckConf
                 */
                FuckConf.fromObject = function fromObject(object) {
                    if (object instanceof $root.top.chancy.game.FuckConf)
                        return object;
                    var message = new $root.top.chancy.game.FuckConf();
                    if (object.DoubleValue != null)
                        message.DoubleValue = Number(object.DoubleValue);
                    if (object.IntValue != null)
                        message.IntValue = object.IntValue | 0;
                    if (object.longValue != null)
                        if ($util.Long)
                            (message.longValue = $util.Long.fromValue(object.longValue)).unsigned = false;
                        else if (typeof object.longValue === "string")
                            message.longValue = parseInt(object.longValue, 10);
                        else if (typeof object.longValue === "number")
                            message.longValue = object.longValue;
                        else if (typeof object.longValue === "object")
                            message.longValue = new $util.LongBits(object.longValue.low >>> 0, object.longValue.high >>> 0).toNumber();
                    if (object.boolValue != null)
                        message.boolValue = Boolean(object.boolValue);
                    if (object.stringValue != null)
                        message.stringValue = String(object.stringValue);
                    switch (object.enumValue) {
                    case "TYPE_A":
                    case 0:
                        message.enumValue = 0;
                        break;
                    case "TYPE_B":
                    case 1:
                        message.enumValue = 1;
                        break;
                    }
                    if (object.mapValue) {
                        if (typeof object.mapValue !== "object")
                            throw TypeError(".top.chancy.game.FuckConf.mapValue: object expected");
                        message.mapValue = {};
                        for (var keys = Object.keys(object.mapValue), i = 0; i < keys.length; ++i)
                            message.mapValue[keys[i]] = String(object.mapValue[keys[i]]);
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a FuckConf message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof top.chancy.game.FuckConf
                 * @static
                 * @param {top.chancy.game.FuckConf} message FuckConf
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FuckConf.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.objects || options.defaults)
                        object.mapValue = {};
                    if (options.defaults) {
                        object.DoubleValue = 0;
                        object.IntValue = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.longValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.longValue = options.longs === String ? "0" : 0;
                        object.boolValue = false;
                        object.stringValue = "";
                        object.enumValue = options.enums === String ? "TYPE_A" : 0;
                    }
                    if (message.DoubleValue != null && message.hasOwnProperty("DoubleValue"))
                        object.DoubleValue = options.json && !isFinite(message.DoubleValue) ? String(message.DoubleValue) : message.DoubleValue;
                    if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                        object.IntValue = message.IntValue;
                    if (message.longValue != null && message.hasOwnProperty("longValue"))
                        if (typeof message.longValue === "number")
                            object.longValue = options.longs === String ? String(message.longValue) : message.longValue;
                        else
                            object.longValue = options.longs === String ? $util.Long.prototype.toString.call(message.longValue) : options.longs === Number ? new $util.LongBits(message.longValue.low >>> 0, message.longValue.high >>> 0).toNumber() : message.longValue;
                    if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                        object.boolValue = message.boolValue;
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        object.stringValue = message.stringValue;
                    if (message.enumValue != null && message.hasOwnProperty("enumValue"))
                        object.enumValue = options.enums === String ? $root.top.chancy.game.TestEnum[message.enumValue] : message.enumValue;
                    var keys2;
                    if (message.mapValue && (keys2 = Object.keys(message.mapValue)).length) {
                        object.mapValue = {};
                        for (var j = 0; j < keys2.length; ++j)
                            object.mapValue[keys2[j]] = message.mapValue[keys2[j]];
                    }
                    return object;
                };

                /**
                 * Converts this FuckConf to JSON.
                 * @function toJSON
                 * @memberof top.chancy.game.FuckConf
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FuckConf.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return FuckConf;
            })();

            game.TestConf = (function() {

                /**
                 * Properties of a TestConf.
                 * @memberof top.chancy.game
                 * @interface ITestConf
                 * @property {number|null} [DoubleValue] TestConf DoubleValue
                 * @property {Array.<number>|null} [DoubleArrayValue] TestConf DoubleArrayValue
                 * @property {number|null} [IntValue] TestConf IntValue
                 * @property {Array.<number>|null} [IntArrayValue] TestConf IntArrayValue
                 * @property {number|Long|null} [longValue] TestConf longValue
                 * @property {Array.<number|Long>|null} [longArrayValue] TestConf longArrayValue
                 * @property {boolean|null} [boolValue] TestConf boolValue
                 * @property {Array.<boolean>|null} [boolArrayValue] TestConf boolArrayValue
                 * @property {string|null} [stringValue] TestConf stringValue
                 * @property {Array.<string>|null} [stringArrayValue] TestConf stringArrayValue
                 * @property {top.chancy.game.TestEnum|null} [enumValue] TestConf enumValue
                 */

                /**
                 * Constructs a new TestConf.
                 * @memberof top.chancy.game
                 * @classdesc Represents a TestConf.
                 * @implements ITestConf
                 * @constructor
                 * @param {top.chancy.game.ITestConf=} [properties] Properties to set
                 */
                function TestConf(properties) {
                    this.DoubleArrayValue = [];
                    this.IntArrayValue = [];
                    this.longArrayValue = [];
                    this.boolArrayValue = [];
                    this.stringArrayValue = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * TestConf DoubleValue.
                 * @member {number} DoubleValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.DoubleValue = 0;

                /**
                 * TestConf DoubleArrayValue.
                 * @member {Array.<number>} DoubleArrayValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.DoubleArrayValue = $util.emptyArray;

                /**
                 * TestConf IntValue.
                 * @member {number} IntValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.IntValue = 0;

                /**
                 * TestConf IntArrayValue.
                 * @member {Array.<number>} IntArrayValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.IntArrayValue = $util.emptyArray;

                /**
                 * TestConf longValue.
                 * @member {number|Long} longValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.longValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

                /**
                 * TestConf longArrayValue.
                 * @member {Array.<number|Long>} longArrayValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.longArrayValue = $util.emptyArray;

                /**
                 * TestConf boolValue.
                 * @member {boolean} boolValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.boolValue = false;

                /**
                 * TestConf boolArrayValue.
                 * @member {Array.<boolean>} boolArrayValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.boolArrayValue = $util.emptyArray;

                /**
                 * TestConf stringValue.
                 * @member {string} stringValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.stringValue = "";

                /**
                 * TestConf stringArrayValue.
                 * @member {Array.<string>} stringArrayValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.stringArrayValue = $util.emptyArray;

                /**
                 * TestConf enumValue.
                 * @member {top.chancy.game.TestEnum} enumValue
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 */
                TestConf.prototype.enumValue = 0;

                /**
                 * Creates a new TestConf instance using the specified properties.
                 * @function create
                 * @memberof top.chancy.game.TestConf
                 * @static
                 * @param {top.chancy.game.ITestConf=} [properties] Properties to set
                 * @returns {top.chancy.game.TestConf} TestConf instance
                 */
                TestConf.create = function create(properties) {
                    return new TestConf(properties);
                };

                /**
                 * Encodes the specified TestConf message. Does not implicitly {@link top.chancy.game.TestConf.verify|verify} messages.
                 * @function encode
                 * @memberof top.chancy.game.TestConf
                 * @static
                 * @param {top.chancy.game.ITestConf} message TestConf message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TestConf.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.DoubleValue != null && message.hasOwnProperty("DoubleValue"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.DoubleValue);
                    if (message.DoubleArrayValue != null && message.DoubleArrayValue.length) {
                        writer.uint32(/* id 2, wireType 2 =*/18).fork();
                        for (var i = 0; i < message.DoubleArrayValue.length; ++i)
                            writer.double(message.DoubleArrayValue[i]);
                        writer.ldelim();
                    }
                    if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.IntValue);
                    if (message.IntArrayValue != null && message.IntArrayValue.length) {
                        writer.uint32(/* id 4, wireType 2 =*/34).fork();
                        for (var i = 0; i < message.IntArrayValue.length; ++i)
                            writer.int32(message.IntArrayValue[i]);
                        writer.ldelim();
                    }
                    if (message.longValue != null && message.hasOwnProperty("longValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.longValue);
                    if (message.longArrayValue != null && message.longArrayValue.length) {
                        writer.uint32(/* id 6, wireType 2 =*/50).fork();
                        for (var i = 0; i < message.longArrayValue.length; ++i)
                            writer.int64(message.longArrayValue[i]);
                        writer.ldelim();
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.boolValue);
                    if (message.boolArrayValue != null && message.boolArrayValue.length) {
                        writer.uint32(/* id 8, wireType 2 =*/66).fork();
                        for (var i = 0; i < message.boolArrayValue.length; ++i)
                            writer.bool(message.boolArrayValue[i]);
                        writer.ldelim();
                    }
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.stringValue);
                    if (message.stringArrayValue != null && message.stringArrayValue.length)
                        for (var i = 0; i < message.stringArrayValue.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.stringArrayValue[i]);
                    if (message.enumValue != null && message.hasOwnProperty("enumValue"))
                        writer.uint32(/* id 11, wireType 0 =*/88).int32(message.enumValue);
                    return writer;
                };

                /**
                 * Encodes the specified TestConf message, length delimited. Does not implicitly {@link top.chancy.game.TestConf.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof top.chancy.game.TestConf
                 * @static
                 * @param {top.chancy.game.ITestConf} message TestConf message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                TestConf.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a TestConf message from the specified reader or buffer.
                 * @function decode
                 * @memberof top.chancy.game.TestConf
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {top.chancy.game.TestConf} TestConf
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TestConf.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.top.chancy.game.TestConf();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.DoubleValue = reader.double();
                            break;
                        case 2:
                            if (!(message.DoubleArrayValue && message.DoubleArrayValue.length))
                                message.DoubleArrayValue = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.DoubleArrayValue.push(reader.double());
                            } else
                                message.DoubleArrayValue.push(reader.double());
                            break;
                        case 3:
                            message.IntValue = reader.int32();
                            break;
                        case 4:
                            if (!(message.IntArrayValue && message.IntArrayValue.length))
                                message.IntArrayValue = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.IntArrayValue.push(reader.int32());
                            } else
                                message.IntArrayValue.push(reader.int32());
                            break;
                        case 5:
                            message.longValue = reader.int64();
                            break;
                        case 6:
                            if (!(message.longArrayValue && message.longArrayValue.length))
                                message.longArrayValue = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.longArrayValue.push(reader.int64());
                            } else
                                message.longArrayValue.push(reader.int64());
                            break;
                        case 7:
                            message.boolValue = reader.bool();
                            break;
                        case 8:
                            if (!(message.boolArrayValue && message.boolArrayValue.length))
                                message.boolArrayValue = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.boolArrayValue.push(reader.bool());
                            } else
                                message.boolArrayValue.push(reader.bool());
                            break;
                        case 9:
                            message.stringValue = reader.string();
                            break;
                        case 10:
                            if (!(message.stringArrayValue && message.stringArrayValue.length))
                                message.stringArrayValue = [];
                            message.stringArrayValue.push(reader.string());
                            break;
                        case 11:
                            message.enumValue = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a TestConf message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof top.chancy.game.TestConf
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {top.chancy.game.TestConf} TestConf
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                TestConf.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a TestConf message.
                 * @function verify
                 * @memberof top.chancy.game.TestConf
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                TestConf.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.DoubleValue != null && message.hasOwnProperty("DoubleValue"))
                        if (typeof message.DoubleValue !== "number")
                            return "DoubleValue: number expected";
                    if (message.DoubleArrayValue != null && message.hasOwnProperty("DoubleArrayValue")) {
                        if (!Array.isArray(message.DoubleArrayValue))
                            return "DoubleArrayValue: array expected";
                        for (var i = 0; i < message.DoubleArrayValue.length; ++i)
                            if (typeof message.DoubleArrayValue[i] !== "number")
                                return "DoubleArrayValue: number[] expected";
                    }
                    if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                        if (!$util.isInteger(message.IntValue))
                            return "IntValue: integer expected";
                    if (message.IntArrayValue != null && message.hasOwnProperty("IntArrayValue")) {
                        if (!Array.isArray(message.IntArrayValue))
                            return "IntArrayValue: array expected";
                        for (var i = 0; i < message.IntArrayValue.length; ++i)
                            if (!$util.isInteger(message.IntArrayValue[i]))
                                return "IntArrayValue: integer[] expected";
                    }
                    if (message.longValue != null && message.hasOwnProperty("longValue"))
                        if (!$util.isInteger(message.longValue) && !(message.longValue && $util.isInteger(message.longValue.low) && $util.isInteger(message.longValue.high)))
                            return "longValue: integer|Long expected";
                    if (message.longArrayValue != null && message.hasOwnProperty("longArrayValue")) {
                        if (!Array.isArray(message.longArrayValue))
                            return "longArrayValue: array expected";
                        for (var i = 0; i < message.longArrayValue.length; ++i)
                            if (!$util.isInteger(message.longArrayValue[i]) && !(message.longArrayValue[i] && $util.isInteger(message.longArrayValue[i].low) && $util.isInteger(message.longArrayValue[i].high)))
                                return "longArrayValue: integer|Long[] expected";
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                        if (typeof message.boolValue !== "boolean")
                            return "boolValue: boolean expected";
                    if (message.boolArrayValue != null && message.hasOwnProperty("boolArrayValue")) {
                        if (!Array.isArray(message.boolArrayValue))
                            return "boolArrayValue: array expected";
                        for (var i = 0; i < message.boolArrayValue.length; ++i)
                            if (typeof message.boolArrayValue[i] !== "boolean")
                                return "boolArrayValue: boolean[] expected";
                    }
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        if (!$util.isString(message.stringValue))
                            return "stringValue: string expected";
                    if (message.stringArrayValue != null && message.hasOwnProperty("stringArrayValue")) {
                        if (!Array.isArray(message.stringArrayValue))
                            return "stringArrayValue: array expected";
                        for (var i = 0; i < message.stringArrayValue.length; ++i)
                            if (!$util.isString(message.stringArrayValue[i]))
                                return "stringArrayValue: string[] expected";
                    }
                    if (message.enumValue != null && message.hasOwnProperty("enumValue"))
                        switch (message.enumValue) {
                        default:
                            return "enumValue: enum value expected";
                        case 0:
                        case 1:
                            break;
                        }
                    return null;
                };

                /**
                 * Creates a TestConf message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof top.chancy.game.TestConf
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {top.chancy.game.TestConf} TestConf
                 */
                TestConf.fromObject = function fromObject(object) {
                    if (object instanceof $root.top.chancy.game.TestConf)
                        return object;
                    var message = new $root.top.chancy.game.TestConf();
                    if (object.DoubleValue != null)
                        message.DoubleValue = Number(object.DoubleValue);
                    if (object.DoubleArrayValue) {
                        if (!Array.isArray(object.DoubleArrayValue))
                            throw TypeError(".top.chancy.game.TestConf.DoubleArrayValue: array expected");
                        message.DoubleArrayValue = [];
                        for (var i = 0; i < object.DoubleArrayValue.length; ++i)
                            message.DoubleArrayValue[i] = Number(object.DoubleArrayValue[i]);
                    }
                    if (object.IntValue != null)
                        message.IntValue = object.IntValue | 0;
                    if (object.IntArrayValue) {
                        if (!Array.isArray(object.IntArrayValue))
                            throw TypeError(".top.chancy.game.TestConf.IntArrayValue: array expected");
                        message.IntArrayValue = [];
                        for (var i = 0; i < object.IntArrayValue.length; ++i)
                            message.IntArrayValue[i] = object.IntArrayValue[i] | 0;
                    }
                    if (object.longValue != null)
                        if ($util.Long)
                            (message.longValue = $util.Long.fromValue(object.longValue)).unsigned = false;
                        else if (typeof object.longValue === "string")
                            message.longValue = parseInt(object.longValue, 10);
                        else if (typeof object.longValue === "number")
                            message.longValue = object.longValue;
                        else if (typeof object.longValue === "object")
                            message.longValue = new $util.LongBits(object.longValue.low >>> 0, object.longValue.high >>> 0).toNumber();
                    if (object.longArrayValue) {
                        if (!Array.isArray(object.longArrayValue))
                            throw TypeError(".top.chancy.game.TestConf.longArrayValue: array expected");
                        message.longArrayValue = [];
                        for (var i = 0; i < object.longArrayValue.length; ++i)
                            if ($util.Long)
                                (message.longArrayValue[i] = $util.Long.fromValue(object.longArrayValue[i])).unsigned = false;
                            else if (typeof object.longArrayValue[i] === "string")
                                message.longArrayValue[i] = parseInt(object.longArrayValue[i], 10);
                            else if (typeof object.longArrayValue[i] === "number")
                                message.longArrayValue[i] = object.longArrayValue[i];
                            else if (typeof object.longArrayValue[i] === "object")
                                message.longArrayValue[i] = new $util.LongBits(object.longArrayValue[i].low >>> 0, object.longArrayValue[i].high >>> 0).toNumber();
                    }
                    if (object.boolValue != null)
                        message.boolValue = Boolean(object.boolValue);
                    if (object.boolArrayValue) {
                        if (!Array.isArray(object.boolArrayValue))
                            throw TypeError(".top.chancy.game.TestConf.boolArrayValue: array expected");
                        message.boolArrayValue = [];
                        for (var i = 0; i < object.boolArrayValue.length; ++i)
                            message.boolArrayValue[i] = Boolean(object.boolArrayValue[i]);
                    }
                    if (object.stringValue != null)
                        message.stringValue = String(object.stringValue);
                    if (object.stringArrayValue) {
                        if (!Array.isArray(object.stringArrayValue))
                            throw TypeError(".top.chancy.game.TestConf.stringArrayValue: array expected");
                        message.stringArrayValue = [];
                        for (var i = 0; i < object.stringArrayValue.length; ++i)
                            message.stringArrayValue[i] = String(object.stringArrayValue[i]);
                    }
                    switch (object.enumValue) {
                    case "TYPE_A":
                    case 0:
                        message.enumValue = 0;
                        break;
                    case "TYPE_B":
                    case 1:
                        message.enumValue = 1;
                        break;
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a TestConf message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof top.chancy.game.TestConf
                 * @static
                 * @param {top.chancy.game.TestConf} message TestConf
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                TestConf.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.DoubleArrayValue = [];
                        object.IntArrayValue = [];
                        object.longArrayValue = [];
                        object.boolArrayValue = [];
                        object.stringArrayValue = [];
                    }
                    if (options.defaults) {
                        object.DoubleValue = 0;
                        object.IntValue = 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.longValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.longValue = options.longs === String ? "0" : 0;
                        object.boolValue = false;
                        object.stringValue = "";
                        object.enumValue = options.enums === String ? "TYPE_A" : 0;
                    }
                    if (message.DoubleValue != null && message.hasOwnProperty("DoubleValue"))
                        object.DoubleValue = options.json && !isFinite(message.DoubleValue) ? String(message.DoubleValue) : message.DoubleValue;
                    if (message.DoubleArrayValue && message.DoubleArrayValue.length) {
                        object.DoubleArrayValue = [];
                        for (var j = 0; j < message.DoubleArrayValue.length; ++j)
                            object.DoubleArrayValue[j] = options.json && !isFinite(message.DoubleArrayValue[j]) ? String(message.DoubleArrayValue[j]) : message.DoubleArrayValue[j];
                    }
                    if (message.IntValue != null && message.hasOwnProperty("IntValue"))
                        object.IntValue = message.IntValue;
                    if (message.IntArrayValue && message.IntArrayValue.length) {
                        object.IntArrayValue = [];
                        for (var j = 0; j < message.IntArrayValue.length; ++j)
                            object.IntArrayValue[j] = message.IntArrayValue[j];
                    }
                    if (message.longValue != null && message.hasOwnProperty("longValue"))
                        if (typeof message.longValue === "number")
                            object.longValue = options.longs === String ? String(message.longValue) : message.longValue;
                        else
                            object.longValue = options.longs === String ? $util.Long.prototype.toString.call(message.longValue) : options.longs === Number ? new $util.LongBits(message.longValue.low >>> 0, message.longValue.high >>> 0).toNumber() : message.longValue;
                    if (message.longArrayValue && message.longArrayValue.length) {
                        object.longArrayValue = [];
                        for (var j = 0; j < message.longArrayValue.length; ++j)
                            if (typeof message.longArrayValue[j] === "number")
                                object.longArrayValue[j] = options.longs === String ? String(message.longArrayValue[j]) : message.longArrayValue[j];
                            else
                                object.longArrayValue[j] = options.longs === String ? $util.Long.prototype.toString.call(message.longArrayValue[j]) : options.longs === Number ? new $util.LongBits(message.longArrayValue[j].low >>> 0, message.longArrayValue[j].high >>> 0).toNumber() : message.longArrayValue[j];
                    }
                    if (message.boolValue != null && message.hasOwnProperty("boolValue"))
                        object.boolValue = message.boolValue;
                    if (message.boolArrayValue && message.boolArrayValue.length) {
                        object.boolArrayValue = [];
                        for (var j = 0; j < message.boolArrayValue.length; ++j)
                            object.boolArrayValue[j] = message.boolArrayValue[j];
                    }
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        object.stringValue = message.stringValue;
                    if (message.stringArrayValue && message.stringArrayValue.length) {
                        object.stringArrayValue = [];
                        for (var j = 0; j < message.stringArrayValue.length; ++j)
                            object.stringArrayValue[j] = message.stringArrayValue[j];
                    }
                    if (message.enumValue != null && message.hasOwnProperty("enumValue"))
                        object.enumValue = options.enums === String ? $root.top.chancy.game.TestEnum[message.enumValue] : message.enumValue;
                    return object;
                };

                /**
                 * Converts this TestConf to JSON.
                 * @function toJSON
                 * @memberof top.chancy.game.TestConf
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                TestConf.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return TestConf;
            })();

            /**
             * TestEnum enum.
             * @name top.chancy.game.TestEnum
             * @enum {string}
             * @property {number} TYPE_A=0 TYPE_A value
             * @property {number} TYPE_B=1 TYPE_B value
             */
            game.TestEnum = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "TYPE_A"] = 0;
                values[valuesById[1] = "TYPE_B"] = 1;
                return values;
            })();

            game.ConfCenter = (function() {

                /**
                 * Properties of a ConfCenter.
                 * @memberof top.chancy.game
                 * @interface IConfCenter
                 * @property {top.chancy.game.IGlobal|null} [globalConf] ConfCenter globalConf
                 * @property {Array.<top.chancy.game.IFuckConf>|null} [fuckConfConfList] ConfCenter fuckConfConfList
                 * @property {Array.<top.chancy.game.ITestConf>|null} [testConfConfList] ConfCenter testConfConfList
                 */

                /**
                 * Constructs a new ConfCenter.
                 * @memberof top.chancy.game
                 * @classdesc Represents a ConfCenter.
                 * @implements IConfCenter
                 * @constructor
                 * @param {top.chancy.game.IConfCenter=} [properties] Properties to set
                 */
                function ConfCenter(properties) {
                    this.fuckConfConfList = [];
                    this.testConfConfList = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * ConfCenter globalConf.
                 * @member {top.chancy.game.IGlobal|null|undefined} globalConf
                 * @memberof top.chancy.game.ConfCenter
                 * @instance
                 */
                ConfCenter.prototype.globalConf = null;

                /**
                 * ConfCenter fuckConfConfList.
                 * @member {Array.<top.chancy.game.IFuckConf>} fuckConfConfList
                 * @memberof top.chancy.game.ConfCenter
                 * @instance
                 */
                ConfCenter.prototype.fuckConfConfList = $util.emptyArray;

                /**
                 * ConfCenter testConfConfList.
                 * @member {Array.<top.chancy.game.ITestConf>} testConfConfList
                 * @memberof top.chancy.game.ConfCenter
                 * @instance
                 */
                ConfCenter.prototype.testConfConfList = $util.emptyArray;

                /**
                 * Creates a new ConfCenter instance using the specified properties.
                 * @function create
                 * @memberof top.chancy.game.ConfCenter
                 * @static
                 * @param {top.chancy.game.IConfCenter=} [properties] Properties to set
                 * @returns {top.chancy.game.ConfCenter} ConfCenter instance
                 */
                ConfCenter.create = function create(properties) {
                    return new ConfCenter(properties);
                };

                /**
                 * Encodes the specified ConfCenter message. Does not implicitly {@link top.chancy.game.ConfCenter.verify|verify} messages.
                 * @function encode
                 * @memberof top.chancy.game.ConfCenter
                 * @static
                 * @param {top.chancy.game.IConfCenter} message ConfCenter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConfCenter.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.globalConf != null && message.hasOwnProperty("globalConf"))
                        $root.top.chancy.game.Global.encode(message.globalConf, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.fuckConfConfList != null && message.fuckConfConfList.length)
                        for (var i = 0; i < message.fuckConfConfList.length; ++i)
                            $root.top.chancy.game.FuckConf.encode(message.fuckConfConfList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.testConfConfList != null && message.testConfConfList.length)
                        for (var i = 0; i < message.testConfConfList.length; ++i)
                            $root.top.chancy.game.TestConf.encode(message.testConfConfList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };

                /**
                 * Encodes the specified ConfCenter message, length delimited. Does not implicitly {@link top.chancy.game.ConfCenter.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof top.chancy.game.ConfCenter
                 * @static
                 * @param {top.chancy.game.IConfCenter} message ConfCenter message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ConfCenter.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a ConfCenter message from the specified reader or buffer.
                 * @function decode
                 * @memberof top.chancy.game.ConfCenter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {top.chancy.game.ConfCenter} ConfCenter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConfCenter.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.top.chancy.game.ConfCenter();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.globalConf = $root.top.chancy.game.Global.decode(reader, reader.uint32());
                            break;
                        case 2:
                            if (!(message.fuckConfConfList && message.fuckConfConfList.length))
                                message.fuckConfConfList = [];
                            message.fuckConfConfList.push($root.top.chancy.game.FuckConf.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.testConfConfList && message.testConfConfList.length))
                                message.testConfConfList = [];
                            message.testConfConfList.push($root.top.chancy.game.TestConf.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };

                /**
                 * Decodes a ConfCenter message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof top.chancy.game.ConfCenter
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {top.chancy.game.ConfCenter} ConfCenter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ConfCenter.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a ConfCenter message.
                 * @function verify
                 * @memberof top.chancy.game.ConfCenter
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ConfCenter.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.globalConf != null && message.hasOwnProperty("globalConf")) {
                        var error = $root.top.chancy.game.Global.verify(message.globalConf);
                        if (error)
                            return "globalConf." + error;
                    }
                    if (message.fuckConfConfList != null && message.hasOwnProperty("fuckConfConfList")) {
                        if (!Array.isArray(message.fuckConfConfList))
                            return "fuckConfConfList: array expected";
                        for (var i = 0; i < message.fuckConfConfList.length; ++i) {
                            var error = $root.top.chancy.game.FuckConf.verify(message.fuckConfConfList[i]);
                            if (error)
                                return "fuckConfConfList." + error;
                        }
                    }
                    if (message.testConfConfList != null && message.hasOwnProperty("testConfConfList")) {
                        if (!Array.isArray(message.testConfConfList))
                            return "testConfConfList: array expected";
                        for (var i = 0; i < message.testConfConfList.length; ++i) {
                            var error = $root.top.chancy.game.TestConf.verify(message.testConfConfList[i]);
                            if (error)
                                return "testConfConfList." + error;
                        }
                    }
                    return null;
                };

                /**
                 * Creates a ConfCenter message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof top.chancy.game.ConfCenter
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {top.chancy.game.ConfCenter} ConfCenter
                 */
                ConfCenter.fromObject = function fromObject(object) {
                    if (object instanceof $root.top.chancy.game.ConfCenter)
                        return object;
                    var message = new $root.top.chancy.game.ConfCenter();
                    if (object.globalConf != null) {
                        if (typeof object.globalConf !== "object")
                            throw TypeError(".top.chancy.game.ConfCenter.globalConf: object expected");
                        message.globalConf = $root.top.chancy.game.Global.fromObject(object.globalConf);
                    }
                    if (object.fuckConfConfList) {
                        if (!Array.isArray(object.fuckConfConfList))
                            throw TypeError(".top.chancy.game.ConfCenter.fuckConfConfList: array expected");
                        message.fuckConfConfList = [];
                        for (var i = 0; i < object.fuckConfConfList.length; ++i) {
                            if (typeof object.fuckConfConfList[i] !== "object")
                                throw TypeError(".top.chancy.game.ConfCenter.fuckConfConfList: object expected");
                            message.fuckConfConfList[i] = $root.top.chancy.game.FuckConf.fromObject(object.fuckConfConfList[i]);
                        }
                    }
                    if (object.testConfConfList) {
                        if (!Array.isArray(object.testConfConfList))
                            throw TypeError(".top.chancy.game.ConfCenter.testConfConfList: array expected");
                        message.testConfConfList = [];
                        for (var i = 0; i < object.testConfConfList.length; ++i) {
                            if (typeof object.testConfConfList[i] !== "object")
                                throw TypeError(".top.chancy.game.ConfCenter.testConfConfList: object expected");
                            message.testConfConfList[i] = $root.top.chancy.game.TestConf.fromObject(object.testConfConfList[i]);
                        }
                    }
                    return message;
                };

                /**
                 * Creates a plain object from a ConfCenter message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof top.chancy.game.ConfCenter
                 * @static
                 * @param {top.chancy.game.ConfCenter} message ConfCenter
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ConfCenter.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.fuckConfConfList = [];
                        object.testConfConfList = [];
                    }
                    if (options.defaults)
                        object.globalConf = null;
                    if (message.globalConf != null && message.hasOwnProperty("globalConf"))
                        object.globalConf = $root.top.chancy.game.Global.toObject(message.globalConf, options);
                    if (message.fuckConfConfList && message.fuckConfConfList.length) {
                        object.fuckConfConfList = [];
                        for (var j = 0; j < message.fuckConfConfList.length; ++j)
                            object.fuckConfConfList[j] = $root.top.chancy.game.FuckConf.toObject(message.fuckConfConfList[j], options);
                    }
                    if (message.testConfConfList && message.testConfConfList.length) {
                        object.testConfConfList = [];
                        for (var j = 0; j < message.testConfConfList.length; ++j)
                            object.testConfConfList[j] = $root.top.chancy.game.TestConf.toObject(message.testConfConfList[j], options);
                    }
                    return object;
                };

                /**
                 * Converts this ConfCenter to JSON.
                 * @function toJSON
                 * @memberof top.chancy.game.ConfCenter
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ConfCenter.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                return ConfCenter;
            })();

            return game;
        })();

        return chancy;
    })();

    return top;
})();

module.exports = $root;
