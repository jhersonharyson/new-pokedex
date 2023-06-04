import styled from 'styled-components';

export const Container = styled.div``;

export const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    background-color: ${({ color }) => color || '#b1a449'};
    z-index: -2;
`;

export const Main = styled.div`
    padding: 32px;
    height: 100%;

     display: flex;
    //background-color: red;
    

    .basic-info {
        flex-grow: 1;
    }

    .basic-stats {
        flex-grow: 1.5;
    }

    .roullet-selector {
        min-width: 100px;
    }
`

