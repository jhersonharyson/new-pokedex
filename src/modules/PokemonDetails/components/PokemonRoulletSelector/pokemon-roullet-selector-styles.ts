import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const PokemonId = styled.div`
    font-size: 20px;
    cursor: pointer;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;

    &.selected {
        font-weight: bold;
    }
`
export const Arrow = styled.div`
    font-size: 100px;
    line-height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;

    &.disabled {
        cursor: not-allowed;
    }
`
export const ArrowUp = styled(Arrow)`
    transform: rotate(90deg);
    margin-left: 10px;
    margin-bottom: 10px;
`
export const ArrowDown = styled(Arrow)`
    transform: rotate(-90deg);
    margin-right: 10px;
    margin-top: 10px;
`