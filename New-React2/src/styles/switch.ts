import styled from 'styled-components';

const ToggleContainer = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 65px;
  width: 100%;
  font-size: 3rem; 
  z-index: 1;   
    cursor: pointer; 
    margin-left: 750px;

  &:before {
    box-shadow: 0;
    border-radius: 84.5px;
    background: #fff;
    position: absolute;
    margin-left: -36px;
    margin-top: -36px;
    opacity: 0.2;
    height: 72px;
    width: 72px;
    left: 50%;
    top: 50%;
  }
`;

const Button = styled.span`
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 68.8px;
  position: absolute;
  background: #eaeaea;
  margin-left: -13px;
  margin-top: -70px;
  display: block;
  height: 55px;
  width: 55px;
  left: 50%;
  top: 50%;
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  z-index: 1;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;

`;

export { ToggleContainer, Button, Input };
