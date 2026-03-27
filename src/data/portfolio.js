export const portfolioData = {
  about: {
    name: "Sibam Prasad Sahoo",
    title: ["AI & ML Engineer", "Hackathon Builder", "Community Founder", "Open Source Contributor"],
    university: "Sri Sri University, Cuttack, Odisha (BTech AI & ML, 2024–2028)",
    email: "sibam.s24btcseai@srisriuniversity.edu.in",

    github: "https://github.com/SIBAM890",
    linkedin: "https://www.linkedin.com/in/sibam-prasad-sahoo/",
    location: "Cuttack, Odisha, India",
    story: "2nd-year AI & ML student obsessed with building tools that actually work. I turn complex tech into seamless end-to-end systems — from fully local AI automation platforms to production tools universities actually use. I've trained at NRSC ISRO, led engineering teams at Zaalima Development, competed in 10+ hackathons including 3 Google-organized events, and I'm founding GDG On Campus at SSU.",
    stats: [
      { label: "Hackathons", value: 10, suffix: "+" },
      { label: "Projects", value: 7, suffix: "" },
      { label: "Internships", value: 4, suffix: "" },
      { label: "CGPA", value: 9.1, suffix: "" }
    ]
  },
  skills: {
    "Languages": ["Python", "C/C++", "Java", "JavaScript"],
    "AI/ML": ["PyTorch", "TensorFlow", "Scikit-Learn", "HuggingFace Transformers", "YOLOv8", "ConvBERT"],
    "NLP": ["BERT", "DistilBERT", "Semantic Search", "RAG Pipelines", "Prompt Engineering"],
    "Backend": ["FastAPI", "Spring Boot", "Node.js"],
    "Frontend": ["React", "React Flow", "Tailwind CSS"],
    "DevOps": ["Docker", "Docker Compose", "Git", "GitHub"],
    "Databases": ["PostgreSQL", "MongoDB", "SQLite", "Redis"],
    "AI Tools": ["Ollama", "Gemini Flash", "Vertex AI", "Firestore"],
    "Other": ["System Design", "Kafka", "WebSockets", "OAuth"]
  },
  projects: [
    {
      name: "AutoFlow OSS",
      description: "No-Code AI Workflow Automation. Plain English → LLM generates visual workflow → deploys on WhatsApp.",
      tags: ["React", "React Flow", "FastAPI", "Ollama", "whatsapp-web.js", "SQLite", "Docker Compose"],
      github: "#", // Add your link
      featured: true,
      buildTime: "48 Hours",
      categoryTags: ["Open Source", "Hackathon", "Local LLM"]
    },
    {
      name: "Vedika",
      description: "RAG AI Chatbot for SSU. Intelligent interface for university queries deployed on the main website.",
      tags: ["Python", "FastAPI", "RAG Pipeline", "Vector Search"],
      github: "#",  
      featured: true,
      buildTime: "1 Week",
      categoryTags: ["Production", "University Tool"]
    },
    {
      name: "Pluxee",
      description: "Student Digital Wallet. Production fintech tool actively used on campus for mess fees.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "#", 
      featured: false,
      buildTime: "3 Weeks",
      categoryTags: ["Production", "Fintech"]
    },
    {
      name: "SOS Portal",
      description: "Real-time student support system where any campus need is fulfilled within minutes.",
      tags: ["React", "Firebase", "Node.js", "WebSockets"],
      github: "#", 
      featured: false,
      buildTime: "5 Days",
      categoryTags: ["Production", "Community Tool"]
    },
    {
      name: "VaaniVault",
      description: "AI Oral Heritage Preservation. Offline-first PWA with real-time transcription and semantic search.",
      tags: ["Python", "Vertex AI", "Firestore", "Cloud Run"],
      github: "#", 
      featured: false,
      buildTime: "2 Weeks",
      categoryTags: ["AI", "Cloud", "Cultural Tech"]
    },
    {
      name: "HireLence",
      description: "AI Hiring Intelligence. Resume evaluation, skill matched scoring, and automated follow-ups.",
      tags: ["Python", "FastAPI", "HuggingFace", "Embeddings"],
      github: "#", 
      featured: false,
      buildTime: "2 Weeks",
      categoryTags: ["AI", "SaaS"]
    },
    {
      name: "LawGeeks Pro",
      description: "AI Legal Document Analysis. Summarization and risk scoring using sub-30s vector search pipelines.",
      tags: ["Python", "FastAPI", "LLMs", "Vector Search"],
      github: "#",
      featured: false,
      buildTime: "10 Days",
      categoryTags: ["AI", "LegalTech"]
    }
  ],
  experience: [
    {
      role: "Integration Architect",
      company: "Zaalima Development Pvt. Ltd.",
      duration: "Feb 2026 – Mar 2026 | Bangalore",
      achievements: [
        "Led 4-person engineering team building ShopScale Fabric, an event-driven microservices marketplace.",
        "Implemented backend using Java 21, Spring Boot 3.3, and Kafka for robust messaging.",
        "Managed database ecosystems combining PostgreSQL, MongoDB, and Redis within Docker."
      ]
    },
    {
      role: "Geospatial Trainee",
      company: "NRSC, ISRO",
      duration: "March 2026 | Hyderabad",
      achievements: [
        "Selected as 1 of 40 nationwide participants for Bhuvan Overview Training Programme.",
        "Gained hands-on experience in satellite data visualization, geospatial APIs, and remote sensing.",
        "Focused on applications for governance and disaster management."
      ]
    },
    {
      role: "AI/ML Intern",
      company: "3SKILL",
      duration: "Dec 2025 – Feb 2026 | Bhubaneswar",
      achievements: [
        "Developed machine learning models and refined data preprocessing pipelines.",
        "Optimized ML pipeline tasks to reduce data processing latency and improve accuracy."
      ]
    },
    {
      role: "Backend Development Intern",
      company: "CODEXINTERN",
      duration: "Oct 2025 – Nov 2025",
      achievements: [
        "Authored API endpoints and managed server-side workflows.",
        "Built robust backend fundamentals to support scalable applications."
      ]
    }
  ],
  achievements: [
    { title: "Founding Chapter Lead", description: "GDG On Campus, Sri Sri University (2026)" },
    { title: "Hackathon Veteran", description: "Competed in 10+ hackathons including 3 Google-organized events" },
    { title: "Tech Lead", description: "Tech Manthan (SSU flagship foundation program) & HITA Conference" },
    { title: "Supervisory Team", description: "Smart India Hackathon Grand Finale" },
    { title: "Volunteer Head (Tech)", description: "IBM ICE Day" },
    { title: "National Participant", description: "Navomesh (SDG Week innovation showcase)" }
  ]
};
