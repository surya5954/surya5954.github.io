import React from 'react';
import { 
    AppBar, 
    Toolbar, 
    Typography, 
    Container, 
    Box, 
    Button,
    Avatar
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { data, greetings } from '../data/portfolioData';

const HeroSection = styled(Box)(({ theme }) => ({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    padding: theme.spacing(8, 0),
    textAlign: 'center',
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const Header = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: '#1a1a1a' }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        {data.userData.nickName}
                    </Typography>
                    <Button color="inherit" onClick={() => scrollToSection('about')}>
                        About
                    </Button>
                    <Button color="inherit" onClick={() => scrollToSection('experience')}>
                        Experience
                    </Button>
                    <Button color="inherit" onClick={() => scrollToSection('education')}>
                        Education
                    </Button>
                    <Button color="inherit" onClick={() => scrollToSection('skills')}>
                        Skills
                    </Button>
                    <Button color="inherit" onClick={() => scrollToSection('blog')}>
                        Blog
                    </Button>
                    <Button color="inherit" onClick={() => scrollToSection('contact')}>
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
            
            <HeroSection>
                <Container>
                    <Avatar
                        sx={{ 
                            width: 120, 
                            height: 120, 
                            margin: '0 auto 2rem',
                            backgroundColor: '#ffffff20',
                            fontSize: '3rem'
                        }}
                    >
                        {data.userData.name.split(' ').map(n => n[0]).join('')}
                    </Avatar>
                    <Typography variant="h2" gutterBottom>
                        {greetings}! I'm {data.userData.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom sx={{ opacity: 0.9 }}>
                        {data.userData.role}
                    </Typography>
                    <Typography variant="body1" sx={{ maxWidth: 600, margin: '0 auto', opacity: 0.8 }}>
                        {data.userData.about}
                    </Typography>
                    <Box sx={{ mt: 4 }}>
                        <Button 
                            variant="contained" 
                            size="large" 
                            onClick={() => scrollToSection('experience')}
                            sx={{ 
                                mr: 2, 
                                backgroundColor: 'white', 
                                color: '#667eea',
                                '&:hover': { backgroundColor: '#f5f5f5' }
                            }}
                        >
                            View My Work
                        </Button>
                        <Button 
                            variant="outlined" 
                            size="large"
                            onClick={() => scrollToSection('contact')}
                            sx={{ 
                                borderColor: 'white', 
                                color: 'white',
                                '&:hover': { borderColor: '#f5f5f5', backgroundColor: 'rgba(255,255,255,0.1)' }
                            }}
                        >
                            Contact Me
                        </Button>
                    </Box>
                </Container>
            </HeroSection>
        </>
    );
};

export default Header;
