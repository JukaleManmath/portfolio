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
    'Experienced professional in software development interested in building scalable systems , Passionate about Cyber Security and AI Solutions.',
  resume:
    'https://drive.google.com/file/d/1QWQlalINAevSJzzI5WMzz7dWE7mzuZuD/view?usp=drive_link',
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
  'Java',
  'JavaScript',
  'React',
  'Python',
  'Linux',
  'tcpdump',
  'Splunk',
  'snort',
  'Nessus',
  'NMap',
]

const experience = [
  {
    name: 'Callvcal',
    description:
      'Worked as Security Analyst , monitored and analyzed security alerts by utilizing SIEM tools to detect, assess, and respond to potential threats & carried out vulnerability assessments through regular scans to identify and address security weaknesses',
    stack: ['HYD, India', 'Nov 2023 - May 2024'],
  },
  {
    name: 'ELite Softwares',
    description:
      'Security intern in Information Security team ,Developed a solid foundation in cybersecurity by completing training on tools, company protocols, and industry best pratices ; Led vulnerability assessments, threat analysis, and incident response efforts,',
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
