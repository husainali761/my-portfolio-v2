export const portfolioData = {
  personal: {
    name: "Hussain Ali Manj",
    title: "Full-Stack Developer & Shopify Expert",
    tagline: "Building fast, scalable, and user-friendly web applications",
    email: "f2023-312@bnu.edu.pk",
    location: "Pakistan",
    bio: "Passionate Full-Stack Developer with 2+ years of experience building modern web applications. Specialized in React, Node.js, and Shopify theme development. I love creating elegant solutions to complex problems and continuously learning new technologies.",
    resumeUrl: "#", // Add your resume URL
    avatar: "https://avatars.githubusercontent.com/u/203591047?v=4"
  },

  social: {
    github: "https://github.com/husainali761",
    linkedin: "#", // Add your LinkedIn
    twitter: "#", // Add your Twitter/X
    email: "mailto:f2023-312@bnu.edu.pk"
  },

  skills: {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript (ES6+)", level: 90 },
      { name: "HTML5 & CSS3", level: 95 },
      { name: "Tailwind CSS", level: 85 },
      { name: "TypeScript", level: 75 },
      { name: "Next.js", level: 80 },
      { name: "Redux/Context API", level: 85 }
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 70 },
      { name: "JWT Authentication", level: 85 }
    ],
    shopify: [
      { name: "Shopify Liquid", level: 95 },
      { name: "Theme Development", level: 90 },
      { name: "Online Store 2.0", level: 90 },
      { name: "Metafields", level: 85 },
      { name: "Theme Customization", level: 90 },
      { name: "Shopify CLI", level: 85 }
    ],
    tools: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 70 },
      { name: "Vercel/Netlify", level: 85 },
      { name: "Postman", level: 90 },
      { name: "Figma", level: 75 }
    ]
  },

  projects: [
    {
      id: 1,
      title: "Portfolio Shopify Theme",
      description: "Professional Shopify theme built with modern Liquid practices, featuring modular sections, Online Store 2.0 compatibility, and full theme editor customization.",
      longDescription: "A production-ready Shopify theme inspired by premium theme structures. Built with proper sections architecture, JSON templates, reusable snippets, and comprehensive schema for theme customization. Features include responsive design, accessibility compliance, SEO optimization, and performance-focused implementation.",
      technologies: ["Shopify Liquid", "HTML5", "CSS3", "JavaScript", "JSON Templates"],
      image: "/projects/shopify-theme.png",
      github: "https://github.com/husainali761/portfolio-site",
      demo: "#",
      featured: true,
      category: "Shopify",
      highlights: [
        "Online Store 2.0 compatible with JSON templates",
        "Modular section system with 7+ customizable sections",
        "Theme settings for colors and typography",
        "Responsive design with mobile-first approach",
        "WCAG 2.1 accessibility compliance",
        "Performance optimized (90+ Lighthouse score)"
      ]
    },
    {
      id: 2,
      title: "Full-Stack E-Commerce Platform",
      description: "Complete e-commerce solution with product management, shopping cart, checkout process, payment integration, and admin dashboard.",
      longDescription: "Built with MERN stack featuring user authentication, product CRUD operations, advanced filtering, cart management, Stripe payment integration, order tracking, and comprehensive admin panel for inventory and order management.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
      image: "/projects/ecommerce.png",
      github: "#",
      demo: "#",
      featured: true,
      category: "Full-Stack",
      status: "In Progress",
      highlights: [
        "User authentication with JWT",
        "Product CRUD with image upload",
        "Shopping cart with local storage persistence",
        "Stripe payment integration (test mode)",
        "Admin dashboard for order management",
        "Responsive design with Tailwind CSS"
      ]
    },
    {
      id: 3,
      title: "Real-Time Analytics Dashboard",
      description: "Interactive dashboard displaying real-time data with charts, filters, and data export functionality. Built for performance with large datasets.",
      longDescription: "Analytics platform featuring real-time data visualization, multiple chart types (line, bar, pie, area), advanced filtering, date range selection, data export to CSV/PDF, and responsive design. Optimized for handling large datasets with pagination and lazy loading.",
      technologies: ["React", "Chart.js", "Recharts", "Tailwind CSS", "REST API"],
      image: "/projects/dashboard.png",
      github: "#",
      demo: "#",
      featured: true,
      category: "Frontend",
      status: "Completed",
      highlights: [
        "Real-time data updates with WebSocket",
        "Multiple chart types with Chart.js",
        "Advanced filtering and search",
        "Export data to CSV/Excel",
        "Dark mode support",
        "Responsive mobile design"
      ]
    },
    {
      id: 4,
      title: "RESTful API with Authentication",
      description: "Scalable Node.js REST API with JWT authentication, role-based access control, MongoDB integration, and comprehensive API documentation.",
      longDescription: "Production-ready API featuring secure authentication, authorization middleware, CRUD operations, input validation, error handling, rate limiting, API versioning, and Swagger documentation. Deployed on Heroku with MongoDB Atlas.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest"],
      image: "/projects/api.png",
      github: "#",
      demo: "#",
      featured: false,
      category: "Backend",
      highlights: [
        "JWT authentication with refresh tokens",
        "Role-based authorization (admin/user)",
        "Input validation with Joi",
        "Swagger API documentation",
        "Unit and integration tests with Jest",
        "Rate limiting and security headers"
      ]
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      longDescription: "Trello-inspired task manager with board creation, drag-and-drop cards, real-time collaboration, user assignments, due dates, labels, file attachments, and activity tracking. Built with React, Node.js, and Socket.io for real-time features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "React DnD"],
      image: "/projects/task-manager.png",
      github: "#",
      demo: "#",
      featured: false,
      category: "Full-Stack",
      status: "In Progress",
      highlights: [
        "Real-time collaboration with Socket.io",
        "Drag-and-drop with React DnD",
        "User authentication and team management",
        "File uploads with Cloudinary",
        "Activity feed and notifications",
        "Dark mode support"
      ]
    },
    {
      id: 6,
      title: "Weather App with Geolocation",
      description: "Clean weather application using OpenWeatherMap API with geolocation, 7-day forecast, and beautiful UI with weather animations.",
      longDescription: "Modern weather app featuring current weather, hourly and weekly forecasts, geolocation support, search by city, weather animations, temperature unit toggle, and local storage for favorite locations.",
      technologies: ["React", "OpenWeatherMap API", "Tailwind CSS", "Axios"],
      image: "/projects/weather-app.png",
      github: "#",
      demo: "#",
      featured: false,
      category: "Frontend",
      status: "Completed"
    }
  ],

  experience: [
    {
      id: 1,
      company: "Freelance",
      position: "Full-Stack Developer",
      duration: "2023 - Present",
      location: "Remote",
      description: "Building custom web applications and Shopify themes for clients. Specialized in React, Node.js, and Shopify development.",
      responsibilities: [
        "Developed 5+ custom Shopify themes with advanced features",
        "Built full-stack web applications using MERN stack",
        "Implemented REST APIs with authentication and authorization",
        "Optimized application performance achieving 90+ Lighthouse scores",
        "Collaborated with clients to gather requirements and deliver solutions"
      ],
      technologies: ["React", "Node.js", "Shopify", "MongoDB", "Express"]
    },
    {
      id: 2,
      company: "Academic Projects",
      position: "Developer",
      duration: "2022 - 2023",
      location: "Beaconhouse National University",
      description: "Worked on multiple academic and personal projects to build strong foundation in web development.",
      responsibilities: [
        "Developed responsive web applications using modern frameworks",
        "Implemented database designs with SQL and NoSQL databases",
        "Practiced version control with Git and GitHub",
        "Learned software development lifecycle and best practices",
        "Built RESTful APIs and integrated third-party services"
      ],
      technologies: ["JavaScript", "React", "Node.js", "MongoDB", "SQL"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Beaconhouse National University",
      duration: "2023 - Present",
      description: "Studying Computer Science with focus on Software Engineering, Web Development, and Database Systems.",
      highlights: [
        "Relevant Coursework: Data Structures, Algorithms, Web Development, Database Systems",
        "Active participation in coding competitions and hackathons",
        "Strong foundation in programming fundamentals"
      ]
    }
  ],

  certifications: [
    {
      name: "Full-Stack Web Development",
      issuer: "Online Course Platform",
      date: "2023",
      credential: "#"
    },
    {
      name: "React - The Complete Guide",
      issuer: "Udemy",
      date: "2023",
      credential: "#"
    },
    {
      name: "Node.js Backend Development",
      issuer: "Online Course Platform",
      date: "2023",
      credential: "#"
    }
  ]
};
