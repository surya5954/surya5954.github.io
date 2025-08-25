import React from 'react';
import {
    Container,
    Typography,
    Box,
    Card,
    CardContent,
    Grid,
    Link,
    CircularProgress,
    Alert,
    CardMedia,
    Chip
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArticleIcon from '@mui/icons-material/Article';
import { useThemeMode } from '../contexts/ThemeContext';
import { useMediumPostData } from '../services/mediumService';

const BlogCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-4px)'
    }
}));

const Blog = () => {
    const { isDarkMode } = useThemeMode();
    const { data: mediumData, isLoading, error } = useMediumPostData();

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const stripHtmlTags = (html) => {
        const tmp = document.createElement('DIV');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    const truncateText = (text, maxLength = 150) => {
        if (text.length <= maxLength) return text;
        return text.substr(0, maxLength) + '...';
    };

    return (
        <Box id="blog" sx={{ 
            py: 8, 
            backgroundColor: isDarkMode ? '#121212' : '#ffffff' 
        }}>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>
                    Latest Blog Posts
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, color: 'text.secondary', maxWidth: 800, mx: 'auto' }}>
                    I write about technology, development practices, and share my learning experiences on Medium.
                </Typography>

                {isLoading && (
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
                        <CircularProgress />
                    </Box>
                )}

                {error && (
                    <Alert severity="error" sx={{ mb: 4 }}>
                        Failed to load blog posts. Please try again later.
                    </Alert>
                )}

                {mediumData?.items && (
                    <Grid container spacing={4}>
                        {mediumData.items.slice(0, 6).map((post, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <BlogCard elevation={3}>
                                    {post.thumbnail && (
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={post.thumbnail}
                                            alt={post.title}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                    )}
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Box sx={{ mb: 2 }}>
                                            <Typography variant="h6" gutterBottom>
                                                <Link
                                                    href={post.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    color="inherit"
                                                    underline="hover"
                                                    sx={{ fontWeight: 'bold' }}
                                                >
                                                    {post.title}
                                                </Link>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" gutterBottom>
                                                {formatDate(post.pubDate)}
                                            </Typography>
                                        </Box>
                                        
                                        <Typography variant="body2" paragraph>
                                            {truncateText(stripHtmlTags(post.description))}
                                        </Typography>

                                        {post.categories && post.categories.length > 0 && (
                                            <Box sx={{ mt: 2 }}>
                                                {post.categories.slice(0, 3).map((category, catIndex) => (
                                                    <Chip
                                                        key={catIndex}
                                                        label={category}
                                                        size="small"
                                                        variant="outlined"
                                                        sx={{ mr: 1, mb: 1 }}
                                                    />
                                                ))}
                                            </Box>
                                        )}

                                        <Box sx={{ mt: 2 }}>
                                            <Link
                                                href={post.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{ 
                                                    display: 'flex', 
                                                    alignItems: 'center',
                                                    color: 'primary.main'
                                                }}
                                            >
                                                <ArticleIcon sx={{ mr: 1, fontSize: '1rem' }} />
                                                Read More
                                            </Link>
                                        </Box>
                                    </CardContent>
                                </BlogCard>
                            </Grid>
                        ))}
                    </Grid>
                )}

                {mediumData?.items && mediumData.items.length === 0 && (
                    <Alert severity="info" sx={{ mt: 4 }}>
                        No blog posts found. Check back later for new content!
                    </Alert>
                )}

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Link
                        href="https://suryaprakash-pandey.medium.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="h6"
                        sx={{ 
                            display: 'inline-flex', 
                            alignItems: 'center',
                            color: 'primary.main',
                            textDecoration: 'none',
                            '&:hover': { textDecoration: 'underline' }
                        }}
                    >
                        <ArticleIcon sx={{ mr: 1 }} />
                        View All Posts on Medium
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Blog;
