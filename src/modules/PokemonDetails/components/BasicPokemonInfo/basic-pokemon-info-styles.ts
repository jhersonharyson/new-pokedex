import styled from 'styled-components';

export const DiaplayJapaneseName = styled.div`
    color: #0000005c;
    font-size: 10vw;
    font-weight: bolder;
    margin-top: 0;
    padding-top: 0;
    line-height: 1.2;
`;

export const BasicInfo = styled.div`
   &.region-info {
    width: 240px;
    transform: rotate(-90deg);
    margin-top: -10px;
   }

   &.pokemon-id {
    font-size: 32px;
   }

   &.pokemon-name {
    font-size: 48px;
    font-weight: 600;
    text-transform: capitalize;
   }
`;

export const JapaneseNameContainer = styled.div`
   display: flex;
   flex-direction: row;

   .basic-info-main-container{
        margin-left: 80px;
   }
`;

export const RotateContainer = styled.div`
   
    position: relative;
   

   .region-info {
        position: absolute;
        bottom: 0px; 
        left: -110px;
   }
   
`;

export const Strong = styled.span`
    font-weight: 500;
    margin-top: 80px;
`;

export const Container = styled.div`
    color: white;
    position: relative;
    font-weight: 400
`;

export const PokemonImage = styled.img`
    position: absolute;
    right: -5%;
    top: 15%;
    width: 40vw;
    z-index: -1;
`;

