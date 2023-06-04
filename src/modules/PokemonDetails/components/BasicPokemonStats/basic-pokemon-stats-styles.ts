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
    margin-bottom: 16px;
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
        margin-bottom: 12px;
        padding: 0;
        color: #FFFFFF;
    }
`;



export const PokemonTypeImage = styled.img`
    width: 25px;
    height: 25px;
    /* filter: invert(); */
    color: transparent;
`
export const Separator = styled.div`
    /* height:  100%; */
    width: 6px;
    border-radius: 6px;
    background-color: #FFFFFF;
    margin-right: 12px;
`