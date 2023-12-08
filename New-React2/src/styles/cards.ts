import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.li`
  display: block;
  position: relative;
  max-width: 350px; 
  max-height: 380px; 
  background-color: #f2f8f9;
  border-radius: 10px;
  padding: 2em 1.2em;
  margin: 100px; 
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
  background: #40ff00;
  font-family: Arial, Helvetica, sans-serif;
  transition: all 0.5s ease-out;
  margin-top: 25em;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #074DB0;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    transform-origin: 50% 50%;
    transition: transform 0.35s ease-out;
  }

  &:hover::before {
    transform: scale(28);
  }

  &:hover .small-desc {
    transition: all 0.5s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }

  &:hover .card-title {
    transition: all 0.5s ease-out;
    color: #ffffff;
  }
`;

export const CardTitle = styled.h2`
  color: #262626;
  font-size: 1.5em;
  line-height: normal;
  font-weight: 700;
  margin-bottom: 0.5em;
`;

export const SmallDescription = styled.p`
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5em;
  color: #452c2c;
`;