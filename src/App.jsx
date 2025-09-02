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
    "I build reliable, secure, and data-driven systems — from ML pipelines and campus-scale assistants to cybersecurity workflows and full‑stack web apps. Passionate about leveraging technology to solve real-world problems and create meaningful impact.",
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
        "Yale Young Global Scholar"
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
      role: "Project Management Analyst",
      company: "Goldman Sachs",
      location: "Dallas, TX",
      dates: "Jun 2025 – Aug 2025",
      type: "Internship",
      bullets: [
        "Led daily stand‑ups and UAT for engineering teams integrating LOOP & MIS using Agile practices.",
        "Consolidated loan securitization workflows; authored process maps and resolved cross‑functional dependencies.",
        "Collaborated with cross-functional teams to streamline project delivery and improve operational efficiency."
      ]
    },
    {
      role: "Technical Program Manager",
      company: "Lime Connect",
      location: "Remote, USA",
      dates: "Sep 2024 – Dec 2024",
      type: "Contract",
      bullets: [
        "Aligned technical solutions with creative, production, and marketing goals across 120+ contest videos.",
        "Resolved technical challenges during content production and uploads.",
        "Managed project timelines and deliverables for high-impact marketing campaigns."
      ]
    },
    {
      role: "Student Researcher (AI & Systems)",
      company: "Lander University",
      location: "Greenwood, SC",
      dates: "Aug 2023 – Present",
      type: "Research",
      bullets: [
        "Built a medical diagnostic chatbot (FastAPI, MongoDB, BioGPT) with follow‑ups and provisional guidance; achieved 91% accuracy on internal test cases.",
        "Created an AI‑powered campus assistant (Flutter, AWS, Ollama) that reduced navigation time by 40% and automated ~80% of routine queries via OpenAI API & web‑scraping over 500+ docs (Textract, BeautifulSoup, Selenium).",
        "Ensured FERPA compliance via serverless AWS architecture (Amplify, DynamoDB)."
      ]
    }
  ],
  projects: [
    {
      name: "Conversation Intelligence System",
      stack: ["Python", "Flask", "Whisper", "Pyannote", "ReportLab"],
      blurb:
        "Full‑stack AI pipeline for 30+ minute conversations: diarization, transcription (~92% on tests), Q&A extraction, and auto‑PDF reporting; reduced manual notes by ~70%.",
      links: [{ label: "GitHub", href: "https://github.com/albert-magarire" }],
      tags: ["AI/ML", "NLP", "Data Science"],
      featured: true
    },
    {
      name: "Mutual Fund Calculator",
      stack: ["React", "Node.js", "Express", "Flask"],
      blurb:
        "CAPM‑backed estimator with external data (FRED, Newton Analytics) for beta and S&P rates; interactive projections with real-time market data integration.",
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
        "Cross‑platform campus assistant: navigation, course tools, events, and NLP; modern Material UI with voice recognition capabilities.",
      links: [
        { label: "Overview", href: "https://github.com/albert-magarire" },
      ],
      tags: ["Mobile", "AI/ML", "Full‑Stack"],
      featured: true
    },
    {
      name: "Virtual Thrift Store",
      stack: ["PHP", "MySQL", "Bootstrap"],
      blurb: "E‑commerce platform for students, faculty, and alumni to buy/sell/donate used goods with secure payment processing and inventory management.",
      links: [{ label: "Repo", href: "https://github.com/albert-magarire/Lander-Thrift-Store" }],
      tags: ["Web", "E‑commerce"],
      featured: false
    },
    {
      name: "Geolocator App",
      stack: ["React Native", "Google Maps API", "TomTom Traffic"],
      blurb:
        "GPS app with Dijkstra/A* routing, geocoding, geofencing (GeoJSON), and real‑time traffic optimization for efficient navigation.",
      links: [{ label: "Overview", href: "https://github.com/albert-magarire" }],
      tags: ["Mobile", "Algorithms", "Systems"],
      featured: false
    },
    {
      name: "Cyber Threat‑Hunting — SolarWinds IOC",
      stack: ["Splunk", "MISP", "Python"],
      blurb:
        "IOC investigation with SIEM correlation and threat‑intel enrichment; repeatable hunt playbook for advanced persistent threats.",
      links: [{ label: "Overview", href: "https://github.com/albert-magarire" }],
      tags: ["Cybersecurity", "Threat Hunting"],
      featured: false
    }
  ],
  skills: {
    languages: [
      "Python (Django, TensorFlow, Pandas, NumPy)",
      "C", "C++", "Java", "JavaScript (jQuery, React, Node)", "PHP", "SQL", "VB.Net"
    ],
    platforms: [
      "Docker", "PostgreSQL", "MongoDB", "AWS (Amplify, DynamoDB, Textract)", "Splunk", "Wireshark",
      "Linux", "Git/GitHub", "Jira", "REST APIs"
    ],
    soft: [
      "Collaboration", "Communication", "Critical Thinking", "Problem Solving", "Adaptability", "Project Management"
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
            
            <div className="grid md:grid-cols-2 gap-6">
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
