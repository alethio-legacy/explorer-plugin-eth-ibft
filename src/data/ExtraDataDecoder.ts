import * as rlp from "rlp";
import { buf2hex } from "../util/buf2hex";
import { getValidator } from "../util/getValidator";
import { IIbftDetails } from "./IIbftDetails";

export class ExtraDataDecoder {
    decode(data: string, hash: string) {
        const defaultExtraData = "0x" + data.replace(/^0x/, "").slice(64);
        const decodedArray: Buffer | Buffer[] | rlp.Decoded = rlp.decode(defaultExtraData) as Buffer[];

        const validatorsArray: string[] = [];
        const validatorsRawArray = decodedArray[0] as any as Uint8Array[];
        validatorsRawArray.forEach((item) => validatorsArray.push(buf2hex(item)));

        const commitSealsRawArray = decodedArray[2] as any as Uint8Array[];
        const commitSealsArray: string[] = [];
        commitSealsRawArray.forEach((item) => commitSealsArray.push(buf2hex(item)));

        const decodedExtraData: IIbftDetails = {
            extraData: defaultExtraData,
            validators: validatorsArray,
            validated: getValidator(hash, data),
            seal: buf2hex(decodedArray[1]),
            commitSeals: commitSealsArray
        };

        return decodedExtraData;
    }
}
