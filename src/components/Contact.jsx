import React from 'react';
import {
    Container,
    Typography,
    Box,
    Grid,
    Card,
    CardContent,
    Link,
    IconButton
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import { socialMedia } from '../data/portfolioData';

const ContactCard = styled(Card)(({ theme }) => ({
    height: '100%',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[8]
    }
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    borderRadius: '50%',
    transition: 'all 0.3s ease',
    '&:hover': {
        transform: 'scale(1.1)',
    }
}));

const Contact = () => {
    const getSocialIcon = (id) => {
        const iconProps = { fontSize: 'large' };
        switch (id) {
            case 'Facebook':
                return <FacebookIcon {...iconProps} />;
            case 'Twitter':
                return <TwitterIcon {...iconProps} />;
            case 'Email':
                return <EmailIcon {...iconProps} />;
            case 'GitHub':
                return <GitHubIcon {...iconProps} />;
            case 'LinkedIn':
                return <LinkedInIcon {...iconProps} />;
            case 'Medium':
                return <ArticleIcon {...iconProps} />;
            default:
                return <EmailIcon {...iconProps} />;
        }
    };

    const getSocialColor = (id) => {
        switch (id) {
            case 'Facebook':
                return '#1877f2';
            case 'Twitter':
                return '#1da1f2';
            case 'Email':
                return '#ea4335';
            case 'GitHub':
                return '#333';
            case 'LinkedIn':
                return '#0077b5';
            case 'Medium':
                return '#00ab6c';
            default:
                return '#667eea';
        }
    };

    return (
        <Box id="contact" sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Get In Touch
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                    I'm always open to discussing new opportunities, interesting projects, 
                    or just having a chat about technology and development.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} md={8}>
                        <ContactCard elevation={3}>
                            <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                <Typography variant="h5" gutterBottom>
                                    Let's Connect!
                                </Typography>
                                <Typography variant="body1" color="text.secondary" paragraph>
                                    Feel free to reach out to me on any of these platforms:
                                </Typography>
                                
                                <Box sx={{ mt: 4 }}>
                                    {socialMedia.map((social, index) => (
                                        <SocialIconButton
                                            key={index}
                                            component={Link}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: getSocialColor(social.id),
                                                '&:hover': {
                                                    backgroundColor: `${getSocialColor(social.id)}15`
                                                }
                                            }}
                                            aria-label={social.name}
                                        >
                                            {getSocialIcon(social.id)}
                                        </SocialIconButton>
                                    ))}
                                </Box>
                                
                                <Box sx={{ mt: 4 }}>
                                    <Typography variant="body1" gutterBottom>
                                        📧 <strong>Email:</strong> suryaprakash.cdac@gmail.com
                                    </Typography>
                                    <Typography variant="body1">
                                        📱 <strong>Location:</strong> Available for remote work
                                    </Typography>
                                </Box>
                            </CardContent>
                        </ContactCard>
                    </Grid>
                </Grid>

                <Box sx={{ mt: 6, textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        © 2024 Surya Prakash Pandey. Built with React and Material-UI.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
