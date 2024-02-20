import React from "react";
import { useShifumi } from "@/hooks/useShifumi";
import { StyledContainer, StyledContent } from "@/components/ShifumiActions/styles";
import { shifumiActionEnum } from "@/models/ShifumiAction.enum";
import ShifumiItemAction from "@/components/ShifumiActions/components/ShifumiItemActions";

type Props = {
    setUserAction: ReturnType<typeof useShifumi>["setUserAction"];
};
const ShifumiActions: React.FC<Props> = ({ setUserAction }) => {
    return (
        <StyledContainer>
            <h2>Actions</h2>
            <StyledContent>
                {shifumiActionEnum.map((shifumiAction) => (
                    <ShifumiItemAction key={shifumiAction} shifumiAction={shifumiAction} setUserAction={setUserAction} />
                ))}
            </StyledContent>
        </StyledContainer>
    );
};

export default ShifumiActions;
