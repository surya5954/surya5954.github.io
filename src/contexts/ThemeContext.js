import React, { createContext, useState, useEffect } from 'react';

// Create the context
const ThemeContext = createContext();

// Create the provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const localTheme = localStorage.getItem('app-theme');
    return localTheme || 'light';
  });

  // Effect to update body attribute and save theme to localStorage
  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('app-theme', theme);
  }, [theme]);

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export context and provider
export { ThemeContext, ThemeProvider };
