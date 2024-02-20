import React from "react";
import { useShifumi } from "@/hooks/useShifumi";
import { ShifumiActionEnum, ShifumiActionText } from "@/models/ShifumiAction.enum";
import { StyledCard } from "./styles.ts";

type Props = {
    setUserAction: ReturnType<typeof useShifumi>["setUserAction"];
    shifumiAction: ShifumiActionEnum;
};
const ShifumiItemAction: React.FC<Props> = ({ shifumiAction, setUserAction }) => {
    return <StyledCard onClick={() => setUserAction(shifumiAction)}>{ShifumiActionText[shifumiAction]}</StyledCard>;
};

export default ShifumiItemAction;
