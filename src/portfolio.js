const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://JukaleManmath.github.io',
  title: 'MJ',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Manmath Jukale',
  role: 'MS CS at State University of New York at Binghamton',
  description:
    'Experienced professional in software development interested in building scalable systems , Passionate about Software Development and AI/ML Solutions.',
  resume:
    'https://drive.google.com/file/d/1Mu6hMNEjT7NFBD2fz2PUWMtuiHthq8AO/view?usp=drive_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/jukalemanmath',
    github: 'https://github.com/JukaleManmath',
  },
}

const education = [
  {
    name: 'State University of New York at Binghamton',
    description: 'Masters in Computer Science',
    stack: ['Aug 2024 - May 2026'],
  },
  {
    name: 'Savitribai Phule Pune University',
    description: 'B.E in Computer Science',
    stack: ['Aug 2019 - Jun 2023', 'GPA: 8.99/10'],
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Fine-Tuning OpenAI GPT Models',
    description:
      'Engineered a fine-tuning workflow for GPT-3.5 using Python and the OpenAI API to enhance model performance on domain-specific tasks',
    stack: [
      'OpenAI',
      'Python',
      'LlamaIndex',
      'Langchain'
    ],
    sourceCode: 'https://github.com/JukaleManmath/Fine_Tuning_OpenAI_GPT_models',
  },
  {
    name: 'CSV Analyzer',
    description:
      'CSV Analyzer developed using streamlit , python , OpenAI and Lyzr AI to analyze the CSV files.',
    stack: ['OpenAI', 'Python'],
    sourceCode: 'https://github.com/JukaleManmath/CSV-Analyzer',
  },
  {
    name: 'Number Plate Recognition Using Machine Learning',
    description:
      '• Developed a Machine Learning (ML) model using OpenCV and Python libraries to perform Number Plate Recognition (NPR) on images and videos, extracting number plate text.',
    stack: ['OpenCV', 'Pandas', 'Python', 'Matplotlib'],
  },
  {
    name: 'Ransomware Detecting Tool',
    description:
      'Implemented a monitoring tool designed to detect and analyze ransomware activity on specified destinations.',
    stack: ['Python', 'Linux','BeautifulSoup'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'C++',
  'Python',
  'Java',
  'JavaScript',
  'TypeScript',
  'Spring Boot',
  'React',
  'Node.js',
  'Docker',
  'Jenkins',
  'Git',
  'REST APIs',
  'Linux',
  'tcpdump',
]

const experience = [
  {
    name: 'Callvcal',
    description:
      'Worked as Software Engineer , Spearheaded backend optimizations for a high-traffic system using Java and Spring Boot, enhancing system performance by 25% through improved API efficiency, collaborative troubleshooting with DevOps, and rigorous testing to ensure seamless multi-platform functionality.',
    stack: ['HYD, India', 'Nov 2023 - May 2024'],
  },
  {
    name: 'ELite Softwares',
    description:
      'Worked as Full-Stack Developer Intern , Led the development of a full-stack web application with a React frontend and Node.js backend, resulting in an 80% increase in client engagement; streamlined deployment pipelines with Docker and Jenkins, achieving a 50% reduction in deployment time and minimizing manual errors.',
    stack: ['Pune, India', 'May 2023 - Oct 2023'],
  },
  {
    name: 'Nuance Communications',
    description:
      'Software Engineering intern involved in developing the UI/UX features for the product DMA(Dragon Medical Advisor) and also worked on python scripts.',
    stack: ['Pune, India', 'May 2022 - Aug 2022'],
  },
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'jukalemanmath@gmail.com',
}

export { header, about, projects, skills, contact, education, experience }
