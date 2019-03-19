import * as $protobuf from "protobufjs";
/** Namespace top. */
export namespace top {

    /** Namespace chancy. */
    namespace chancy {

        /** Namespace game. */
        namespace game {

            /** Properties of a Global. */
            interface IGlobal {

                /** Global IntValue */
                IntValue?: (number|null);
            }

            /** Represents a Global. */
            class Global implements IGlobal {

                /**
                 * Constructs a new Global.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: top.chancy.game.IGlobal);

                /** Global IntValue. */
                public IntValue: number;

                /**
                 * Creates a new Global instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Global instance
                 */
                public static create(properties?: top.chancy.game.IGlobal): top.chancy.game.Global;

                /**
                 * Encodes the specified Global message. Does not implicitly {@link top.chancy.game.Global.verify|verify} messages.
                 * @param message Global message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: top.chancy.game.IGlobal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Global message, length delimited. Does not implicitly {@link top.chancy.game.Global.verify|verify} messages.
                 * @param message Global message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: top.chancy.game.IGlobal, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Global message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Global
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): top.chancy.game.Global;

                /**
                 * Decodes a Global message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Global
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): top.chancy.game.Global;

                /**
                 * Verifies a Global message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Global message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Global
                 */
                public static fromObject(object: { [k: string]: any }): top.chancy.game.Global;

                /**
                 * Creates a plain object from a Global message. Also converts values to other types if specified.
                 * @param message Global
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: top.chancy.game.Global, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Global to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a FuckConf. */
            interface IFuckConf {

                /** FuckConf DoubleValue */
                DoubleValue?: (number|null);

                /** FuckConf IntValue */
                IntValue?: (number|null);

                /** FuckConf longValue */
                longValue?: (number|Long|null);

                /** FuckConf boolValue */
                boolValue?: (boolean|null);

                /** FuckConf stringValue */
                stringValue?: (string|null);

                /** FuckConf enumValue */
                enumValue?: (top.chancy.game.TestEnum|null);

                /** FuckConf mapValue */
                mapValue?: ({ [k: string]: string }|null);
            }

            /** Represents a FuckConf. */
            class FuckConf implements IFuckConf {

                /**
                 * Constructs a new FuckConf.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: top.chancy.game.IFuckConf);

                /** FuckConf DoubleValue. */
                public DoubleValue: number;

                /** FuckConf IntValue. */
                public IntValue: number;

                /** FuckConf longValue. */
                public longValue: (number|Long);

                /** FuckConf boolValue. */
                public boolValue: boolean;

                /** FuckConf stringValue. */
                public stringValue: string;

                /** FuckConf enumValue. */
                public enumValue: top.chancy.game.TestEnum;

                /** FuckConf mapValue. */
                public mapValue: { [k: string]: string };

                /**
                 * Creates a new FuckConf instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FuckConf instance
                 */
                public static create(properties?: top.chancy.game.IFuckConf): top.chancy.game.FuckConf;

                /**
                 * Encodes the specified FuckConf message. Does not implicitly {@link top.chancy.game.FuckConf.verify|verify} messages.
                 * @param message FuckConf message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: top.chancy.game.IFuckConf, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FuckConf message, length delimited. Does not implicitly {@link top.chancy.game.FuckConf.verify|verify} messages.
                 * @param message FuckConf message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: top.chancy.game.IFuckConf, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FuckConf message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FuckConf
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): top.chancy.game.FuckConf;

                /**
                 * Decodes a FuckConf message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FuckConf
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): top.chancy.game.FuckConf;

                /**
                 * Verifies a FuckConf message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FuckConf message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FuckConf
                 */
                public static fromObject(object: { [k: string]: any }): top.chancy.game.FuckConf;

                /**
                 * Creates a plain object from a FuckConf message. Also converts values to other types if specified.
                 * @param message FuckConf
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: top.chancy.game.FuckConf, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FuckConf to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TestConf. */
            interface ITestConf {

                /** TestConf DoubleValue */
                DoubleValue?: (number|null);

                /** TestConf DoubleArrayValue */
                DoubleArrayValue?: (number[]|null);

                /** TestConf IntValue */
                IntValue?: (number|null);

                /** TestConf IntArrayValue */
                IntArrayValue?: (number[]|null);

                /** TestConf longValue */
                longValue?: (number|Long|null);

                /** TestConf longArrayValue */
                longArrayValue?: ((number|Long)[]|null);

                /** TestConf boolValue */
                boolValue?: (boolean|null);

                /** TestConf boolArrayValue */
                boolArrayValue?: (boolean[]|null);

                /** TestConf stringValue */
                stringValue?: (string|null);

                /** TestConf stringArrayValue */
                stringArrayValue?: (string[]|null);

                /** TestConf enumValue */
                enumValue?: (top.chancy.game.TestEnum|null);
            }

            /** Represents a TestConf. */
            class TestConf implements ITestConf {

                /**
                 * Constructs a new TestConf.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: top.chancy.game.ITestConf);

                /** TestConf DoubleValue. */
                public DoubleValue: number;

                /** TestConf DoubleArrayValue. */
                public DoubleArrayValue: number[];

                /** TestConf IntValue. */
                public IntValue: number;

                /** TestConf IntArrayValue. */
                public IntArrayValue: number[];

                /** TestConf longValue. */
                public longValue: (number|Long);

                /** TestConf longArrayValue. */
                public longArrayValue: (number|Long)[];

                /** TestConf boolValue. */
                public boolValue: boolean;

                /** TestConf boolArrayValue. */
                public boolArrayValue: boolean[];

                /** TestConf stringValue. */
                public stringValue: string;

                /** TestConf stringArrayValue. */
                public stringArrayValue: string[];

                /** TestConf enumValue. */
                public enumValue: top.chancy.game.TestEnum;

                /**
                 * Creates a new TestConf instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestConf instance
                 */
                public static create(properties?: top.chancy.game.ITestConf): top.chancy.game.TestConf;

                /**
                 * Encodes the specified TestConf message. Does not implicitly {@link top.chancy.game.TestConf.verify|verify} messages.
                 * @param message TestConf message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: top.chancy.game.ITestConf, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestConf message, length delimited. Does not implicitly {@link top.chancy.game.TestConf.verify|verify} messages.
                 * @param message TestConf message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: top.chancy.game.ITestConf, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestConf message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestConf
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): top.chancy.game.TestConf;

                /**
                 * Decodes a TestConf message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestConf
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): top.chancy.game.TestConf;

                /**
                 * Verifies a TestConf message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestConf message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestConf
                 */
                public static fromObject(object: { [k: string]: any }): top.chancy.game.TestConf;

                /**
                 * Creates a plain object from a TestConf message. Also converts values to other types if specified.
                 * @param message TestConf
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: top.chancy.game.TestConf, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestConf to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** TestEnum enum. */
            enum TestEnum {
                TYPE_A = 0,
                TYPE_B = 1
            }

            /** Properties of a ConfCenter. */
            interface IConfCenter {

                /** ConfCenter globalConf */
                globalConf?: (top.chancy.game.IGlobal|null);

                /** ConfCenter fuckConfConfList */
                fuckConfConfList?: (top.chancy.game.IFuckConf[]|null);

                /** ConfCenter testConfConfList */
                testConfConfList?: (top.chancy.game.ITestConf[]|null);
            }

            /** Represents a ConfCenter. */
            class ConfCenter implements IConfCenter {

                /**
                 * Constructs a new ConfCenter.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: top.chancy.game.IConfCenter);

                /** ConfCenter globalConf. */
                public globalConf?: (top.chancy.game.IGlobal|null);

                /** ConfCenter fuckConfConfList. */
                public fuckConfConfList: top.chancy.game.IFuckConf[];

                /** ConfCenter testConfConfList. */
                public testConfConfList: top.chancy.game.ITestConf[];

                /**
                 * Creates a new ConfCenter instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConfCenter instance
                 */
                public static create(properties?: top.chancy.game.IConfCenter): top.chancy.game.ConfCenter;

                /**
                 * Encodes the specified ConfCenter message. Does not implicitly {@link top.chancy.game.ConfCenter.verify|verify} messages.
                 * @param message ConfCenter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: top.chancy.game.IConfCenter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ConfCenter message, length delimited. Does not implicitly {@link top.chancy.game.ConfCenter.verify|verify} messages.
                 * @param message ConfCenter message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: top.chancy.game.IConfCenter, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConfCenter message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConfCenter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): top.chancy.game.ConfCenter;

                /**
                 * Decodes a ConfCenter message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ConfCenter
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): top.chancy.game.ConfCenter;

                /**
                 * Verifies a ConfCenter message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ConfCenter message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ConfCenter
                 */
                public static fromObject(object: { [k: string]: any }): top.chancy.game.ConfCenter;

                /**
                 * Creates a plain object from a ConfCenter message. Also converts values to other types if specified.
                 * @param message ConfCenter
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: top.chancy.game.ConfCenter, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ConfCenter to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
