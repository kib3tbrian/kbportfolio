// src/data/skills.js

/**
 * Skills data organized by categories
 */
const skills = [
  { 
    category: 'Programming Languages', 
    skills: [
      { name: 'Python', level: 90, color: 'bg-blue-500' },
      { name: 'SQL', level: 85, color: 'bg-green-600' },
      { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
      { name: 'HTML/CSS', level: 75, color: 'bg-orange-500' }
    ]
  },
  { 
    category: 'Data Engineering', 
    skills: [
      { name: 'ETL Pipelines', level: 85, color: 'bg-indigo-600' },
      { name: 'dbt', level: 80, color: 'bg-teal-500' },
      { name: 'Airflow', level: 80, color: 'bg-blue-700' },
      { name: 'PySpark', level: 75, color: 'bg-orange-600' },
      { name: 'Kafka', level: 70, color: 'bg-red-600' }
    ]
  },
  { 
    category: 'Databases & Warehouses', 
    skills: [
      { name: 'PostgreSQL', level: 90, color: 'bg-blue-800' },
      { name: 'MySQL', level: 85, color: 'bg-cyan-600' },
      { name: 'MongoDB', level: 75, color: 'bg-green-700' },
      { name: 'Snowflake', level: 80, color: 'bg-blue-500' },
      { name: 'BigQuery', level: 80, color: 'bg-purple-600' }
    ]
  },
  { 
    category: 'Cloud & Tools', 
    skills: [
      { name: 'AWS', level: 80, color: 'bg-yellow-600' },
      { name: 'Docker', level: 75, color: 'bg-blue-600' },
      { name: 'Git', level: 85, color: 'bg-gray-700' },
      { name: 'Power BI', level: 85, color: 'bg-yellow-500' },
      { name: 'CI/CD', level: 70, color: 'bg-green-600' }
    ]
  }
];

// Helper functions
export const getAllSkills = () => {
  return skills.flatMap(category => category.skills);
};

export const getTopSkills = (limit = 10) => {
  return getAllSkills()
    .sort((a, b) => b.level - a.level)
    .slice(0, limit);
};

export const getSkillsByCategory = (categoryName) => {
  const category = skills.find(cat => cat.category === categoryName);
  return category ? category.skills : [];
};

export default skills;