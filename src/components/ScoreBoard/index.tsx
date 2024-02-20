import React from "react";
import { useShifumi } from "@/hooks/useShifumi";
import { StyledContainer, StyledContent } from "@/components/ScoreBoard/styles";
import { playerEnum } from "@/models/Player.enum";
import ScoreBoardPlayer from "@/components/ScoreBoard/components/ScoreBoardPlayer";

type Props = {
    scoreBoard: ReturnType<typeof useShifumi>["scoreBoard"];
};

const ScoreBoard: React.FC<Props> = ({ scoreBoard }) => (
    <StyledContainer>
        <h2>Score</h2>
        <StyledContent>
            {playerEnum.map((player) => (
                <ScoreBoardPlayer key={player} player={player} score={scoreBoard[player]} />
            ))}
        </StyledContent>
    </StyledContainer>
);

export default ScoreBoard;
