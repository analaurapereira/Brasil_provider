import styled from "styled-components";


export const RadioInputContainer = styled.div`
  position: relative;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  background-color: #5eaed3;
  color: #000000;
  width: var(--container_width);
  overflow: hidden;
  border: 1px solid rgba(53, 52, 52, 0.226);
  margin-top: 70px;
  margin-left: 0px;
`;

export const Input = styled.input`
  display: none;

  &:checked + label {
    background-color: #ff0000;
    color: #ffffff;
    height: 100%;
  }
`;

export const Label = styled.label`
  width: 100%;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  font-weight: 600;
  letter-spacing: -1px;
  font-size: 20px;
  position: relative;

  &::before {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:checked + input + &::before {
    background-color: #ff0000;
  }
`;

export const Selection = styled.span`
  display: none;
  position: absolute;
  height: 100%;
  z-index: 0;
  font-size: 20px;
  left: 0;
  top: 0;
  transition: background-color 1.0s  ease;
  display: inline-block;
`;

export const CheckedLabel = styled(Label)`

`;

export const CheckedSelection = styled(Selection)`
  display: inline-block;
`;

export const FirstCheckedSelection = styled(Selection)`
  transform: translateX(calc(var(--container_width) * 0/4));
`;

export const SecondCheckedSelection = styled(Selection)`
  transform: translateX(calc(var(--container_width) * 1/4));
`;

export const ThirdCheckedSelection = styled(Selection)`
  transform: translateX(calc(var(--container_width) * 2/4));
`;

export const FourthCheckedSelection = styled(Selection)`
  transform: translateX(calc(var(--container_width) * 3/4));
`;
