import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext'; // Adjust path as needed

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme} style={{ padding: '10px', cursor: 'pointer', position: 'fixed', top: '20px', right: '20px', zIndex: 1000 }}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
};

export default ThemeToggle;
