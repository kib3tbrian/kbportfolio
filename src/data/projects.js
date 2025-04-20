// src/data/projects.js

/**
 * Projects data
 */
const projects = [
  {
    id: 1,
    title: 'Auto Motor Sales Platform',
    description: 'Full-stack automotive marketplace for buying and selling vehicles',
    technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'AWS'],
    category: 'Web Development',
    githubLink: 'https://github.com/kibet-brian/auto-motor-sales',
    liveLink: null,
    image: '/projects/auto-sales.png',
    details: [
      'Built advanced vehicle search and filtering system',
      'Implemented secure payment processing for vehicle deposits',
      'Created dealer and private seller dashboards',
      'Integrated vehicle history report services',
      'Developed automated price comparison tools'
    ],
    featured: true
  },
  {
    id: 2,
    title: 'Emergency Contact & GPS App',
    description: 'Mobile application for real-time location tracking with emergency contact system',
    technologies: ['React Native', 'Firebase', 'Node.js', 'Google Maps API', 'MongoDB'],
    category: 'Mobile Development',
    githubLink: 'https://github.com/kibet-brian/emergency-contact-app',
    liveLink: null,
    image: '/projects/emergency-app.png',
    details: [
      'Real-time GPS location tracking with history timeline',
      'Emergency contact management system with priority levels',
      'Automated SMS and email notifications to selected contacts',
      'Customizable safe zones with entry/exit alerts',
      'Battery-efficient background location tracking'
    ],
    featured: true
  },
  {
    id: 3,
    title: 'Banking REST API',
    description: 'Secure RESTful API for banking operations',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    category: 'API Development',
    githubLink: 'https://github.com/kibet-brian/banking-api',
    liveLink: null,
    image: '/projects/banking-api.png',
    details: [
      'Designed secure API architecture',
      'Implemented OAuth2 authentication',
      'Created comprehensive API documentation',
      'Built transaction processing system',
      'Implemented rate limiting and security measures'
    ],
    featured: true
  },
  {
    id: 4,
    title: 'Home Listings Platform',
    description: 'Modern web platform for property listings and viewings',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Redis', 'AWS'],
    category: 'Web Development',
    githubLink: 'https://github.com/kibet-brian/home-listings',
    liveLink: null,
    image: '/projects/home-listings.png',
    details: [
      'Developed advanced property search with multiple filters',
      'Implemented virtual tour and 3D viewing features',
      'Created automated property valuation system',
      'Integrated with multiple real estate APIs',
      'Built appointment scheduling system for viewings'
    ],
    featured: false
  },
  {
    id: 5,
    title: 'Delivery Tracking App',
    description: 'Mobile app for real-time delivery tracking',
    technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Node.js', 'MongoDB'],
    category: 'Mobile Development',
    githubLink: 'https://github.com/kibet-brian/delivery-app',
    liveLink: null,
    image: '/projects/delivery-app.png',
    details: [
      'Developed real-time tracking system',
      'Implemented push notifications',
      'Created driver and customer interfaces',
      'Integrated payment processing',
      'Built route optimization algorithm'
    ],
    featured: true
  },
  {
    id: 6,
    title: 'Social Media API',
    description: 'Scalable API for social media platform',
    technologies: ['FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
    category: 'API Development',
    githubLink: 'https://github.com/kibet-brian/social-api',
    liveLink: null,
    image: '/projects/social-api.png',
    details: [
      'Designed scalable microservices architecture',
      'Implemented real-time notifications',
      'Created content moderation system',
      'Built analytics and reporting endpoints',
      'Developed user authentication system'
    ],
    featured: false
  },
  {
    id: 7,
    title: 'Escrow Holding Service',
    description: 'Secure platform for managing escrow transactions',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
    category: 'Web Development',
    githubLink: 'https://github.com/kibet-brian/escrow-service',
    liveLink: null,
    image: '/projects/escrow-service.png',
    details: [
      'Implemented secure multi-party transaction system',
      'Built automated verification and validation processes',
      'Created dispute resolution management system',
      'Integrated secure payment processing with Stripe',
      'Developed comprehensive transaction tracking'
    ],
    featured: true
  }
];

// Helper functions
export const getProjectCategories = () => {
  return ['All', ...new Set(projects.map(p => p.category))];
};

export const getFilteredProjects = (category) => {
  return category === 'All' 
    ? projects 
    : projects.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

export default projects;
