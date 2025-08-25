import React from 'react';
import {
    Container,
    Typography,
    Box,
    Paper
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot
} from '@mui/lab';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import { useThemeMode } from '../contexts/ThemeContext';
import { educationData } from '../data/portfolioData';

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
    py: '12px',
    px: 2,
}));

const StyledTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#404040' : theme.palette.grey[300],
}));

const StyledTimelineDot = styled(TimelineDot)(({ theme }) => ({
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : theme.palette.background.paper,
}));

const Education = () => {
    const { isDarkMode } = useThemeMode();
    
    return (
        <Box id="education" sx={{ 
            py: 8, 
            backgroundColor: isDarkMode ? '#121212' : '#ffffff' 
        }}>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Education
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
                    My academic journey that laid the foundation for my technical career.
                </Typography>
                
                <Timeline position="alternate">
                    {educationData.map((education, index) => (
                        <TimelineItem key={index}>
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0' }}
                                align={index % 2 === 0 ? 'right' : 'left'}
                                variant="body2"
                                color="text.secondary"
                            >
                                <Typography variant="h6" component="span">
                                    {education.course}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <StyledTimelineConnector />
                                <StyledTimelineDot color="primary" variant="outlined">
                                    <SchoolIcon />
                                </StyledTimelineDot>
                                <StyledTimelineConnector />
                            </TimelineSeparator>
                            <StyledTimelineContent>
                                <Paper elevation={3} sx={{ p: 3 }}>
                                    <Typography variant="h6" component="h3" gutterBottom>
                                        {education.stream}
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary" gutterBottom>
                                        {education.college}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        {education.university}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 2 }}>
                                        {education.highlights}
                                    </Typography>
                                </Paper>
                            </StyledTimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </Box>
    );
};

export default Education;
