// src/data/certifications.js

/**
 * Certifications and credentials data
 */
const certifications = [
  {
    id: 1,
    title: 'AWS Certified Data Analytics - Specialty',
    issuer: 'Amazon Web Services',
    date: 'Jan 2024',
    credentialId: 'AWS-DA-12345',
    verificationLink: 'https://www.youracclaim.com/badges/aws-data-analytics',
    image: '/certifications/aws-data-analytics.webp',
    skills: ['AWS', 'Big Data', 'Data Pipeline', 'Analytics', 'ETL', 'Data Lake'],
    description: 'Validates technical expertise in designing and implementing AWS services to derive insights from data. Focuses on collection, storage, processing, and visualization of data using AWS services.',
    featured: true
  },
  {
    id: 2,
    title: 'Microsoft Certified: Azure Data Engineer Associate',
    issuer: 'Microsoft',
    date: 'Nov 2023',
    credentialId: 'MSAZ-DE-54321',
    verificationLink: 'https://www.credly.com/badges/microsoft-azure-data-engineer',
    image: '/certifications/azure-data-engineer.webp',
    skills: ['Azure', 'Data Engineering', 'Data Processing', 'Data Storage', 'Data Security'],
    description: 'Demonstrates ability to design and implement the management, monitoring, security, and privacy of data solutions using Azure data services.',
    featured: true
  },
  {
    id: 3,
    title: 'Professional Data Engineer, Google Cloud',
    issuer: 'Google Cloud',
    date: 'Aug 2023',
    credentialId: 'GCP-DE-67890',
    verificationLink: 'https://www.credential.net/google-cloud-data-engineer',
    image: '/certifications/gcp-data-engineer.webp',
    skills: ['Google Cloud', 'BigQuery', 'Data Processing', 'Machine Learning', 'Data Pipeline'],
    description: 'Validates ability to design, build, operationalize, secure, and monitor data processing systems with a focus on security and compliance, scalability and efficiency, reliability, and fidelity.',
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