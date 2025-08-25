import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';

const ThemeContext = createContext();

export const useThemeMode = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useThemeMode must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    // Check for saved theme preference or default to 'light'
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        return savedTheme === 'dark';
    });

    // Save theme preference to localStorage and update HTML attribute
    useEffect(() => {
        localStorage.setItem('portfolio-theme', isDarkMode ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    // Create dynamic theme based on mode
    const theme = createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: {
                main: '#667eea',
                light: '#8fa7f3',
                dark: '#4c63d2',
            },
            secondary: {
                main: '#764ba2',
                light: '#9575cd',
                dark: '#512da8',
            },
            background: {
                default: isDarkMode ? '#121212' : '#ffffff',
                paper: isDarkMode ? '#1e1e1e' : '#ffffff',
            },
            text: {
                primary: isDarkMode ? '#ffffff' : '#333333',
                secondary: isDarkMode ? '#b0b0b0' : '#666666',
            },
            ...(isDarkMode ? {
                // Dark mode specific colors
                divider: '#333333',
                action: {
                    hover: 'rgba(255, 255, 255, 0.08)',
                },
            } : {
                // Light mode specific colors
                divider: '#e0e0e0',
                action: {
                    hover: 'rgba(0, 0, 0, 0.04)',
                },
            }),
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontWeight: 700,
            },
            h2: {
                fontWeight: 600,
            },
            h3: {
                fontWeight: 600,
                marginBottom: '1rem',
            },
            h4: {
                fontWeight: 600,
            },
            h5: {
                fontWeight: 600,
            },
            h6: {
                fontWeight: 600,
            },
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 8,
                        textTransform: 'none',
                        fontWeight: 600,
                    },
                },
            },
            MuiCard: {
                styleOverrides: {
                    root: {
                        borderRadius: 12,
                        ...(isDarkMode && {
                            backgroundColor: '#1e1e1e',
                            borderColor: '#333333',
                        }),
                    },
                },
            },
            MuiAppBar: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? '#1a1a1a' : '#1a1a1a',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        ...(isDarkMode && {
                            backgroundColor: '#1e1e1e',
                        }),
                    },
                },
            },
            MuiLinearProgress: {
                styleOverrides: {
                    root: {
                        backgroundColor: isDarkMode ? '#333333' : '#e0e0e0',
                    },
                },
            },
        },
    });

    const value = {
        isDarkMode,
        toggleTheme,
        theme,
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};
