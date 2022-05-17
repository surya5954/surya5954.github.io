import AECLogo from '../assets/images/AECAgra.webp';
import AECImage from '../assets/images/AECAgraFull.webp';
import CDACLogo from '../assets/images/cdacLogo.jpg';
import CDACImage from '../assets/images/cdac.jpeg';
import SSVImage from '../assets/images/ssvImage.jpeg';
import upBoardLogo from '../assets/images/upBoard.png';
import hclConnectionsLogo from '../assets/images/hclConnectionsLogo.png';
import jsLogo from '../assets/images/js.png'
import nodeJSLogo from '../assets/images/node-js-icon.png';
import reactLogo from '../assets/images/reactIcon.png';
import oauthLogo from '../assets/images/oauthLogo.jpg'
import NginxLogo from '../assets/images/NginxLogo.png';
import keycloakLogo from '../assets/images/keycloakLogo.png';
import jwtLogo from '../assets/images/jwtIcon.jpg';
import htmlLogo from '../assets/images/htmlLogo.png';
import CssLogo from '../assets/images/CssLogo.webp';
import KPITLogo from '../assets/images/KPITLogo.jpg';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BookIcon from '@material-ui/icons/Book';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import BayerLogo from '../assets/images/Bayer.jpeg';


export const educationData = [
    { course: "B.Tech", transition: "down", highlights: "I got passed with 70.9%, I was deeply into Embedded Systems, created Mobile operated ROBO for Rescue also into renewable energy created a prototype of Dance Floor generated Electricity from Piezoelectric Material.", logo: AECLogo, image: AECImage, stream: "Electronics and Communication Engineering", college: "Anand Engineering College, Agra", university: "Uttar Pradesh Technical University" },
    { course: "PG-Diploma", transition: "down", highlights: "I got passed with 78%, Those 6 months were awsome !! I was into Linux, Kernel, C, Embedded Systems, Raspberry PI, Begale Borad bla bla bla...", logo: CDACLogo, image: CDACImage, stream: "Diploma in Embedded System Design", college: "ACTS, PUNE", university: "CDAC, PUNE" },
    { course: "Intermediate", transition: "up", highlights: "I got passed with 75.6%, highly motivated to pursue Engineering Career.", logo: upBoardLogo, image: SSVImage, stream: "Maths", college: "S.S.V. Inter College, Faizabad", university: "U.P.Board" },
    { course: "HighSchool", transition: "up", highlights: "I got passed with 73%, I was just figuring out if I have got some potential.", logo: upBoardLogo, image: SSVImage, stream: "Genral", college: "S.S.V. Inter College, Faizabad", university: "U.P.Board" },
]

export const projectDetails = [
    {
        name: 'New Bussiness Model',
        comapny_name: 'Bayer CropScience',
        logo: BayerLogo,
        duration: 'July 2021 - Present',
        role: 'Senior Software Engineer',
        discription: 'A platform to run business models for Agriculture industry to provide and promote own products to end Users.',
        responsibilities: [
            'Developed Microservices using Serverless framework in NodeJS with various AWS services.',
            'Worked on Microfrontend architecture with React and React-query.',
            'Got good understanding of CI/CD pipeline with tools like Jenkins and Github Actions.'
        ],
        link: 'https://www.bayer.com/en/',
        transition: 'right',
        technology: [jsLogo, reactLogo, nodeJSLogo, oauthLogo, NginxLogo, keycloakLogo, jwtLogo, htmlLogo, CssLogo],
        highlights: []
    },
    {
        name: 'HCL Connections',
        comapny_name: 'HCL Software',
        logo: hclConnectionsLogo,
        duration: 'August 2019 - July 2021',
        role: 'Full Stack Developer (Security Squad)',
        discription: 'HCL connections formally known as IBM Connections, an enterprise-collaboration platform which helps teams work more efficiently.',
        responsibilities: [
            'Being part of security squad our major goal was to establish Authentication and Authorization flow for Connections.',
            'Here I have worked on authentication through OIDC, SAML, SPNEGO, LDAP and authorization through OAUTH (JWT based), LTPA token.',
            'IDPs integration such as Microsoft, PING, KeyCloak as well as social IDPs like Google, Facebook, GitHub etc.',
            'Got chance to get hands on experience on Web/Application servers like Apache, Nginx, IBM WebSphere.'
        ],
        link: 'https://en.wikipedia.org/wiki/HCL_Connections ',
        transition: 'left',
        technology: [jsLogo, reactLogo, nodeJSLogo, oauthLogo, NginxLogo, keycloakLogo, jwtLogo, htmlLogo, CssLogo],
        highlights: [
            "Got chance to deeply understand the OIDC authentication flows like Authorization Code flow, Authorization Code flow with PKCE and Implicit flow.",
            "Good understanding of Azure Endpoints integration with IBM WebSphere as well as React SPA (For Browser based Authentication).",
            "Good understanding of Keycloak, I was able to configure it like Service Provider as well as Identity provider along other social IDPs like Google, Facebook, GitHub etc.",
            "Create a NodeJS utility to automate process of cloning a list of GitHub private repos from server, merging some file into them on local m/c and raising a PR request for them to review.",
            "Good Understanding in installation and debugging of Nginx server for load balancing and reverse proxy configuration."
        ]
    }, {
        name: 'Project Contribution and Managment Tool ',
        comapny_name: 'KPIT Technologies Ltd.',
        logo: KPITLogo,
        duration: 'March 2016 - August 2019',
        role: 'Full Stack JavaScript Developer',
        discription: 'This tool was created on top of Electron framework, for organization to create a proposal of a project to be reviewed by respective internal Authorities and get an approval on it.',
        responsibilities: [
            'Developed this tool from scratch using technologies like JavaScript, NodeJS, HTML, CSS, jQuery, SQLite.',
            'Involved in Designing and Development of UI pages as well as Backend Development using NodeJS and SQLite.',
            'Involved in Database Design of the system using DB Designer tool.'
        ],
        link: 'https://www.kpit.com/',
        transition: 'right',
        technology: [jsLogo, reactLogo, nodeJSLogo, oauthLogo, NginxLogo, keycloakLogo, jwtLogo, htmlLogo, CssLogo],
        highlights: [
            "Used V8 JavaScript engine inside Electron framework to execute server-side JavaScript code with SQLite database communication which is used to store master data.",
            "Created custom table component having add /delete/ duplicate per rows and freeze/ collapse/ expand per column features using jQuery and event-based DOM functions.",
            "Implemented Two factor authentication (Time based OTP) for authentication purpose of offline tool. Also generated QR code to make scan available for mobile application like Google Authenticator, Microsoft Authenticator as well as similar extensions for browsers.",
            "Implemented inter process communication (IPC) from render process to main process in electron for native OS level communication like opening/editing dialog to access files on system."
        ]
    },
    {
        name: 'e-Shop',
        comapny_name: 'KPIT Technologies Ltd.',
        logo: KPITLogo,
        duration: 'Nov 2018 - August 2019',
        role: 'Technical Leader',
        discription: 'This tool is for providing centralization management of hardware distributed among multiple projects in an Automotive Organization. This tool provides e-commerce website feel for ordering, tracking, and shipping mechanism for hardware within Organization around the Globe.',
        responsibilities: [
            'Helped team in gathering, understanding and analysis of requirements, also worked on Architecture and Database design of the application.',
            'Developed working prototype of application in the Test phase and demonstrated to win the project from Customer.',
            'Sprint planning to follow Agile methodologies, task designing and assignment to the team using project management tool JIRA.'
        ],
        link: 'https://www.kpit.com/',
        transition: 'right',
        technology: [jsLogo, reactLogo, nodeJSLogo, oauthLogo, NginxLogo, keycloakLogo, jwtLogo, htmlLogo, CssLogo],
        highlights: [
            "Used JavaScript frontend framework Angular(v7) for user interface development.",
            "Used popular Node.js framework Express for creating Restful APIs for providing dynamic data to Angular component via services from the PostgreSQL database.",
            "Configured LDAP APIs to authenticate from LDAP server and created middleware functions to authenticate request coming to NodeJS server.",
            "Used Operators from RXJS library for formatting the response into the desired format and for showing the status of the HTTP requests to the user.",
            "Deployed application on Linux production server using process manager utility PM2 and setup database."
        ]
    }
]

export const socialMedia = [
    { id: "Facebook", icon: <FacebookIcon />, href: "https://www.facebook.com/surajpandey5954" },
    { id: "TwitterIcon", icon: <TwitterIcon />, href: "https://twitter.com/SuryaPr68949074" },
    { id: "MailIcon", icon: <MailIcon />, href: "mailto:suryaprakash.cdac@gmail.com" },
    { id: "GitHubIcon", icon: <GitHubIcon />, href: "https://github.com/surya5954" },
    { id: "LinkedInIcon", icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/surya5954/" },
    { id: "Medium", icon: <BookIcon />, href: "https://suryaprakash-pandey.medium.com/" }
];

// export const skillData = 
const labels = [
    '',
    'NodeJS',
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Angular',
    'SQL Databases',
    'NoSQL Databases',
    'AWS Cloud',
    'Microservices',
    'Dcoker',
    'Oauth 2.0/OIDC',
    ''
]

export const skillChartData = {
    labels: labels,
    datasets: [{
        base: 0,
        label: 'Skills',
        data: [10, 8, 9, 8, 7, 6, 5, 7, 5, 4, 5, 4, 8, 0],
        backgroundColor: [
            'rgb(222, 203, 164, 0)',
            'rgb(26, 38, 38, 0.8)',
            'rgb(2, 3, 3, 0.8)',
            'rgb(26, 38, 38, 0.8)',
            'rgb(58, 85, 85, 0.8)',
            'rgb(98, 143, 143, 0.8)',
            'rgb(130, 170, 170, 0.8)',
            'rgb(58, 85, 85, 0.8)',
            'rgb(130, 170, 170, 0.8)',
            'rgb(177, 202, 202, 0.8)',
            'rgb(130, 170, 170, 0.8)',
            'rgb(177, 202, 202, 0.8)',
            'rgb(26, 38, 38, 0.8)',
            'rgb(105, 155, 155, 0.8)',
        ],
        borderColor: "#3E5151",
        borderWidth: 0
    }]
};

export const skillData = [
    { name: 'NodeJS', Skill_Proficiency: 8 },
    { name: 'JavaScript', Skill_Proficiency: 9 },
    { name: 'React', Skill_Proficiency: 7 },
    { name: 'HTML', Skill_Proficiency: 8 },
    { name: 'CSS', Skill_Proficiency: 7 },
    { name: 'Databases', Skill_Proficiency: 8 },
    { name: 'System Design', Skill_Proficiency: 7 }
];

export const data = {
    "greeting": "Hello there!",
    "userData": {
        "name": "Surya Prakash Pandey",
        "nickName": "Surya",
        "role": "Senior Software Engineer @ Bayer",
        "about": "I am a Full-Stack Developer with 7 years of experience. Reading and learning about new technology has always been a fascination of mine, and blogging about them is something I've only recently adopted."
    }
}

const time = new window.Date().getHours();
export const greetings = time < 10 ? "Good Morning" : time < 20 ? "Good Day" : "Good Evening";
