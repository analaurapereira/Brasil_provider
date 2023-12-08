import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/theme';
import { RouteComponent } from './routes';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollButton } from './components/flecha';
import { useTheme } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'; 


interface ThemeToggleProps {
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme }) => {
  const theme = useTheme();
  const icon = theme === lightTheme ? faMoon : faSun;

  return (
    <button
      style={{
        color: 'black',
        position: 'fixed',
        width: '50px',
        cursor: 'pointer',
        borderRadius: '30px',
        borderColor: '#ccc',
        boxShadow: theme === lightTheme ? lightTheme.boxShadow : darkTheme.boxShadow,
        bottom: '-40%',
        height: '50px',
        right: '-21%',
        margin: '400px',
        backgroundColor: theme === lightTheme ? lightTheme.backgroundColor : darkTheme.backgroundColor,
      }}
      onClick={toggleTheme}
    >
      <FontAwesomeIcon
      icon={icon}
      color={theme === lightTheme ? lightTheme.text : darkTheme.text}
      size="lg"
    />
    </button>
  );
};


function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <ThemeToggle toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Navbar />
        <RouteComponent />
        <ScrollButton />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;