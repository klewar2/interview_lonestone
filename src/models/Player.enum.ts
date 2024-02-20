export enum PlayerEnum {
    USER = "user",
    BOT = "bot",
}

export const playerEnum = Object.values(PlayerEnum);
export type PlayerType = (typeof playerEnum)[number];
