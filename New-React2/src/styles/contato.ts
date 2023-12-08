import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 500px;
  font-family: 'Montserrat', sans-serif;
  margin: 0 auto;
  padding: 40px;
  border: 2px solid #707070;
  border-radius: 10px;
  margin-top:200px;
  background-color: ${(props) => props.theme.backgrundColor} ;
  box-shadow: ${(props) => props.theme.boxShadow}; 
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 13px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 300px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.text};
  font-family: 'Montserrat', sans-serif;
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 8px;
  margin-bottom: 13px;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 300px;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.text};
  font-family: 'Montserrat', sans-serif;
`;

export const SubmitButton = styled.button`
  background-color: #007BFF;
  color: white;
  padding: 12px 22px;
  border: none;
  border-radius: 5px;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
