// src/data/workExperience.js

/**
 * Work experience data
 * Contains professional history information
 */
const workExperience = [
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
  const startDate = new Date('2023-07-01'); // First job start date
  const currentDate = new Date();
  const yearDiff = currentDate.getFullYear() - startDate.getFullYear();
  const monthDiff = currentDate.getMonth() - startDate.getMonth();
  
  return parseFloat((yearDiff + monthDiff / 12).toFixed(1));
};

export const getCurrentPosition = () => {
  // Find the most recent role
  let current = null;
  let latestDate = new Date(0);
  
  workExperience.forEach(exp => {
    exp.roles.forEach(role => {
      if (role.period.includes('Present')) {
        const startDate = new Date(role.period.split(' - ')[0]);
        if (startDate > latestDate) {
          latestDate = startDate;
          current = {
            role: role.title,
            company: exp.company
          };
        }
      }
    });
  });
  
  return current;
};

export default workExperience;