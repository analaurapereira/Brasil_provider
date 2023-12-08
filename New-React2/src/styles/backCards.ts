import styled from 'styled-components';

export const MyCardContainer = styled.div`
  background-color: transparent;
  font-family: 'Montserrat', sans-serif;
  width: 70%;
  display:flex;
  justify-content: center;
  height: 254px;
  gap: 3em;
  margin-left: 220px;
  margin-top: 150px;
  margin-bottom: -200px;
`;

export const Title = styled.p`
  font-size: 1.5em;
  font-weight: 900;
  text-align: center;
  margin: 0;
`;

export const InnerCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  gap: 3em;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  cursor: pointer;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const FrontBackSide = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid green;
  border-radius: 1rem;
  box-shadow: 0 0 0.3em rgba(270, 270, 270, 0.3);
  font-weight: 700;     
`;

export const FrontSide = styled(FrontBackSide)`
    color: rgba(234, 56, 87);
    background: #0093E9  ;
`;

export const BackSide = styled(FrontBackSide)`
    background:  #80D0C7 ;
    color: red;
    transform: rotateY(180deg);
`;
