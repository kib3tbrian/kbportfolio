// src/data/projects.js

/**
 * Projects data
 */
const projects = [
  {
    id: 1,
    title: 'Insurance Claims Data Pipeline',
    description: 'End-to-end data pipeline for processing and analyzing insurance claims data',
    technologies: ['Python', 'Airflow', 'PostgreSQL', 'Power BI', 'Docker'],
    category: 'Data Engineering',
    githubLink: 'https://github.com/kibet-brian/insurance-claims-pipeline',
    liveLink: null,
    image: '/projects/insurance-pipeline.png',
    details: [
      'Automated ETL workflows for claims data processing',
      'Implemented data validation and quality checks',
      'Built data models optimized for analytical queries',
      'Created real-time dashboards for monitoring claims metrics',
      'Reduced processing time by 40% through pipeline optimization'
    ],
    featured: true
  },
  {
    id: 2,
    title: 'Banking Data Warehouse',
    description: 'Modern data warehouse solution for banking transaction data',
    technologies: ['dbt', 'Snowflake', 'Python', 'AWS', 'SQL'],
    category: 'Data Engineering',
    githubLink: 'https://github.com/kibet-brian/banking-dw',
    liveLink: null,
    image: '/projects/banking-dw.png',
    details: [
      'Designed dimensional models for transactional data',
      'Implemented incremental loading patterns',
      'Created data transformation layers using dbt',
      'Set up monitoring and alerting for data quality issues',
      'Documented data lineage and business definitions'
    ],
    featured: true
  },
  {
    id: 3,
    title: 'Healthcare Analytics Dashboard',
    description: 'Interactive dashboard for visualizing healthcare metrics',
    technologies: ['Power BI', 'SQL', 'Python', 'DAX', 'ETL'],
    category: 'Data Visualization',
    githubLink: 'https://github.com/kibet-brian/healthcare-dashboard',
    liveLink: null,
    image: '/projects/healthcare-dashboard.png',
    details: [
      'Built interactive reports with drill-down capabilities',
      'Created custom visualizations for clinical metrics',
      'Implemented row-level security for data access',
      'Optimized queries for faster dashboard loading',
      'Automated data refresh processes'
    ],
    featured: true
  },
  {
    id: 4,
    title: 'Real-time Data Streaming Platform',
    description: 'Platform for processing streaming data from IoT devices',
    technologies: ['Kafka', 'PySpark', 'AWS', 'MongoDB', 'Docker'],
    category: 'Data Engineering',
    githubLink: 'https://github.com/kibet-brian/stream-platform',
    liveLink: null,
    image: '/projects/streaming-platform.png',
    details: [
      'Designed scalable architecture for high-throughput data',
      'Implemented real-time data processing with Kafka and PySpark',
      'Created monitoring dashboards for stream health',
      'Set up automated alerts for anomaly detection',
      'Optimized for cost efficiency on AWS'
    ],
    featured: false
  },
  {
    id: 5,
    title: 'Customer 360 Data Platform',
    description: 'Unified customer data platform for a financial institution',
    technologies: ['Python', 'PostgreSQL', 'REST API', 'ETL', 'Docker'],
    category: 'Data Engineering',
    githubLink: 'https://github.com/kibet-brian/customer-360',
    liveLink: null,
    image: '/projects/customer-platform.png',
    details: [
      'Consolidated customer data from multiple source systems',
      'Implemented identity resolution algorithms',
      'Built REST APIs for accessing unified customer profiles',
      'Created data governance workflows',
      'Designed for GDPR compliance and data security'
    ],
    featured: true
  },
  {
    id: 6,
    title: 'Data Quality Monitoring Tool',
    description: 'Automated tool for monitoring and reporting data quality issues',
    technologies: ['Python', 'SQL', 'Airflow', 'React', 'FastAPI'],
    category: 'Data Engineering',
    githubLink: 'https://github.com/kibet-brian/data-quality-monitor',
    liveLink: null,
    image: '/projects/data-quality.png',
    details: [
      'Implemented configurable data quality checks',
      'Created visual reporting of quality metrics over time',
      'Set up automated alerting for threshold violations',
      'Built user interface for managing rules and thresholds',
      'Integrated with existing data pipelines'
    ],
    featured: false
  },
  {
    id: 7,
    title: 'Financial Data API',
    description: 'RESTful API for accessing and analyzing financial data',
    technologies: ['FastAPI', 'PostgreSQL', 'Python', 'Docker', 'JWT'],
    category: 'Web Development',
    githubLink: 'https://github.com/kibet-brian/financial-api',
    liveLink: null,
    image: '/projects/financial-api.png',
    details: [
      'Designed RESTful API endpoints for financial data access',
      'Implemented authentication and authorization',
      'Created comprehensive API documentation',
      'Built rate limiting and API usage analytics',
      'Optimized query performance for high-traffic endpoints'
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