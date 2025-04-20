// src/data/certifications.js

/**
 * Certifications and credentials data
 */
const certifications = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    credentialId: 'AWS-SAA-12345',
    verificationLink: 'https://www.youracclaim.com/badges/aws-solutions-architect',
    image: '/certifications/aws-solutions-architect.webp',
    skills: ['AWS', 'Cloud Architecture', 'Microservices', 'Serverless', 'API Gateway', 'DevOps'],
    description: 'Validates technical expertise in designing and implementing scalable, highly available, and fault-tolerant systems on AWS. Focuses on best practices for building secure and robust applications.',
    featured: true
  },
  {
    id: 2,
    title: 'Google Associate Android Developer',
    issuer: 'Google',
    date: 'Nov 2023',
    credentialId: 'GAD-54321',
    verificationLink: 'https://developers.google.com/certification/associate-android-developer',
    image: '/certifications/google-android-dev.webp',
    skills: ['Android', 'Kotlin', 'Mobile Development', 'API Integration', 'Material Design', 'Android SDK'],
    description: 'Professional certification demonstrating proficiency in Android development, including UI/UX implementation, data management, user authentication, and API integration.',
    featured: true
  },
  {
    id: 3,
    title: 'Complete Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'Aug 2023',
    credentialId: 'UC-67890',
    verificationLink: 'https://www.udemy.com/certificate/web-development',
    image: '/certifications/udemy-fullstack.webp',
    skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'Authentication'],
    description: 'Comprehensive full-stack web development certification covering modern JavaScript frameworks, database design, API development, and deployment strategies.',
    featured: false
  }
];

// Helper functions
export const getFeaturedCertifications = () => {
  return certifications.filter(cert => cert.featured);
};

export const getCertificationById = (id) => {
  return certifications.find(cert => cert.id === parseInt(id));
};

export const getCertificationsByIssuer = (issuer) => {
  return certifications.filter(cert => cert.issuer === issuer);
};

export default certifications;
