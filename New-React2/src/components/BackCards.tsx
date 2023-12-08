import React from 'react';
import { MyCardContainer, Title, InnerCard, FrontSide, BackSide} from '../styles/backCards';

export const MyCards: React.FC = () => {
  return (
    <MyCardContainer>
       <InnerCard>
            <FrontSide>
                <Title className="card-title">PESSOAS</Title>
            </FrontSide>
            <BackSide>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
           </BackSide>
        </InnerCard>

        <InnerCard>
            <FrontSide>
                <Title className="card-title">PROCESSOS</Title>
            </FrontSide>
            <BackSide>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            </BackSide>
        </InnerCard>

        <InnerCard> 
            <FrontSide>
                <Title className="card-title">TECNOLOGIA</Title>
            </FrontSide>
            <BackSide>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            </BackSide>
        </InnerCard>
    </MyCardContainer>
  );
};
