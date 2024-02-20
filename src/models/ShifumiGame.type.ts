import { PlayerEnum } from "./Player.enum.ts";
import { ShifumiActionType } from "./ShifumiAction.enum.ts";

export const drawGame = "draw" as const;
export type DrawGameType = "draw";

export type ShifumiGameType = {
    winner: PlayerEnum | DrawGameType;
    botAction: ShifumiActionType;
    userAction: ShifumiActionType;
};
