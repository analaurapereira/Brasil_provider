import React from 'react';
import { ToggleContainer, Button, Input } from '../styles/switch';

interface SwitchProps {
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Switch: React.FC<SwitchProps> = ({ darkMode, onToggleDarkMode }) => {
  return (
    <ToggleContainer>
      <Input type="checkbox" checked={darkMode} onChange={onToggleDarkMode} />
      <Button className="button" onClick={onToggleDarkMode}>
      </Button>
    </ToggleContainer>
  );
}

