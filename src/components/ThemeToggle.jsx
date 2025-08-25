import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useThemeMode } from '../contexts/ThemeContext';

const ToggleButton = styled(IconButton)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.1) rotate(15deg)',
        backgroundColor: theme.palette.action.hover,
    },
    '& .MuiSvgIcon-root': {
        fontSize: '1.5rem',
    },
}));

const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useThemeMode();

    return (
        <Tooltip title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
            <ToggleButton
                onClick={toggleTheme}
                color="inherit"
                aria-label="toggle theme"
            >
                {isDarkMode ? (
                    <LightModeIcon sx={{ color: '#ffc107' }} />
                ) : (
                    <DarkModeIcon sx={{ color: '#333' }} />
                )}
            </ToggleButton>
        </Tooltip>
    );
};

export default ThemeToggle;
