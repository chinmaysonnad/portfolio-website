/**
 * Portfolio Central Configuration File
 * Customized for Chinmay S Sonnad
 */

const PORTFOLIO_CONFIG = {
  profile: {
    name: "Chinmay S Sonnad",
    age: 20,
    roleTitle: "CS Engineering Student & Web Developer",
    tagline: "Computer Science student at KLS GIT, building modern web apps & exploring Cybersecurity.",
    statusText: "Seeking Internships & Security Opportunities",
    statusAvailable: true,
    location: "Belagavi, Karnataka, India",
    college: "KLS Gogte Institute of Technology, Belagavi",
    degree: "B.E. in Computer Science & Engineering (Class of 2028)",
    email: "chinmaysonnad06@gmail.com",
    avatar: "",
    bio: "Passionate 3rd-year Computer Science & Engineering student at KLS Gogte Institute of Technology. Driven by continuous learning, hands-on web development with Python, Django, and Node.js, and an active interest in Cybersecurity. Energetic team player interested in sports, coding, and social activities.",
    yearsExperience: "3rd Year CSE",
    completedProjects: 8,
    codeCommitsMonth: 75,
    clientSatisfaction: "100%",
    resumeUrl: "#contact"
  },
  
  socials: [
    { name: "Email", icon: "mail", url: "mailto:chinmaysonnad06@gmail.com" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/chinmay-sonnad-8765a0357" },
    { name: "GitHub", icon: "github", url: "https://github.com/chinmaysonnad" },
    { name: "LeetCode", icon: "code", url: "https://leetcode.com/u/chinmay_sonnad09/" },
    { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/chinmay_sonnad?igsh=MTRkMHN3dzVyY3ducA==" },
    { name: "WhatsApp", icon: "message-circle", url: "https://wa.me/919916031967" }
  ],

  techFlashcards: [
    {
      name: "HTML5",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      description: "Web Structure"
    },
    {
      name: "CSS3",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      description: "Responsive UI"
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      description: "Client ES6+"
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      url: "https://www.python.org/",
      description: "Backend Logic"
    },
    {
      name: "Django",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
      url: "https://www.djangoproject.com/",
      description: "Web Framework"
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      url: "https://nodejs.org/",
      description: "Async Runtime"
    },
    {
      name: "C",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      url: "https://en.cppreference.com/w/c",
      description: "System Logic"
    },
    {
      name: "C++",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      url: "https://isocpp.org/",
      description: "OOP & DSA"
    },
    {
      name: "PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      url: "https://www.php.net/",
      description: "Server Scripts"
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      url: "https://git-scm.com/",
      description: "Version Control"
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      url: "https://github.com/",
      description: "Code Hosting"
    }
  ],

  skillsCategories: [
    {
      id: "frontend",
      title: "Frontend & UI Design",
      icon: "layout",
      skills: [
        { name: "HTML5 & Semantic Markup", level: 92, badge: "Advanced" },
        { name: "CSS3 & Modern Styling", level: 88, badge: "Advanced" },
        { name: "JavaScript (ES6+)", level: 85, badge: "Proficient" },
        { name: "Responsive Web Design", level: 90, badge: "Advanced" }
      ]
    },
    {
      id: "backend",
      title: "Backend & Frameworks",
      icon: "server",
      skills: [
        { name: "Python", level: 88, badge: "Advanced" },
        { name: "Django Framework", level: 82, badge: "Proficient" },
        { name: "Node.js & Express", level: 80, badge: "Proficient" },
        { name: "RESTful APIs & Databases", level: 78, badge: "Intermediate" }
      ]
    },
    {
      id: "cs_security",
      title: "Problem Solving & Cybersecurity",
      icon: "shield",
      skills: [
        { name: "Data Structures & Algorithms", level: 80, badge: "Proficient" },
        { name: "LeetCode Problem Solving", level: 82, badge: "Active" },
        { name: "Cybersecurity Fundamentals", level: 75, badge: "Exploring" },
        { name: "Git & Version Control", level: 85, badge: "Proficient" }
      ]
    }
  ],

  projects: [
    {
      id: "django-web-app",
      title: "Django Full-Stack Web Portal",
      category: "fullstack",
      categoryName: "Full Stack",
      image: "assets/images/project-ai-dashboard.jpg",
      description: "Responsive Django web application featuring user authentication, database management, and custom REST API endpoints.",
      longDescription: "Built with Django, Python, HTML/CSS, and PostgreSQL. Includes secure user authentication, role-based dashboards, data filtering, and automated form processing.",
      techStack: ["Python", "Django", "JavaScript", "HTML/CSS", "SQLite/PostgreSQL"],
      liveDemo: "https://github.com/chinmaysonnad",
      github: "https://github.com/chinmaysonnad",
      featured: true,
      stats: { framework: "Django 5.0", security: "Role Auth", status: "Active" }
    },
    {
      id: "cyber-sec-tool",
      title: "Network Security & Vulnerability Inspector",
      category: "ai",
      categoryName: "Cybersecurity",
      image: "assets/images/project-devtools.jpg",
      description: "Python-based security script designed to audit open network ports and inspect header configurations for vulnerabilities.",
      longDescription: "Automated network scanner script leveraging Python socket and requests libraries to perform port discovery, HTTP security header analysis, and log generation.",
      techStack: ["Python", "Sockets", "Cybersecurity", "Linux", "Networking"],
      liveDemo: "https://github.com/chinmaysonnad",
      github: "https://github.com/chinmaysonnad",
      featured: true,
      stats: { type: "Security Tool", language: "Python 3", auditMode: "Fast Scan" }
    },
    {
      id: "node-js-api",
      title: "Node.js & Express Microservice API",
      category: "web",
      categoryName: "Backend API",
      image: "assets/images/project-ecommerce.jpg",
      description: "Lightweight Node.js backend providing JSON API routes for dynamic frontend consumption and asynchronous data handling.",
      longDescription: "High-performance Node.js & Express server with structured routes, CORS middleware, environment config management, and JSON validation.",
      techStack: ["Node.js", "Express.js", "JavaScript", "REST API", "JSON"],
      liveDemo: "https://github.com/chinmaysonnad",
      github: "https://github.com/chinmaysonnad",
      featured: true,
      stats: { runtime: "Node v20", architecture: "RESTful", latency: "< 20ms" }
    }
  ],

  certificates: [
    {
      id: "cert-tcs-techbytes",
      title: "TCS TechBytes Regional Tech Quiz (2nd Place)",
      issuer: "Tata Consultancy Services (TCS) & BITES",
      date: "2026",
      credentialId: "TCS-TECHBYTES-2ND-2026",
      image: "assets/images/techbytes.jpeg",
      link: "assets/images/techbytes.jpeg",
      description: "Second Place (2nd Winner) certificate awarded for securing 2nd Rank in the prestigious TCS TechBytes Regional Inter-College Technical Quiz Competition conducted by TCS.",
      skills: ["2nd Place Winner", "TCS TechBytes", "Technical Quiz", "IT & CS Fundamentals", "Regional Competition"]
    },
    {
      id: "cert-avalanche-hackathon-2025",
      title: "Avalanche 2025 Hackathon",
      issuer: "KLS Gogte Institute of Technology, Belagavi",
      date: "2025",
      credentialId: "AVALANCHE-HACK-2025",
      image: "assets/images/avalanche hackthaon 2025.jpeg",
      link: "assets/images/avalanche hackthaon 2025.jpeg",
      description: "Certificate of Participation awarded for competing in the Avalanche 2025 Hackathon, developing technical solutions and software prototypes under time constraints.",
      skills: ["Hackathon", "Web Development", "Rapid Prototyping", "KLS GIT"]
    },
    {
      id: "cert-secret-signal",
      title: "Secret Signal Tech Treasure Hunt & Quiz (1st Place)",
      issuer: "Avalanche 2025 Techfest - KLS GIT",
      date: "2025",
      credentialId: "SECRET-SIGNAL-1ST-2025",
      image: "assets/images/secret signal.jpeg",
      link: "assets/images/secret signal.jpeg",
      description: "First Place (1st Winner) certificate awarded for securing 1st rank in the 'Secret Signal' Tech Treasure Hunt & Technical Quiz Competition at Avalanche 2025 Techfest.",
      skills: ["1st Place Winner", "Tech Treasure Hunt", "Technical Quiz", "Logic & Security", "KLS GIT"]
    },
    {
      id: "cert-cpp-skill-lab",
      title: "C++ Skill Lab Certification 2025",
      issuer: "KLS Gogte Institute of Technology, Belagavi",
      date: "2025",
      credentialId: "KLSGIT-CPP-SKILL-2025",
      image: "assets/images/skill lab c++.jpeg",
      link: "assets/images/skill lab c++.jpeg",
      description: "Certificate of Completion awarded for successfully participating in the C++ Skill Lab 2025 conducted by KLS GIT, demonstrating proficiency in Object-Oriented Programming and Data Structures.",
      skills: ["C++", "Object-Oriented Programming", "Data Structures & Algorithms", "KLS GIT"]
    },
    {
      id: "cert-iit-madras-dirv",
      title: "Digital India RISC-V (DIR-V) Symposium 2025",
      issuer: "IIT Madras & MeitY, Govt of India",
      date: "2025",
      credentialId: "IITM-DIRV-2025",
      image: "assets/images/IIT madras.jpg",
      link: "assets/images/IIT madras.jpg",
      description: "Certificate of Participation awarded for attending the Digital India RISC-V (DIR-V) Symposium 2025 organized at IIT Madras, focusing on semiconductor innovation and open hardware.",
      skills: ["RISC-V", "Semiconductor Architecture", "IIT Madras", "Hardware Tech"]
    },
    {
      id: "cert-make-in-git",
      title: "Make In GIT - Innovation of Ideas Event",
      issuer: "KLS Gogte Institute of Technology, Belagavi",
      date: "2025",
      credentialId: "MAKE-IN-GIT-2025",
      image: "assets/images/Make_In_GIT.jpeg",
      link: "assets/images/Make_In_GIT.jpeg",
      description: "Certificate of Participation & Innovation awarded for presenting technical ideas and engineering solutions at the Make In GIT event.",
      skills: ["Innovation", "Idea Presentation", "Technical Problem Solving", "KLS GIT"]
    },
    {
      id: "cert-student-leadership",
      title: "Student Leadership Program",
      issuer: "IEEE Student Branch Club",
      date: "2026",
      credentialId: "IEEE-SLP-2026",
      image: "assets/images/student leadership program.jpeg",
      link: "assets/images/student leadership program.jpeg",
      description: "Certification awarded by IEEE Student Branch Club for outstanding student leadership, team management, and collaborative problem-solving skills.",
      skills: ["Student Leadership", "Teamwork", "Event Management", "IEEE Student Branch"]
    },
    {
      id: "cert-avalanche-hackathon",
      title: "Avalanche 2024 Hackathon - Round 3 Finalist",
      issuer: "KLS Gogte Institute of Technology, Belagavi",
      date: "2024",
      credentialId: "AVALANCHE-HACK-2024",
      image: "assets/images/avalnche 2024 hackthaon.jpg",
      link: "assets/images/avalnche 2024 hackthaon.jpg",
      description: "Certificate awarded for competing in the Avalanche 2024 College Hackathon and qualifying up to Round 3 in the Web Development track.",
      skills: ["Web Development", "Hackathon Finalist", "Algorithmic Problem Solving", "KLS GIT"]
    },
    {
      id: "cert-astronomy-camp",
      title: "Astronomy Exposure Camp - Model Making",
      issuer: "Astronomy & Science Exposure Association",
      date: "2024",
      credentialId: "ASTRONOMY-CAMP-2024",
      image: "assets/images/Astronomy Exposure camp.jpeg",
      link: "assets/images/Astronomy Exposure camp.jpeg",
      description: "Certificate awarded for participating and constructing engineering models in the Astronomy Model Making Competition during the Astronomy Exposure Camp 2024.",
      skills: ["Astronomy", "Model Making", "Creative Engineering", "Science & Physics"]
    }
  ],

  experience: [
    {
      period: "2024 - 2028 (EXPECTED)",
      role: "B.E. Computer Science & Engineering",
      company: "KLS Gogte Institute of Technology, Belagavi",
      description: "Currently in 3rd year. Focusing on core Computer Science subjects including Operating Systems, Database Management Systems, Networks, and Web Development.",
      highlights: ["3rd Year CSE Undergraduate", "Active participant in college tech & sports activities", "Focusing on Full-Stack & Cybersecurity"]
    }
  ],

  testimonials: [],

  terminal: {
    welcomeMessage: "Chinmay's Terminal CLI [v1.0.0]\nType 'help' to see valid commands or click the shortcut buttons below.",
    commands: {
      help: "Available commands:\n  bio          - Overview of Chinmay\n  education    - College & Degree details\n  skills       - Programming languages & tools\n  projects     - Show projects built\n  certs        - View certifications & achievements\n  links        - Social media & GitHub profiles\n  contact      - Send direct message or WhatsApp\n  clear        - Clear screen",
      bio: "Chinmay S Sonnad | Age: 20\n3rd Year BE CSE Student at KLS Gogte Institute of Technology, Belagavi, Karnataka.\nPassionate about Web Development, Python/Django, Node.js, and Cybersecurity.",
      education: "Degree: B.E. in Computer Science & Engineering (2024 - 2028)\nCollege: KLS Gogte Institute of Technology (KLS GIT), Belagavi, Karnataka, India",
      skills: "Web: HTML5, CSS3, JavaScript, Node.js\nBackend: Python, Django, REST APIs\nFocus Areas: Cybersecurity, Data Structures, LeetCode Problem Solving",
      projects: "1. Django Full-Stack Web Portal\n2. Network Security & Vulnerability Inspector\n3. Node.js & Express Microservice API",
      certs: "Certifications:\n1. Make In GIT - Innovation of Ideas Event (KLS GIT)\n2. Cybersecurity & Network Defense Certification\n3. Full-Stack Web Development with Python & Django",
      links: "GitHub: github.com/chinmaysonnad\nLinkedIn: linkedin.com/in/chinmay-sonnad-8765a0357\nLeetCode: leetcode.com/u/chinmay_sonnad09/\nInstagram: instagram.com/chinmay_sonnad",
      contact: "Email: chinmaysonnad06@gmail.com\nWhatsApp: +91 9916031967\nLocation: Belagavi, Karnataka, India\nStatus: Open for Internships & Security Projects!"
    }
  }
};
