import React from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Chip,
    Grid,
    Link,
    List,
    ListItem,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';
import { useThemeMode } from '../contexts/ThemeContext';
import { projectDetails } from '../data/portfolioData';

const Experience = () => {
    const { isDarkMode } = useThemeMode();
    
    return (
        <Box id="experience" sx={{ 
            py: 8, 
            backgroundColor: isDarkMode ? '#1a1a1a' : '#f8f9fa' 
        }}>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Professional Experience
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
                    Here's a detailed look at my professional journey and the projects I've worked on over the years.
                </Typography>
                
                <Grid container spacing={4}>
                    {projectDetails.map((project, index) => (
                        <Grid item xs={12} key={index}>
                            <Card 
                                elevation={3}
                                sx={{ 
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': { transform: 'translateY(-4px)' }
                                }}
                            >
                                <CardContent sx={{ p: 4 }}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={8}>
                                            <Box sx={{ mb: 2 }}>
                                                <Typography variant="h4" gutterBottom>
                                                    {project.name}
                                                </Typography>
                                                <Typography variant="h6" color="primary" gutterBottom>
                                                    {project.role} at {project.comapny_name}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary" gutterBottom>
                                                    {project.duration}
                                                </Typography>
                                                {project.link && (
                                                    <Link 
                                                        href={project.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                                                    >
                                                        <LinkIcon sx={{ mr: 1, fontSize: '1rem' }} />
                                                        View Project
                                                    </Link>
                                                )}
                                            </Box>
                                            
                                            <Typography variant="body1" paragraph>
                                                {project.discription}
                                            </Typography>
                                            
                                            <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                                                Technologies Used:
                                            </Typography>
                                            <Box sx={{ mb: 3 }}>
                                                {project.technology.map((tech, techIndex) => (
                                                    <Chip
                                                        key={techIndex}
                                                        label={tech}
                                                        variant="outlined"
                                                        sx={{ mr: 1, mb: 1 }}
                                                    />
                                                ))}
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    
                                    <Accordion>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                            <Typography variant="h6">Key Responsibilities</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <List>
                                                {project.responsibilities.map((responsibility, respIndex) => (
                                                    <ListItem key={respIndex} sx={{ px: 0 }}>
                                                        <ListItemText primary={responsibility} />
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </AccordionDetails>
                                    </Accordion>
                                    
                                    {project.highlights && project.highlights.length > 0 && (
                                        <Accordion>
                                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                                <Typography variant="h6">Key Highlights</Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <List>
                                                    {project.highlights.map((highlight, highlightIndex) => (
                                                        <ListItem key={highlightIndex} sx={{ px: 0 }}>
                                                            <ListItemText primary={highlight} />
                                                        </ListItem>
                                                    ))}
                                                </List>
                                            </AccordionDetails>
                                        </Accordion>
                                    )}
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Experience;
