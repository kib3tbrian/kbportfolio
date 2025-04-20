/**
 * Work experience data
 * Contains professional history information
 */
const workExperience = [
  {
    company: 'Turi MultiAgency',
    location: 'Nairobi, Kenya',
    website: 'https://turimultiagency.com', 
    roles: [
      {
        title: 'Web Developer',
        period: 'Jan 2025 - Present',
        type: 'Full-time',
        responsibilities: [
          'Develop and maintain responsive web applications using modern frameworks',
          'Implement RESTful APIs to connect frontend interfaces with backend services',
          'Optimize web performance and ensure cross-browser compatibility',
          'Collaborate with UX designers to create intuitive user interfaces',
          'Implement security best practices for web applications'
        ],
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs']
      }
    ]
  },
  {
    company: 'Nogeybix Inc',
    location: 'Nairobi, Kenya',
    website: 'https://nogeybix.com', 
    roles: [
      {
        title: 'Mobile Developer',
        period: 'March 2022 - Present',
        type: 'Full-time',
        responsibilities: [
          'Develop and maintain cross-platform mobile applications using React Native',
          'Implement mobile-specific features like push notifications and offline capabilities',
          'Optimize app performance and reduce load times',
          'Collaborate with backend teams to integrate mobile apps with APIs',
          'Ensure app compliance with platform-specific guidelines (App Store/Play Store)'
        ],
        technologies: ['React Native', 'Firebase', 'Redux', 'Mobile UI/UX', 'API Integration']
      }
    ]
  },
  {
    company: 'Penda Health',
    location: 'Nairobi, Kenya',
    website: 'https://pendahealth.com',
    roles: [
      {
        title: 'Insurance Claims Analyst',
        period: 'Apr 2024 - Aug 2024',
        type: 'Full-time',
        responsibilities: [
          'Developed and maintained data-driven applications for insurance processing using Python and SQL',
          'Automated data extraction and analysis processes, resulting in a 15% increase in efficiency',
          'Utilized Power BI to create interactive dashboards and reports for key performance indicators and claims trends',
          'Streamlined data processing workflows by automating data cleaning and validation, reducing manual effort',
          'Collaborated with cross-functional teams to improve data quality and reporting accuracy'
        ],
        technologies: ['Python', 'SQL', 'Power BI', 'Data Analysis', 'ETL']
      }
    ]
  },
  {
    company: 'KCB Group',
    location: 'Nairobi, Kenya',
    website: 'https://ke.kcbgroup.com',
    roles: [
      {
        title: 'Technical Support',
        type: 'Full-time',
        period: 'Jul 2023 - Mar 2024',
        responsibilities: [
          'Provided technical support for mission-critical banking applications, ensuring high availability and resolving system issues',
          'Collaborated with development teams to identify and address performance bottlenecks, improving application response times by 10%',
          'Implemented solutions to enhance application stability and user experience, including database query optimization and workflow streamlining',
          'Assisted in data migration projects between different database systems',
          'Documented technical procedures and created knowledge base articles for common issues'
        ],
        technologies: ['SQL', 'PostgreSQL', 'Troubleshooting', 'Banking Systems', 'Technical Documentation']
      }
    ]
  }
];

// Helper functions
export const getTotalExperienceYears = () => {
  const startDate = new Date('2022-03-17'); // Updated to Nogeybix start date
  const currentDate = new Date();
  const yearDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthDiff = currentDate.getMonth() - startDate.getMonth();
  
  return parseFloat((yearDiff + monthDiff / 12).toFixed(1));
};

export const getCurrentPosition = () => {
  // Since both Turi and Nogeybix are "Present", we'll return Turi as it's more recent
  return {
    role: 'Web Developer',
    company: 'Turi MultiAgency'
  };
};

export default workExperience;
