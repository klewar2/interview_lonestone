import React from "react";
import { PlayerEnum } from "@/models/Player.enum";
import { StyledCard } from "./styles";

type Props = {
    player: PlayerEnum;
    score: number;
};

const ScoreBoardPlayer: React.FC<Props> = ({ player, score }) => (
    <StyledCard>
        <div>{player}</div>
        <div>{score}</div>
    </StyledCard>
);

export default ScoreBoardPlayer;
