import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background-color: #2680FF;
  position: relative;
  left: 0;
  margin-bottom: -8px;
  margin-left: -10px;
  bottom: 0;
  min-height: 100px;
  width: 101%;
  color: whitesmoke;
  margin-top: 40%;

`;

export const SocialContainer = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start; 
  list-style: none;
  margin-bottom: 0; 
  padding-left:20px;
`;

export const SocialListItem = styled.li`
  display: inline-block;
  gap: 2px;
  border-radius: 50px;
  margin: 0 0.5em; 
  font-size: 1.7em;
  cursor: pointer;
  &:hover {
    color: #40FF00;
  }
`;

export const CopyRightSpan = styled.a`
  font-weight: bold;
  font-size: 23px;
  color: #40FF00;
  margin-top: 1em; 
  margin-left: 24em;
  margin-bottom: 20px;
`;
