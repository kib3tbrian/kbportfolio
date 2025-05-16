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
      { name: 'TypeScript', level: 78, color: 'bg-indigo-500' },
      { name: 'Go', level: 70, color: 'bg-cyan-600' },
      { name: 'Solidity', level: 78, color: 'bg-red-500' },
    ]
  },
  { 
    category: 'Data Engineering', 
    skills: [
      { name: 'Apache Airflow', level: 90, color: 'bg-blue-800' },
      { name: 'Apache Spark', level: 75, color: 'bg-green-700' },
      { name: 'Snowflake', level: 80, color: 'bg-blue-500' },
      { name: 'Pandas', level: 80, color: 'bg-purple-600' }
    ]
  },
    { 
    category: 'Frontend', 
    skills: [
      { name: 'React', level: 82, color: 'bg-sky-500' },
      { name: 'Next.js', level: 80, color: 'bg-purple-600' },
      { name: 'Tailwind CSS', level: 75, color: 'bg-teal-500' }
    ]
  },
  { 
    category: 'Backend & APIs', 
    skills: [
      { name: 'NodeJS', level: 85, color: 'bg-indigo-600' },
      { name: 'REST APIs', level: 80, color: 'bg-teal-500' },
      { name: 'GraphQL', level: 70, color: 'bg-red-600' },
      { name: 'FastAPI', level: 80, color: 'bg-blue-700' },
      { name: 'Microservices', level: 75, color: 'bg-orange-600' }
    ]
  },
  { 
    category: 'DevOps & Tools', 
    skills: [
      { name: 'AWS', level: 80, color: 'bg-yellow-600' },
      { name: 'Docker', level: 75, color: 'bg-blue-600' },
      { name: 'Git', level: 85, color: 'bg-gray-700' },
      { name: 'Kubernetes', level: 85, color: 'bg-yellow-500' }
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
