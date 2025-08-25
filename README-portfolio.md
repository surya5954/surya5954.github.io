# Developer Portfolio Website

A modern, responsive portfolio website built with React and Material-UI, showcasing the professional experience, education, skills, and blog posts of Surya Prakash Pandey, Senior Software Engineer at Bayer.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Single Page Application**: Smooth scrolling navigation between sections
- **Dynamic Blog Integration**: Fetches and displays latest Medium blog posts
- **Modern UI Components**: Built with Material-UI (MUI) for consistent design
- **Professional Sections**:
  - Hero section with dynamic greeting
  - Professional experience with detailed project information
  - Education timeline with academic background
  - Technical skills with proficiency levels
  - Latest blog posts from Medium
  - Contact information with social media links

## Technology Stack

- **Frontend**: React 18+
- **UI Library**: Material-UI (MUI) v5
- **State Management**: React Query (TanStack Query)
- **Styling**: Material-UI styled components, CSS3
- **Icons**: Material-UI Icons
- **Data Fetching**: Fetch API with React Query
- **Build Tool**: Create React App

## Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx       # Navigation and hero section
│   ├── Experience.jsx   # Professional experience
│   ├── Education.jsx    # Academic background
│   ├── Skills.jsx       # Technical skills
│   ├── Blog.jsx         # Medium blog integration
│   └── Contact.jsx      # Contact information
├── data/
│   └── portfolioData.js # Static data configuration
├── services/
│   └── mediumService.js # Medium API integration
├── App.js               # Main application component
├── App.css              # Global styles
└── index.js             # Application entry point
```

## Components Overview

### Header Component
- Fixed navigation bar with smooth scrolling
- Hero section with gradient background
- Dynamic greeting based on time of day
- Call-to-action buttons

### Experience Component
- Professional work history
- Detailed project descriptions
- Technology stack for each project
- Expandable sections for responsibilities and highlights
- Company links and project links

### Education Component
- Timeline view of academic qualifications
- Educational institutions and degrees
- Academic achievements and highlights

### Skills Component
- Visual skill proficiency indicators
- Progress bars with skill ratings
- Additional expertise showcase
- Hover effects and animations

### Blog Component
- Integration with Medium RSS feed
- Dynamic blog post fetching
- Post thumbnails and descriptions
- Category tags and publication dates
- Direct links to Medium articles

### Contact Component
- Social media integration
- Contact information display
- Branded social media icons
- Professional contact details

## API Integration

### Medium Blog Posts
The application fetches blog posts from Medium using the RSS2JSON service:
- **API Endpoint**: `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@suryaprakash-pandey`
- **Implementation**: Uses React Query for efficient data fetching and caching
- **Features**: Error handling, loading states, retry logic

## Installation and Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional dependencies** (if not already included)
   ```bash
   npm install @mui/material @mui/icons-material @emotion/react @emotion/styled @tanstack/react-query @mui/lab
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## Build and Deployment

1. **Create production build**
   ```bash
   npm run build
   ```

2. **Deploy to hosting service**
   The build folder can be deployed to services like:
   - Netlify
   - Vercel
   - GitHub Pages
   - AWS S3
   - Firebase Hosting

## Customization

### Data Configuration
Update the portfolio data in `src/data/portfolioData.js`:
- Personal information
- Professional experience
- Education details
- Skills and proficiency levels
- Social media links

### Styling
- Modify theme in `App.js`
- Update component styles using Material-UI's `sx` prop
- Customize global styles in `App.css`

### Medium Integration
Update the Medium RSS feed URL in `src/services/mediumService.js` to use your own Medium profile.

## Performance Optimizations

- React Query for efficient data fetching and caching
- Material-UI's optimized components
- Lazy loading for images
- Smooth scrolling animations
- Responsive design patterns

## Browser Compatibility

- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Contact

**Surya Prakash Pandey**
- Email: suryaprakash.cdac@gmail.com
- LinkedIn: [linkedin.com/in/surya5954](https://www.linkedin.com/in/surya5954/)
- GitHub: [github.com/surya5954](https://github.com/surya5954)
- Medium: [suryaprakash-pandey.medium.com](https://suryaprakash-pandey.medium.com/)

---

Built with ❤️ using React and Material-UI
