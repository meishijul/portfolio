export const info = {
  name: "Ishita Juluru",
  tagline: "CS Graduate · AI/ML · Full-Stack Engineer",
  location: "Salt Lake City, UT",
  email: "juluru.ishita@gmail.com",
  phone: "208-810-5474",
  linkedin: "https://www.linkedin.com/in/ishita-juluru",
  github: "https://github.com/meishijul",
  about:
    "CS grad from the University of Utah (3.66 GPA, Dean's List 2022–2025) with an emphasis in AI, information, and visual computing. I co-founded Conscious LLC—a sustainability startup that won the $20k Wilkes Center Student Innovation Prize—and have shipped production software at CHG Healthcare and in research labs. I'm passionate about building tools that make a real-world impact.",
};

export const education = {
  degree: "Honors B.S. Computer Science",
  school: "University of Utah",
  location: "Salt Lake City, UT",
  gpa: "3.66",
  grad: "May 2026",
  minor: "Mathematics",
  emphasis: "Artificial Intelligence, Information, Visual Computing",
  honors: "Dean's List 2022–2025",
  scholarships: [
    "Patwardhan Family Scholarship",
    "Lowell & Sheila Gill Memorial Endowed Scholarship",
    "Keaton Walker Scholarship",
    "Pehrson Family Trust & Scott L. Pehrson Scholarship",
  ],
  scholarshipNote: "Full-ride — tuition, housing & food · University of Utah College of Engineering",
};

export const experience = [
  {
    title: "Software Engineer",
    company: "WebBank",
    location: "Salt Lake City, UT",
    dates: "May 2026 – Present",
    bullets: [
      "Full-time software engineer at WebBank, an FDIC-insured industrial bank and leader in consumer and small business lending.",
    ],
    skills: ["Software Engineering"],
    highlight: true,
  },
  {
    title: "Software Engineering Intern",
    company: "CHG Healthcare",
    location: "Salt Lake City, UT",
    dates: "May 2025 – Aug 2025",
    bullets: [
      "Developed backend features to automate the physician reimbursement workflow, reducing manual processing time and improving payment accuracy.",
      "Built and tested RESTful APIs using Java, Spring Boot, and Apache Kafka; validated endpoints with Postman and implemented robust JUnit tests.",
      "Participated in Agile/Scrum development including sprint planning and retrospectives; occasionally led team standups.",
      "Collaborated with cross-functional teams using Jira, Confluence, and Docker to streamline deployment and issue tracking.",
    ],
    skills: ["Java", "Spring Boot", "Apache Kafka", "Docker", "PostgreSQL", "REST APIs", "JUnit"],
  },
  {
    title: "Co-Founder & Software Engineering Intern",
    company: "Conscious LLC",
    location: "consciousapp.org",
    dates: "May 2024 – Present",
    link: "https://www.consciousapp.org/",
    bullets: [
      "Co-founded an LLC and built a mobile app + Chrome extension to empower eco-conscious purchasing using sustainability metrics and barcode scanning.",
      "Developed and trained two custom GPT models on a validated product-level carbon footprint dataset, integrating a dual-GPT validation API for data accuracy.",
      "Won the Wilkes Center Student Innovation Prize ($20,000); listed in top 20 small businesses.",
      "Created the MVP and UI mockups in Figma; authored 50+ grant writing documents.",
    ],
    skills: ["Flutter", "Dart", "React.js", "Node.js", "Firebase", "Python", "OpenAI", "Figma"],
    highlight: true,
  },
  {
    title: "Researcher",
    company: "Dr. Acevedo's Fracture & Fatigue Lab, University of Utah",
    location: "Salt Lake City, UT",
    dates: "Aug 2022 – June 2024",
    bullets: [
      "Improved UNet segmentation accuracy by 82% for bone structure analysis using deep learning.",
      "Developed a semantic segmentation pipeline for analyzing the impact of diabetes on rat bone samples.",
      "Utilized Dragonfly for cochlea segmentation, achieving 90% accuracy via dice coefficients.",
    ],
    skills: ["Python", "PyTorch", "TensorFlow", "UNet", "Deep Learning", "Semantic Segmentation"],
  },
  {
    title: "Bioinformatics Intern",
    company: "Boise State University",
    location: "Boise, ID",
    dates: "Oct 2021 – June 2022",
    bullets: [
      "Automated RNA sequencing analysis pipelines using paired-end sequence files.",
      "Deployed Bash scripts to schedule and run workflows on the Idaho National Laboratory supercomputer.",
      "Used machine learning to predict how multiple mutations affect the function of an RNA enzyme.",
    ],
    skills: ["Python", "Bash", "R", "RStudio", "Machine Learning", "FastQC"],
  },
];

export const projects = [
  {
    name: "Conscious App",
    description:
      "Mobile app + Chrome extension that empowers eco-conscious purchasing via sustainability metrics and barcode scanning. Won the $20k Wilkes Center Student Innovation Prize.",
    skills: ["Flutter", "React.js", "Node.js", "Firebase", "OpenAI", "Python"],
    link: "https://www.consciousapp.org/",
    github: "https://github.com/ConscioussLLC",
    featured: true,
  },
  {
    name: "BreatheSafeSLC",
    description:
      "AI-powered air quality forecasting tool using Gradient Boosting Regression on EPA and weather data to predict AQI and send personalized SMS/email alerts to at-risk Salt Lake City residents.",
    skills: ["Python", "Machine Learning", "Gradient Boosting", "EPA Data"],
    github: "https://github.com/meishijul/AirQualityAIHackathon2025",
    featured: true,
  },
  {
    name: "Mars Weather Classifier",
    description:
      "MobileNetV2 pipeline that classifies Mars rover images as dusty/clear and generates a 10-day forecast to inform solar charging and mission planning via a web UI. Won Best Use of AI/ML at Crimson Hacks 2025.",
    skills: ["Python", "TensorFlow", "MobileNetV2", "Image Classification"],
    github: "https://github.com/meishijul/WeatherAwarePathfinder",
    featured: true,
  },
  {
    name: "MRI Reconstruction",
    description:
      "Accelerated MRI image reconstruction by implementing k-space sampling strategies and deep learning to improve image quality from undersampled data.",
    skills: ["Python", "Deep Learning", "Image Processing"],
  },
  {
    name: "Natural Language Processing",
    description:
      "Machine learning models for sentiment analysis, language modeling, and text summarization, leveraging quantization and batching for optimized performance.",
    skills: ["Python", "NLP", "Machine Learning", "Transformers"],
  },
  {
    name: "Google Sheets Clone",
    description:
      "Spreadsheet application with a formula editor supporting Excel-like functions and spreadsheet-saving capabilities.",
    skills: ["JavaScript"],
  },
  {
    name: "Snake.io Clone",
    description:
      "Multiplayer Snake game with real gameplay, player-controlled snakes, and power-ups.",
    skills: ["C#"],
    github: "https://github.com/meishijul/AppointmentScheduler",
  },
];

export const skills = {
  "Languages": ["Python", "Java", "JavaScript", "TypeScript", "C++", "C", "C#", "Dart", "R", "SQL", "Bash"],
  "AI / ML": ["TensorFlow", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI API", "Deep Learning", "Neural Networks", "NLP", "Computer Vision", "UNet", "MobileNetV2"],
  "Full-Stack": ["React.js", "Node.js", "Flutter", "Firebase", "REST APIs", "MySQL", "PostgreSQL"],
  "Tools & Infra": ["Docker", "Git/GitHub", "Spring Boot", "Apache Kafka", "Jira", "Confluence", "Figma", "Postman"],
};

export const awards = [
  {
    name: "Wilkes Center Student Innovation Prize",
    amount: "$20,000",
    description: "Won for Conscious LLC; listed in the top 20 small businesses.",
    year: "2024",
  },
  {
    name: "Best Use of AI/ML for Mars",
    competition: "Crimson Hacks powered by Redo and Just Build",
    description: "Won for Weather Aware Predictions — MobileNetV2 Mars rover image classifier and solar charging forecast.",
    year: "2025",
  },
  {
    name: "Dean's List",
    description: "University of Utah, 2022–2025.",
    year: "2022–2025",
  },
];
