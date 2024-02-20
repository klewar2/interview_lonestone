import React from "react";
import { drawGame, ShifumiGameType } from "@/models/ShifumiGame.type";
import { StyledContainer, StyledContent, StyledHistoryContainer } from "./styles";
import { ShifumiActionText } from "@/models/ShifumiAction.enum";

type Props = {
    gameHistories: ShifumiGameType[];
};
const GameHistories: React.FC<Props> = ({ gameHistories }) => (
    <StyledContainer>
        <h2>Games histories</h2>
        <StyledContent>
            {gameHistories.map((gameHistory, index) => (
                <StyledHistoryContainer key={index}>
                    <div>Game n°{index + 1}</div>
                    <div>{gameHistory.winner === drawGame ? "Draw" : `Winner : ${gameHistory.winner} !!!!!!`}</div>
                    <div>User action : {ShifumiActionText[gameHistory.userAction]}</div>
                    <div>Bot action : {ShifumiActionText[gameHistory.botAction]}</div>
                </StyledHistoryContainer>
            ))}
        </StyledContent>
    </StyledContainer>
);

export default GameHistories;
