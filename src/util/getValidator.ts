import { utils } from "ethers";
import { decode } from "rlp";

export function getValidator(hash: string, extraData: string): string {
    const decoded = decode("0x" + extraData.slice(64)) as Buffer[];
    const seal = "0x" + decoded[1].toString("hex");

    return utils.recoverAddress(utils.keccak256("0x" + hash), seal).toLowerCase();
}
