import { useState } from "react";
import { ShifumiActionEnum, ShifumiActionType } from "@/models/ShifumiAction.enum";
import { drawGame, DrawGameType, ShifumiGameType } from "@/models/ShifumiGame.type";
import { getRandomShifumiAction } from "@/utils/getRandomShifumiAction.ts";
import { playerEnum, PlayerEnum } from "@/models/Player.enum.ts";
import { userHasWinning } from "@/utils/userHasWinning.ts";
import { ShifumiScoreBoardType } from "@/models/ShifumiScoreBoard.type.ts";

type UseShifumiReturnType = {
    setUserAction: (action: ShifumiActionType) => void;
    gameHistories: ShifumiGameType[];
    scoreBoard: ShifumiScoreBoardType;
};

// @ts-ignore
const initialShifumiScoreBoard: ShifumiScoreBoardType = playerEnum.reduce<ShifumiScoreBoardType>((acc, player) => {
    return {
        ...acc,
        [player]: 0,
    };
    // @ts-ignore
}, {});

export const useShifumi = (): UseShifumiReturnType => {
    const [gameHistories, setGameHistories] = useState<ShifumiGameType[]>([]);
    const [scoreBoard, setScoreBoard] = useState<ShifumiScoreBoardType>(initialShifumiScoreBoard);

    const userChooseAction = (action: ShifumiActionType) => {
        const botAction = guessBotAction();
        resolveGame(action, botAction);
    };

    const guessBotAction = () => {
        return getRandomShifumiAction();
    };

    const resolveGame = (userAction: ShifumiActionEnum, botAction: ShifumiActionEnum) => {
        const winner = resolveWinnerGame(userAction, botAction);
        setGameHistories([
            ...gameHistories,
            {
                winner,
                botAction,
                userAction,
            },
        ]);

        if (winner === drawGame) {
            return;
        }

        setScoreBoard({
            ...scoreBoard,
            [winner]: scoreBoard[winner] + 1,
        });
    };

    const resolveWinnerGame = (userAction: ShifumiActionEnum, botAction: ShifumiActionEnum): PlayerEnum | DrawGameType => {
        if (userAction === botAction) {
            return drawGame;
        }

        const userWin = userHasWinning(userAction, botAction);
        if (userWin) {
            return PlayerEnum.USER;
        }

        return PlayerEnum.BOT;
    };

    return {
        setUserAction: userChooseAction,
        gameHistories,
        scoreBoard,
    };
};
