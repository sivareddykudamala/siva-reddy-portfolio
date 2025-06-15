// Portfolio Data - Replace with your actual information
export const personalInfo = {
  name: "K Venkata Siva Reddy",
  title: "Software Engineer - II",
  subtitle: "Backend Specialist & Microservices Expert",
  location: "Chennai, India",
  email: "kudamalasivareddy@gmail.com",
  phone: "+91 8142519675",
  bio: "Experienced Software Engineer with 3+ years of expertise in Java, Spring Boot, and microservices architecture. Proven track record of architecting scalable solutions in distributed environments, optimizing system performance by up to 80%, and leading technical initiatives across enterprise-grade applications and complex data migration projects.",
  image: "/ClearProfile.jpeg", // Your professional profile photo
  resume: "/resume.pdf",
  social: {
    github: "https://github.com/sivareddykudamala",
    linkedin: "https://www.linkedin.com/in/venkata-siva-reddy-53105b178/",
    twitter: "https://twitter.com/yourusername",
    website: "https://sivareddy.dev"
  }
};

export const skills = {
  technical: [
    {
      category: "Programming Languages",
      skills: ["Java", "JavaScript", "Node.js"]
    },
    {
      category: "Microservices & APIs", 
      skills: ["Spring Boot", "REST APIs", "Microservices Architecture", "Node.js"]
    },
    {
      category: "Databases & Caching",
      skills: ["MongoDB", "Redis", "AWS S3", "MySQL", "Hazelcast"]
    },
    {
      category: "Messaging & Stream Processing",
      skills: ["Kafka"]
    },
    {
      category: "Monitoring & Analytics",
      skills: ["New Relic", "ELK Stack", "Elasticsearch", "Logstash", "Kibana", "Databricks"]
    },
    {
      category: "Testing & API Management",
      skills: ["JUnit", "Mockito", "Postman", "Swagger"]
    },
    {
      category: "CI/CD & DevOps",
      skills: ["Jenkins", "Docker", "Kubernetes", "AWS", "Gradle", "GitHub"]
    },
    {
      category: "Development Tools",
      skills: ["IntelliJ IDEA", "Visual Studio Code", "Jira", "Confluence"]
    }
  ],
  soft: [
    "Problem Solving",
    "Team Leadership", 
    "Mentoring",
    "Code Reviews",
    "System Architecture",
    "Technical Documentation",
    "Agile Development",
    "Cross-functional Collaboration"
  ]
};

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application with React frontend and Node.js backend. Features include user authentication, payment processing, inventory management, and admin dashboard.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "TailwindCSS"],
    features: ["User Authentication", "Payment Integration", "Admin Dashboard", "Inventory Management"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.com",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application built with React and Firebase. Real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Firebase", "Material-UI", "React DnD"],
    features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "File Attachments"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://taskmanager-demo.com",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Modern weather dashboard with location-based forecasts, interactive maps, and weather alerts. Built with React and integrated with multiple weather APIs.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
    features: ["Location Services", "5-day Forecast", "Interactive Maps", "Weather Alerts"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-demo.com",
    category: "Frontend"
  },
  {
    id: 4,
    title: "API Gateway Service",
    description: "Microservices API gateway built with Node.js and Express. Features rate limiting, authentication, request/response transformation, and monitoring.",
    image: "/api/placeholder/600/400",
    technologies: ["Node.js", "Express", "Redis", "Docker", "JWT"],
    features: ["Rate Limiting", "Authentication", "Load Balancing", "Monitoring"],
    github: "https://github.com/yourusername/api-gateway",
    demo: null,
    category: "Backend"
  }
];

export const experience = [
  {
    id: 1,
    company: "Opsera",
    position: "Software Engineer-II",
    location: "Chennai, India",
    startDate: "2024",
    endDate: "Present",
    description: "Architecting and implementing scalable microservices solutions, leading technical initiatives, and mentoring junior developers while focusing on Salesforce DevOps and data migration systems.",
    achievements: [
      "Architected and implemented Salesforce data migration feature, reducing data transfer time by 80% and improving data accuracy by 99.9%",
      "Led the upgrade of 15+ Java Microservices to latest versions, implementing security best practices and reducing vulnerabilities by 100%",
      "Refactored microservices architecture, reducing code duplication by 60% and improving system maintainability",
      "Developed 100+ Node.js REST APIs for Salesforce Insights, achieving 99.9% uptime and reducing response time by 30%",
      "Implemented complex MongoDB aggregation pipelines, improving data analysis efficiency by 50%",
      "Integrated OpenAI API for intelligent pipeline analysis, reducing troubleshooting time by 60%"
    ],
    technologies: ["Java", "Spring Boot", "Node.js", "MongoDB", "Microservices", "OpenAI API", "Salesforce"]
  },
  {
    id: 2,
    company: "Opsera",
    position: "Software Engineer-I",
    location: "Chennai, India",
    startDate: "Sep 2022",
    endDate: "Apr 2024",
    description: "Designed and implemented real-time notification services and integrated multiple cloud services while optimizing pipeline performance and automating DevOps workflows.",
    achievements: [
      "Designed and implemented real-time notification service supporting multiple channels (Slack, Email, MS Teams, Google Meet), improving user engagement by 45%",
      "Integrated AWS S3 file upload and SES email capabilities into AWS Integrator Microservice",
      "Enhanced Opsera Pipelines and Tasks with template-based workflows, resulting in 30% faster performance and 40% reduced processing time",
      "Integrated Jira with Opsera platform, automating 70% of Salesforce DevOps workflows and reducing manual effort"
    ],
    technologies: ["Java", "Spring Boot", "AWS S3", "AWS SES", "Jira API", "Microservices", "Real-time Systems"]
  },
  {
    id: 3,
    company: "Lightcast",
    position: "Software Engineer-I",
    location: "Chennai, India",
    startDate: "Jul 2021",
    endDate: "Aug 2022",
    description: "Optimized legacy systems and modernized codebase while maintaining high system uptime and implementing comprehensive testing strategies.",
    achievements: [
      "Optimized Search API to return 10,000 records in a single query (previously limited to 500 records)",
      "Modernized legacy codebase using Java, Spring Boot and JPA, improving system performance by 40%",
      "Achieved 95% first-call resolution rate for production issues, maintaining 99.9% system uptime",
      "Implemented comprehensive unit testing achieving 90% code coverage, reducing bug reports by 60%"
    ],
    technologies: ["Java", "Spring Boot", "JPA", "REST APIs", "Unit Testing", "System Optimization"]
  },
  {
    id: 4,
    company: "Lightcast",
    position: "Software Engineer Intern",
    location: "Chennai, India",
    startDate: "Jan 2021",
    endDate: "Jun 2021",
    description: "Developed document processing services and integrated APIs to improve resume parsing capabilities and reduce processing time.",
    achievements: [
      "Developed DocumentStore service for resume processing, improving parsing accuracy by 85%",
      "Integrated Parse API with DocumentStore, reducing document processing time by 50%"
    ],
    technologies: ["Java", "API Integration", "Document Processing", "Service Development"]
  }
];

export const education = [
  {
    id: 1,
    institution: "College of Engineering, Guindy, Anna University",
    degree: "Bachelor of Engineering in Computer Science Engineering",
    location: "Chennai, India",
    startDate: "2017",
    endDate: "2021",
    coursework: ["Data Structures", "Algorithms", "Software Engineering", "Database Systems", "Computer Networks", "Operating Systems"],
    activities: ["Technical Projects", "Coding Competitions", "Software Development"]
  }
];

// Certifications section removed as requested

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager",
    company: "Tech Solutions Inc.",
    avatar: "/api/placeholder/80/80",
    content: "Working with K Venkata Siva Reddy has been fantastic. Their attention to detail and ability to translate complex requirements into elegant solutions is impressive.",
    rating: 5
  },
  {
    id: 2,
    name: "Mike Chen",
    position: "CTO",
    company: "StartupXYZ", 
    avatar: "/api/placeholder/80/80",
    content: "One of the most talented developers I've worked with. They consistently deliver high-quality code and are always willing to help team members.",
    rating: 5
  }
]; 