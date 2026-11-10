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
    name: "1st Place — AWS AI Hackathon: A Breath of Fresh Air",
    competition: "AWS & One-U Responsible AI Initiative, University of Utah",
    description: "Won first place for BreatheSafeSLC — an AI-powered air quality forecasting app delivering personalized health alerts based on EPA and weather data.",
    link: "https://www.engineering.utah.edu/news/2025/students-use-ai-to-solve-air-quality-challenges.php",
    year: "Jun 2025",
  },
  {
    name: "Best Use of AI/ML for Mars — Crimson Hacks",
    competition: "Redo, Just Build & University of Utah",
    description: "Won for Weather Aware Predictions — MobileNetV2 Mars rover image classifier that generates a 10-day dusty/clear forecast to estimate solar panel charging needs.",
    link: "https://github.com/meishijul/WeatherAwarePathfinder",
    year: "Oct 2025",
  },
  {
    name: "Wilkes Center Student Innovation Prize — 1st Place",
    amount: "$20,000",
    competition: "University of Utah Wilkes Center",
    description: "Won for Conscious LLC — a sustainability app empowering eco-conscious purchasing. Listed in top 20 small businesses.",
    link: "https://wilkes.utah.edu/student-awards/",
    year: "May 2024",
  },
  {
    name: "Taco Bell Live Más Scholarship",
    competition: "Taco Bell Foundation",
    description: "4× scholar (2022, 2023, 2024, 2025). Awarded based on a passion video demonstrating community impact.",
    link: "https://www.tacobellfoundation.org/live-mas-scholarship/",
    year: "2022–2025",
  },
  {
    name: "Presidential Scholarship",
    competition: "University of Utah",
    description: "Premier merit scholarship. Non-Resident Presidential Scholar Year 1; Resident Presidential Scholar Years 2–4. Covered tuition and housing.",
    year: "2022",
  },
  {
    name: "ACCESS Starfish Scholarship",
    competition: "University of Utah College of Science",
    description: "Awarded to only 10 ACCESS students. Covers any costs associated with education and living expenses.",
    link: "https://access.utah.edu/scholars/",
    year: "Jun 2022",
  },
  {
    name: "Undergraduate Research Opportunities Program (UROP) Award",
    competition: "University of Utah Office of Undergraduate Research",
    description: "Research stipend, dedicated support, and conference presentation opportunity for work in the Fracture & Fatigue Lab.",
    year: "Aug 2023",
  },
  {
    name: "College of Engineering Scholarships",
    competition: "John and Marcia Price College of Engineering, University of Utah",
    description: "Recipient of the Patwardhan Family, Lowell & Sheila Gill Memorial Endowed, Keaton Walker, and Pehrson Family Trust scholarships.",
    year: "May 2025",
  },
  {
    name: "Dean's List",
    competition: "University of Utah College of Engineering",
    description: "Fall 2022, Spring 2023, Fall 2023, Spring 2024, Fall 2024, Spring 2025.",
    year: "2022–2025",
  },
  {
    name: "1st Place — HOSA State Health Informatics",
    competition: "Health Occupations Students of America",
    description: "Won first place in Idaho and regionals for the Health Informatics competitive event.",
    year: "Apr 2022",
  },
];
