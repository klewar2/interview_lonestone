export enum ShifumiActionEnum {
    STONE = "stone",
    PAPER = "paper",
    SCISSOR = "scissor",
}

export const ShifumiActionText = {
    [ShifumiActionEnum.STONE]: "Stone",
    [ShifumiActionEnum.PAPER]: "Paper",
    [ShifumiActionEnum.SCISSOR]: "Scissor",
};

export const shifumiActionEnum = Object.values(ShifumiActionEnum);
export type ShifumiActionType = (typeof shifumiActionEnum)[number];
