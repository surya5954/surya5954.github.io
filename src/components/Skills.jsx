import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    LinearProgress,
    Card,
    CardContent
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { skillData } from '../data/portfolioData';

const SkillCard = styled(Card)(({ theme }) => ({
    height: '100%',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-4px)'
    }
}));

const SkillProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.palette.grey[200],
    '& .MuiLinearProgress-bar': {
        borderRadius: 5,
        background: 'linear-gradient(45deg, #667eea 30%, #764ba2 90%)'
    }
}));

const Skills = () => {
    return (
        <Box id="skills" sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Technical Skills
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
                    Here are the technologies and tools I work with, along with my proficiency level in each.
                </Typography>
                
                <Grid container spacing={4}>
                    {skillData.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <SkillCard elevation={3}>
                                <CardContent sx={{ p: 3 }}>
                                    <Typography variant="h6" gutterBottom>
                                        {skill.name}
                                    </Typography>
                                    <Box sx={{ mt: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                            <Typography variant="body2" color="text.secondary">
                                                Proficiency
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {skill.Skill_Proficiency}/10
                                            </Typography>
                                        </Box>
                                        <SkillProgress
                                            variant="determinate"
                                            value={skill.Skill_Proficiency * 10}
                                        />
                                    </Box>
                                </CardContent>
                            </SkillCard>
                        </Grid>
                    ))}
                </Grid>
                
                {/* Additional Skills Overview */}
                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Typography variant="h5" gutterBottom>
                        Additional Expertise
                    </Typography>
                    <Grid container spacing={2} sx={{ mt: 2 }}>
                        {[
                            'OAuth 2.0/OIDC', 'Microservices', 'Docker', 'AWS Cloud', 
                            'SAML', 'LDAP', 'Keycloak', 'JWT', 'Nginx', 'Apache',
                            'PostgreSQL', 'SQLite', 'MongoDB', 'Electron', 'jQuery'
                        ].map((tech, index) => (
                            <Grid item xs={6} sm={4} md={3} key={index}>
                                <Box
                                    sx={{
                                        p: 2,
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                        boxShadow: 1,
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: 3,
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    <Typography variant="body2" fontWeight="medium">
                                        {tech}
                                    </Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Skills;
