import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, useThemeMode } from './contexts/ThemeContext';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Blog from './components/Blog';
import Contact from './components/Contact';
import './App.css';

// Create a client for React Query
const queryClient = new QueryClient();

// Inner component that uses the theme
const AppContent = () => {
  const { theme } = useThemeMode();
  
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Header />
        <Experience />
        <Education />
        <Skills />
        <Blog />
        <Contact />
      </div>
    </MuiThemeProvider>
  );
};

// Main App component with providers
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
