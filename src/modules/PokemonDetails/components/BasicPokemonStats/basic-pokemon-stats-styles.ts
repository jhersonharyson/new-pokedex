import styled from 'styled-components';

export const Container = styled.div`
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ContainerStats = styled(Container)`
    flex-direction: column;
    border-left: 4px solid #FFFFFFC5;
    padding-left: 12px;
`;

export const MainContainer = styled(Container)`
    flex-direction: column;
`;

export const ContainerPokemonType = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50px;
    /* background-color: #FFF; */

    display: flex;
    justify-content: center;
    align-items: center;
    /* box-shadow: 2px 2px 30px #000000FF; */
    border: 3px solid #000000aa;
    
    background-clip: text;
`

export const BasicStat = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    color: #000000CC;
    background-color: #FFFFFFE6;
    margin-right: 8px;
    margin-top: 8px;
    padding: 0px 10px;
    border-radius: 5px;
    max-width: fit-content;

    &.principal-text {
        font-size: 48px;
        background-color: unset;
        border-radius: unset;
        line-height: 36px;
        margin-top: 0px;
        margin-bottom: 12px;
        padding: 0;
        color: #FFFFFF;
    }

    &.thin {
        font-weight: 400;
    }
`;

export const BaseStatRow = styled.div`
    display: flex;
    flex-direction: row;
`



export const PokemonTypeImage = styled.img`
    width: 25px;
    height: 25px;
    /* filter: invert(); */
    color: transparent;
`

export const PokemonTypeText = styled.div`
    font-size: 14px;
    font-weight: 500;
    background-color: #FFFFFF5C;
    text-transform: uppercase;
    border-radius: 32px;
    padding: 2px 24px;
`

export const MainPokemonTypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;

`

export const Separator = styled.div`
    /* height:  100%; */
    width: 6px;
    border-radius: 6px;
    background-color: #FFFFFF;
    margin-right: 12px;
`