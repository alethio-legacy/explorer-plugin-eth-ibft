export interface IIbftVote {
    address: string;
    vote: boolean;
}
export interface IIbftDetails {
    extraData: string;
    validators: string[];
    validated: string;
    seal: string;
    commitSeals: string[];
}
