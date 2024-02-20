import { ShifumiActionEnum } from "@/models/ShifumiAction.enum.ts";

export const userHasWinning = (userAction: ShifumiActionEnum, botAction: ShifumiActionEnum): boolean => {
    if (userAction === ShifumiActionEnum.STONE && botAction === ShifumiActionEnum.SCISSOR) return true;
    if (userAction === ShifumiActionEnum.PAPER && botAction === ShifumiActionEnum.STONE) return true;
    if (userAction === ShifumiActionEnum.SCISSOR && botAction === ShifumiActionEnum.PAPER) return true;

    return false;
};
