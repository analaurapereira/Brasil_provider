import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.background};
    color: ${(props) => props.theme.text};
  }
`;

export const lightTheme = {
  background: 'whitesmoke',
  text: '#262626',
  boxShadow: '4px 4px 12px rgba(0,0,0,0.3)',
 backgroundColor: '#f2f2f2',

};

export const darkTheme = {
  background: '#262626',
  text: 'whitesmoke',
  boxShadow: '4px 4px 12px rgba(255,255,255,0.3)',
  backgroundColor: '#4a4a4a',
};
