import { StyledContainer, StyledContent } from "./styles";
import { useShifumi } from "@/hooks/useShifumi";
import ShifumiActions from "@/components/ShifumiActions";
import ScoreBoard from "@/components/ScoreBoard";
import GameHistories from "@/components/GameHistories";

export default function Shifumi() {
    const { gameHistories, scoreBoard, setUserAction } = useShifumi();

    return (
        <StyledContainer>
            <h1>Shifumi</h1>
            <StyledContent>
                <ScoreBoard scoreBoard={scoreBoard} />
                <ShifumiActions setUserAction={setUserAction} />
            </StyledContent>
            <GameHistories gameHistories={gameHistories} />
        </StyledContainer>
    );
}
