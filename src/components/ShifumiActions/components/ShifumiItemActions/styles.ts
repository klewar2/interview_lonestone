import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background-color: lightslategray;
    color: white;
    transition: all 0.2s ease-in-out;
    &:hover {
        background-color: lightsteelblue;
    }
`;
