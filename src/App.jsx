import React from "react";
import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Shield, 
  Brain, 
  Database, 
  Code2, 
  GraduationCap, 
  Award, 
  Briefcase, 
  Globe,
  MapPin,
  Calendar,
  Star,
  ChevronRight,
  Download,
  ArrowUp
} from "lucide-react";

// ----------
// DATA MODEL (Enhanced with more details)
// ----------
const data = {
  name: "Betserai Albert (Albert) Magarire",
  title: "Computer Science • Software Engineering • Data Science • Cybersecurity",
  location: "Greenwood, SC, USA",
  contacts: {
    email: "albertmagarire@gmail.com",
    phone: "+1 (662) 924-9008",
    github: "https://github.com/albert-magarire",
    linkedin: "https://linkedin.com/in/betserai-albert-magarire"
  },
  summary:
    "Experienced software engineer and data scientist specializing in full-stack development, machine learning, and cybersecurity. Proven expertise in architecting scalable systems, implementing AI/ML solutions, and developing secure applications across diverse technology stacks. Demonstrated ability to lead cross-functional teams, optimize system performance, and deliver innovative solutions that drive measurable business impact.",
  education: [
    {
      school: "Lander University",
      degrees: [
        "B.S., Computer Information Systems (Software Development)",
        "B.S., Data Science (double major)"
      ],
      gpa: "3.93/4.00",
      honors: [
        "President's List (multiple terms)",
        "Dean's List",
        "Goldman Sachs ELS Scholar",
        "Google Scholar",
        "Yale Young Global Scholar",
        "CodePath Technical Interview Prep Certification",
        "Google Cybersecurity Specialization",
        "FTMO Certified Trader"
      ],
      certifications: [
        "Google Cybersecurity Specialization (Coursera)",
        "Advanced Django Project Development (LinkedIn)",
        "Machine Learning with Python Foundations (LinkedIn)",
        "Python Data Analysis (LinkedIn)",
        "Building RESTful Web APIs with Django (LinkedIn)",
        "CodePath Technical Interview Prep",
        "FTMO Challenge Completion",
        "Yale Young Global Scholars Ambassador"
      ],
      inProgress: [
        "CIS 335 Computer Organization & Architecture",
        "DSCI 330 Big Data Analysis",
        "MATH 213 Supervised Machine Learning",
        "MATH 214 Unsupervised Machine Learning",
        "HONS 211 Honors Topics in Humanities",
        "POLS 101 American National Government"
      ]
    }
  ],
  experience: [
    {
      role: "Change Management Analyst",
      company: "Goldman Sachs",
      location: "Dallas, TX",
      dates: "Jun 2025 – Aug 2025",
      type: "Internship",
      bullets: [
        "Architected and executed enterprise-wide migration from Confluence to JIRA using advanced JIRA Query Language (JQL) for comprehensive project tracking and workflow optimization.",
        "Led cross-functional engineering teams as Scrum Master, implementing Agile methodologies and facilitating daily stand-ups to accelerate development cycles and improve team velocity.",
        "Conducted comprehensive gap/overlap analysis in securitization functions, identifying inefficiencies and implementing streamlined processes that enhanced operational efficiency by 25%."
      ]
    },
    {
      role: "Technical Lead",
      company: "Lime Connect",
      location: "Remote, USA",
      dates: "Nov 2024 – Feb 2025",
      type: "Contract",
      bullets: [
        "Orchestrated technical infrastructure for 'In the Limelight' video contest, managing end-to-end production pipeline for 120+ high-quality content deliverables.",
        "Collaborated with creative, production, and marketing teams to architect technical solutions aligned with project objectives and brand requirements.",
        "Implemented innovative technical strategies and best practices, resulting in enhanced production workflows and improved content quality standards."
      ]
    },
    {
      role: "Student Researcher (AI & Systems)",
      company: "Lander University",
      location: "Greenwood, SC",
      dates: "Jan 2024 – Present",
      type: "Research",
      bullets: [
        "Conducted advanced research on Generative AI applications in healthcare, focusing on bias detection and mitigation in NLP model training using 2D CNN architectures.",
        "Developed comprehensive data pipeline for processing unstructured healthcare data, implementing feature extraction algorithms and training deep learning models with 91% accuracy.",
        "Architected AI-powered campus assistant using Flutter, AWS serverless infrastructure, and OpenAI API integration, reducing navigation time by 40% and automating 80% of routine queries."
      ]
    },
    {
      role: "Peer Student Tutor",
      company: "Lander University",
      location: "Greenwood, SC",
      dates: "Apr 2024 – May 2025",
      type: "Part-time",
      bullets: [
        "Delivered comprehensive tutoring services across multiple disciplines including Calculus, Chemistry, and Python Programming, employing adaptive teaching methodologies tailored to individual learning styles.",
        "Developed and implemented supplementary instructional materials and assessment strategies, resulting in improved student comprehension and academic performance.",
        "Collaborated with faculty to identify knowledge gaps and create targeted intervention programs, fostering academic success across diverse student populations."
      ]
    },
    {
      role: "Registrar's Office Associate",
      company: "Lander University",
      location: "Greenwood, SC",
      dates: "Apr 2024 – May 2025",
      type: "Part-time",
      bullets: [
        "Managed front-line operations for student services, handling complex inquiries related to academic records, registration, and administrative processes while maintaining strict FERPA compliance.",
        "Optimized data management workflows using university software systems, ensuring accuracy and confidentiality of student records and administrative documentation.",
        "Coordinated critical university events including course registration and graduation ceremonies, contributing to seamless operational execution and enhanced student experience."
      ]
    },
    {
      role: "Freelance Software Developer",
      company: "Spacetime Inc.",
      location: "Glendale, Zimbabwe",
      dates: "Jun 2020 – Jun 2023",
      type: "Full-time",
      bullets: [
        "Established and led full-stack software development startup, architecting scalable solutions across mobile, desktop, and web platforms using diverse technology stacks including React.js, Django, Spring Boot, and .NET Core.",
        "Developed comprehensive Learning Management System with real-time video conferencing capabilities using WebSockets, React.js, and PHP/MySQL backend infrastructure.",
        "Engineered GPS-based navigation application with advanced routing algorithms (Dijkstra's, A*), integrating Google Maps API, geocoding services, and real-time traffic data for optimized route calculation."
      ]
    },
    {
      role: "Foreign Exchange Trader",
      company: "FTMO",
      location: "Remote, Zimbabwe",
      dates: "Apr 2023 – Jun 2023",
      type: "Full-time",
      bullets: [
        "Executed sophisticated forex trading strategies focusing on EUR/USD and XAU/USD currency pairs, implementing advanced risk management protocols and trend forecasting algorithms.",
        "Achieved FTMO certification through rigorous evaluation process, demonstrating proficiency in financial risk assessment and quantitative analysis methodologies."
      ]
    },
    {
      role: "YYGS Ambassador",
      company: "Yale Young Global Scholars",
      location: "Connecticut, USA",
      dates: "Nov 2023 – May 2024",
      type: "Internship",
      bullets: [
        "Led outreach initiatives for YYGS and YYAS programs across Zimbabwe and Africa, building digital platforms and social networking infrastructure to connect students with educational opportunities.",
        "Developed and maintained online communities through video conferencing and group chat platforms, facilitating information dissemination and program engagement for future leaders."
      ]
    }
  ],
  projects: [
    {
      name: "Conversation Intelligence System",
      stack: ["Python", "Flask", "Whisper", "Pyannote", "ReportLab"],
      blurb:
        "Advanced AI pipeline implementing speaker diarization, speech-to-text transcription, and automated report generation. Achieved 92% transcription accuracy on 30+ minute conversations with intelligent Q&A extraction and PDF report automation, reducing manual documentation by 70%.",
      links: [{ label: "GitHub", href: "https://github.com/albert-magarire" }],
      tags: ["AI/ML", "NLP", "Data Science"],
      featured: true
    },
    {
      name: "Mutual Fund Calculator",
      stack: ["React", "Node.js", "Express", "Flask"],
      blurb:
        "Sophisticated financial modeling application implementing CAPM methodology with real-time data integration from FRED and Newton Analytics APIs. Features dynamic beta calculations, S&P rate analysis, and interactive portfolio projections with comprehensive risk assessment algorithms.",
      links: [
        { label: "GitHub (Team)", href: "https://github.com/adithiteligi/Goldman-Technical-Project" }
      ],
      tags: ["Software Engineering", "FinTech"],
      featured: true
    },
    {
      name: "Lander AI Assistant",
      stack: ["Flutter", "Dart", "Firebase", "AWS"],
      blurb:
        "Intelligent campus navigation system leveraging AWS serverless architecture and OpenAI API integration. Implements advanced NLP processing, voice recognition, and automated query resolution, reducing campus navigation time by 40% and handling 80% of routine inquiries autonomously.",
      links: [
        { label: "Overview", href: "https://github.com/albert-magarire" },
      ],
      tags: ["Mobile", "AI/ML", "Full‑Stack"],
      featured: true
    },
    {
      name: "Abacus Learning Management System",
      stack: ["PHP", "React.js", "MySQL", "WebSockets"],
      blurb: "Comprehensive e-learning platform with real-time video conferencing capabilities, collaborative group chat features, and multi-media resource management. Successfully deployed during COVID-19 lockdowns, supporting seamless remote education delivery.",
      links: [{ label: "Repo", href: "https://github.com/albert-magarire" }],
      tags: ["Web", "E-learning", "Real-time"],
      featured: true
    },
    {
      name: "Geolocator Navigation App",
      stack: ["React Native", "Google Maps API", "TomTom Traffic"],
      blurb:
        "Advanced GPS navigation application implementing Dijkstra's and A* pathfinding algorithms with real-time traffic optimization. Features geocoding APIs, geofencing capabilities using GeoJSON, and intelligent route calculation for enhanced navigation efficiency.",
      links: [{ label: "Overview", href: "https://github.com/albert-magarire" }],
      tags: ["Mobile", "Algorithms", "Systems"],
      featured: true
    },
    {
      name: "Boss Cafe Point-of-Sale System",
      stack: ["VB.Net", "Microsoft Access", "SQL"],
      blurb:
        "Enterprise-grade POS system with comprehensive sales management, automated tax calculations, receipt printing, and employee assessment modules. Implemented secure database architecture and optimized workflow processes, resolving 93% of operational challenges.",
      links: [{ label: "Repo", href: "https://github.com/albert-magarire" }],
      tags: ["Desktop", "Database", "Business Logic"],
      featured: false
    },
    {
      name: "Cyber Threat-Hunting Framework",
      stack: ["Splunk", "MISP", "Python", "SIEM"],
      blurb:
        "Advanced cybersecurity investigation framework for SolarWinds IOC analysis. Implements SIEM correlation, threat intelligence enrichment, and automated hunt playbooks for detecting and mitigating advanced persistent threats with comprehensive reporting capabilities.",
      links: [{ label: "Overview", href: "https://github.com/albert-magarire" }],
      tags: ["Cybersecurity", "Threat Hunting"],
      featured: false
    },
    {
      name: "ReactJS Flashcard Application",
      stack: ["React.js", "JavaScript", "Local Storage"],
      blurb:
        "Interactive learning platform implementing spaced repetition algorithms and adaptive learning techniques. Features dynamic content management, progress tracking, and personalized study sessions optimized for knowledge retention and academic performance.",
      links: [{ label: "GitHub", href: "https://github.com/albert-magarire" }],
      tags: ["Web", "Education", "React"],
      featured: false
    },
    {
      name: "The Citizen Journalist Platform",
      stack: ["Web Technologies", "Content Management"],
      blurb:
        "Web-based citizen journalism platform enabling community-driven news reporting and information dissemination. Implements user authentication, content moderation, and collaborative publishing workflows for democratic information sharing.",
      links: [{ label: "Overview", href: "https://github.com/albert-magarire" }],
      tags: ["Web", "Social Media", "Content"],
      featured: false
    }
  ],
  skills: {
    languages: [
      "Python (Django, Flask, TensorFlow, PyTorch, Pandas, NumPy, Scikit-learn)",
      "JavaScript (React.js, Node.js, Express.js, Angular, jQuery)",
      "Java (Spring Boot, J2EE, Android Development)",
      "C/C++ (System Programming, Algorithm Implementation)",
      "PHP (Laravel, CodeIgniter, WordPress)",
      "SQL (PostgreSQL, MySQL, SQLite, Query Optimization)",
      "VB.Net (.NET Framework, Desktop Applications)",
      "Dart (Flutter, Cross-platform Mobile Development)"
    ],
    platforms: [
      "Cloud Platforms: AWS (EC2, S3, Lambda, DynamoDB, Amplify, Textract)",
      "Containerization: Docker, Kubernetes, Microservices Architecture",
      "Databases: PostgreSQL, MongoDB, MySQL, Redis, Database Design",
      "DevOps: Git/GitHub, CI/CD Pipelines, Linux Administration",
      "Cybersecurity: Splunk, Wireshark, SIEM, Threat Hunting, MISP",
      "Project Management: Jira, Agile/Scrum, Confluence",
      "APIs: RESTful Services, GraphQL, WebSocket Implementation"
    ],
    soft: [
      "Technical Leadership", "Cross-functional Collaboration", "Strategic Problem Solving",
      "Agile Project Management", "Mentoring & Training", "Stakeholder Communication",
      "Risk Assessment", "Process Optimization", "Innovation & Research"
    ]
  }
};

// ----------
// ENHANCED UI COMPONENTS
// ----------
const Section = ({ id, icon: Icon, title, children, className = "" }) => (
  <section id={id} className={`scroll-mt-24 ${className}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="flex items-center gap-4 mb-12">
        <div className="p-3 rounded-2xl shadow-lg glass-effect">
          <Icon className="w-6 h-6 text-blue-600" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight gradient-text">{title}</h2>
      </div>
      {children}
    </motion.div>
  </section>
);

const Badge = ({ children, variant = "default" }) => {
  const variants = {
    default: "inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700",
    success: "inline-flex items-center rounded-full border border-green-200 px-3 py-1 text-xs font-medium bg-green-50 text-green-700",
    warning: "inline-flex items-center rounded-full border border-yellow-200 px-3 py-1 text-xs font-medium bg-yellow-50 text-yellow-700",
    featured: "inline-flex items-center rounded-full border border-purple-200 px-3 py-1 text-xs font-medium bg-purple-50 text-purple-700"
  };
  
  return (
    <span className={variants[variant]}>
      {children}
    </span>
  );
};

const Card = ({ children, className = "", hover = true }) => (
  <motion.div
    whileHover={hover ? { y: -4, scale: 1.02 } : {}}
    transition={{ duration: 0.2 }}
    className={`rounded-2xl border shadow-lg p-6 glass-effect hover-lift ${className}`}
  >
    {children}
  </motion.div>
);

const FloatingActionButton = ({ onClick, children }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors z-50"
  >
    {children}
  </motion.button>
);

// ----------
// MAIN PORTFOLIO COMPONENT
// ----------
export default function Portfolio() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 text-slate-900">
      {/* Enhanced Navigation */}
      <header className="sticky top-0 z-40 glass-effect border-b border-white/20">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <motion.a 
            href="#home" 
            className="font-bold text-xl tracking-tight gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            Albert Magarire
          </motion.a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
            <a href="#education" className="hover:text-blue-600 transition-colors">Education</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <motion.a 
              aria-label="GitHub" 
              href={data.contacts.github} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-lg border border-white/20 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a 
              aria-label="LinkedIn" 
              href={data.contacts.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-lg border border-white/20 hover:shadow-lg transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </nav>
      </header>

      {/* Enhanced Hero Section */}
      <section id="home" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                <span className="gradient-text">{data.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 mb-6">{data.title}</p>
              <p className="text-lg leading-relaxed text-slate-700 mb-8 max-w-3xl">{data.summary}</p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <Badge variant="featured">
                  <Code2 className="w-4 h-4 mr-2"/>Software Engineering
                </Badge>
                <Badge variant="success">
                  <Brain className="w-4 h-4 mr-2"/>Data Science / AI
                </Badge>
                <Badge variant="warning">
                  <Shield className="w-4 h-4 mr-2"/>Cybersecurity
                </Badge>
                <Badge>
                  <Database className="w-4 h-4 mr-2"/>Systems & Data
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <motion.a 
                  href={`mailto:${data.contacts.email}`} 
                  className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-6 py-3 hover:shadow-lg transition-all glass-effect"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5"/> {data.contacts.email}
                </motion.a>
                <motion.a 
                  href={`tel:${data.contacts.phone}`} 
                  className="inline-flex items-center gap-3 rounded-xl border border-white/20 px-6 py-3 hover:shadow-lg transition-all glass-effect"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5"/> {data.contacts.phone}
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-100">
                    <GraduationCap className="w-6 h-6 text-blue-600"/>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{data.education[0].school}</div>
                    <div className="text-sm text-slate-600">Dual Degree Program</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-slate-700 mb-2">GPA: <span className="font-semibold text-green-600">{data.education[0].gpa}</span></div>
                  <div className="text-sm text-slate-600">President's & Dean's Lists</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.education[0].honors.slice(0,3).map((h) => (
                    <Badge key={h} variant="success">
                      <Award className="w-3 h-3 mr-1"/>{h}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Experience Section */}
      <Section id="experience" icon={Briefcase} title="Professional Experience">
        <div className="grid lg:grid-cols-2 gap-6">
          {data.experience.map((job, index) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-lg">{job.role}</h3>
                      <Badge variant={job.type === 'Internship' ? 'warning' : job.type === 'Research' ? 'success' : 'default'}>
                        {job.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 mb-2">
                      <span className="font-medium">{job.company}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4"/>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Calendar className="w-4 h-4"/>
                    <span>{job.dates}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                      <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0"/>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Enhanced Projects Section */}
      <Section id="projects" icon={Globe} title="Featured Projects">
        <div className="grid lg:grid-cols-2 gap-6">
          {data.projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-lg">{project.name}</h3>
                      <Star className="w-4 h-4 text-yellow-500 fill-current"/>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="featured">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-700 mb-4">{project.blurb}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.links?.map((link) => (
                    <motion.a 
                      key={link.href} 
                      href={link.href} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg border border-white/20 hover:shadow-lg transition-all glass-effect"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4"/> {link.label}
                    </motion.a>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Additional Projects */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6 gradient-text">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <h4 className="font-semibold mb-2">{project.name}</h4>
                  <p className="text-sm text-slate-600 mb-3">{project.blurb}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  {project.links?.map((link) => (
                    <motion.a 
                      key={link.href} 
                      href={link.href} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded-lg border border-white/20 hover:shadow transition-all"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLink className="w-3 h-3"/> {link.label}
                    </motion.a>
                  ))}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Enhanced Skills Section */}
      <Section id="skills" icon={Code2} title="Technical Skills">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100">
                <Code2 className="w-5 h-5 text-blue-600"/>
              </div>
              <h3 className="font-bold text-lg">Languages & Frameworks</h3>
            </div>
            <ul className="space-y-2">
              {data.skills.languages.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-slate-700">
                  <ChevronRight className="w-3 h-3 text-blue-500"/>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100">
                <Database className="w-5 h-5 text-green-600"/>
              </div>
              <h3 className="font-bold text-lg">Platforms & Tools</h3>
            </div>
            <ul className="space-y-2">
              {data.skills.platforms.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-slate-700">
                  <ChevronRight className="w-3 h-3 text-green-500"/>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-purple-100">
                <Brain className="w-5 h-5 text-purple-600"/>
              </div>
              <h3 className="font-bold text-lg">Soft Skills</h3>
            </div>
            <ul className="space-y-2">
              {data.skills.soft.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-slate-700">
                  <ChevronRight className="w-3 h-3 text-purple-500"/>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Enhanced Education Section */}
      <Section id="education" icon={GraduationCap} title="Education">
        {data.education.map((edu) => (
          <Card key={edu.school}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
              <div>
                <h3 className="font-bold text-2xl mb-2">{edu.school}</h3>
                <div className="text-lg text-slate-600 mb-2">{edu.degrees.join(" • ")}</div>
                <div className="text-sm text-slate-500">GPA: <span className="font-semibold text-green-600">{edu.gpa}</span></div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4"/>Current Courses
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.inProgress.map((course) => (
                    <Badge key={course}>{course}</Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4"/>Honors & Awards
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.honors.map((honor) => (
                    <Badge key={honor} variant="success">{honor}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Shield className="w-4 h-4"/>Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.certifications?.map((cert) => (
                    <Badge key={cert} variant="featured">{cert}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </Section>

      {/* Enhanced Contact Section */}
      <Section id="contact" icon={Mail} title="Let's Connect">
        <Card>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Build Something Amazing?</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, collaborate on innovative projects, 
              or simply connect with fellow tech enthusiasts. Let's create something impactful together!
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.a 
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-white/20 hover:shadow-lg transition-all glass-effect"
              href={`mailto:${data.contacts.email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-8 h-8 text-blue-600"/>
              <span className="font-medium">Email</span>
              <span className="text-sm text-slate-600 text-center">{data.contacts.email}</span>
            </motion.a>
            
            <motion.a 
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-white/20 hover:shadow-lg transition-all glass-effect"
              href={`tel:${data.contacts.phone}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-8 h-8 text-green-600"/>
              <span className="font-medium">Phone</span>
              <span className="text-sm text-slate-600">{data.contacts.phone}</span>
            </motion.a>
            
            <motion.a 
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-white/20 hover:shadow-lg transition-all glass-effect"
              href={data.contacts.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-8 h-8 text-slate-600"/>
              <span className="font-medium">GitHub</span>
              <span className="text-sm text-slate-600">@albert-magarire</span>
            </motion.a>
            
            <motion.a 
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-white/20 hover:shadow-lg transition-all glass-effect"
              href={data.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-8 h-8 text-blue-700"/>
              <span className="font-medium">LinkedIn</span>
              <span className="text-sm text-slate-600">Connect with me</span>
            </motion.a>
          </div>
        </Card>
      </Section>

      {/* Footer */}
      <footer className="py-12 text-center text-sm text-slate-500 border-t border-white/20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-4">
            © {new Date().getFullYear()} {data.name}. Built with React, Framer Motion & Tailwind CSS.
          </p>
          <p className="text-xs">
            Designed and developed with ❤️ for the tech community
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <FloatingActionButton onClick={scrollToTop}>
        <ArrowUp className="w-6 h-6" />
      </FloatingActionButton>
    </div>
  );
}
