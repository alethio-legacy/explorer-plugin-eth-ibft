import * as React from "react";
import { LayoutRow } from "@alethio/ui/lib/layout/content/LayoutRow";
import { LayoutRowItem } from "@alethio/ui/lib/layout/content/LayoutRowItem";
import { Label } from "@alethio/ui/lib/data/Label";
import { HashValueBox } from "@alethio/ui/lib/data/box/HashValueBox";
import { AddressHashBox } from "@alethio/explorer-ui/lib/box/account/AddressHashBox";
import { IIbftDetails } from "../data/IIbftDetails";
import { ITranslation } from "plugin-api";

export interface IExtraDataProps {
    ibftDetails: IIbftDetails;
    translation: ITranslation;
    locale: string;
}

export class ExtraData extends React.Component<IExtraDataProps> {
    render() {
        let { ibftDetails, translation: tr } = this.props;

        return (
            <>
                <LayoutRow>
                    <LayoutRowItem autoHeight>
                        <Label>{tr.get("blockView.content.ibft.extraData")}</Label>
                        <HashValueBox>{ibftDetails.extraData}</HashValueBox>
                    </LayoutRowItem>
                </LayoutRow>
                <LayoutRow>
                    <LayoutRowItem fullRow>
                        <Label>{tr.get("blockView.content.ibft.validated")}</Label>
                        <AddressHashBox>{ibftDetails.validated}</AddressHashBox>
                    </LayoutRowItem>
                </LayoutRow>
                <LayoutRow>
                    <LayoutRowItem fullRow>
                        <Label>{tr.get("blockView.content.ibft.validators")}</Label>
                        { ibftDetails.validators.map((item) =>
                            <AddressHashBox key={item}>{item}</AddressHashBox>
                        ) }
                    </LayoutRowItem>
                </LayoutRow>
                <LayoutRow>
                    <LayoutRowItem fullRow>
                        <Label>{tr.get("blockView.content.ibft.seal")}</Label>
                        <HashValueBox>{ibftDetails.seal}</HashValueBox>
                    </LayoutRowItem>
                </LayoutRow>
                { ibftDetails.commitSeals.length !== 0 &&
                    <LayoutRow>
                        <LayoutRowItem fullRow>
                            <Label>{tr.get("blockView.content.ibft.commitSeals")}</Label>
                            { ibftDetails.commitSeals.map((item) =>
                                <React.Fragment key={item}>
                                    <HashValueBox>{item}</HashValueBox>
                                </React.Fragment>
                            )}
                        </LayoutRowItem>
                    </LayoutRow>
                }
            </>
        );
    }
}
