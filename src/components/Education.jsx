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
import { educationData } from '../data/portfolioData';

const StyledTimelineContent = styled(TimelineContent)(({ theme }) => ({
    py: '12px',
    px: 2,
}));

const Education = () => {
    return (
        <Box id="education" sx={{ py: 8, backgroundColor: '#ffffff' }}>
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
                                <TimelineConnector />
                                <TimelineDot color="primary" variant="outlined">
                                    <SchoolIcon />
                                </TimelineDot>
                                <TimelineConnector />
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
