import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Trophy,
  BrainCircuit,
  FileText,
  Linkedin,
  Search,
  Mail,
  KanbanSquare,
  Github,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Send,
  MessageCircle,
  Youtube,
  Instagram,
  ChevronDown,
  BookOpen,
  Terminal,
  Zap,
  Users,
  Briefcase,
  Check,
  Menu,
  X,
  FileSpreadsheet,
  Globe,
  MapPin,
  ChevronRight,
  Eye,
  Download,
  Star,
  GraduationCap
} from "lucide-react";
import heroImage from "@/assets/hero-workstation.jpg";
import networkViz from "@/assets/network-viz.jpg";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Let's Code — Free Placement Prep & DSA Roadmaps for Students | Let's Code" },
      {
        name: "description",
        content:
          "Let's Code is a free platform helping students crack placement interviews. Get DSA roadmaps, company-wise PYQs, aptitude resources, interview experiences, and job updates.",
      },
      {
        name: "keywords",
        content: "placement preparation,DSA roadmap,coding interview,TCS NQT,Infosys,Wipro,previous year questions,aptitude test,interview experience,free placement resources,let's code,letscode,lets-code.co.in",
      },
      { property: "og:title", content: "Let's Code — Free Placement Prep & DSA Roadmaps" },
      {
        property: "og:description",
        content:
          "Free platform for students to crack placement interviews with DSA roadmaps, PYQs, aptitude prep, and interview experiences.",
      },
    ],
  }),
  component: Landing,
});

const tools = [
  { 
    id: "job-ready-score", 
    icon: Trophy, 
    name: "Job Ready Score", 
    meta: "100 pt score", 
    tag: "New", 
    desc: "Brutally honest AI score on your resume, LinkedIn & GitHub — with a personalised 90-day action plan.",
    actionText: "Check Score", 
    href: "/dashboard/job-ready-score/" 
  },
  { 
    id: "mock-interview", 
    icon: BrainCircuit, 
    name: "Mock Interview", 
    meta: "35+ topics", 
    tag: "Most Popular", 
    desc: "AI-generated MCQ tests across 35+ topics — DSA, CS fundamentals, aptitude & more.",
    actionText: "Start Test", 
    href: "/dashboard/mocktest/" 
  },
  { 
    id: "resume-studio", 
    icon: FileText, 
    name: "AI Resume Studio", 
    meta: "95% ATS pass rate", 
    tag: "AI Powered", 
    desc: "Score, edit & AI-improve your resume in one flow — download as PDF or DOC.",
    actionText: "Analyse Resume", 
    href: "/dashboard/optimizeresume/" 
  },
  { 
    id: "linkedin-optimizer", 
    icon: Linkedin, 
    name: "LinkedIn Optimizer", 
    meta: "3.5x more views", 
    tag: "AI Powered", 
    desc: "AI suggestions to improve headline, summary & skills so recruiters find you first.",
    actionText: "Optimize Profile", 
    href: "/dashboard/optimiselinkedin/" 
  },
  { 
    id: "job-finder", 
    icon: Search, 
    name: "AI Job Finder", 
    meta: "Should I Apply? Engine", 
    tag: "New ✨", 
    desc: "AI searches 5+ live job boards, scores every job by fit, and tells you whether to apply — with reasons, skill gaps & a verdict.",
    actionText: "Find Jobs", 
    href: "/dashboard/job-finder/" 
  },
  { 
    id: "cover-letter", 
    icon: Mail, 
    name: "Cover Letter AI", 
    meta: "8–10 keywords", 
    tag: "New ✨", 
    desc: "Paste resume & JD — AI writes an ATS-optimised cover letter with keywords in seconds.",
    actionText: "Generate Now", 
    href: "/dashboard/cover-letter/" 
  },
  { 
    id: "job-tracker", 
    icon: KanbanSquare, 
    name: "Job Tracker", 
    meta: "Kanban + List view", 
    tag: "Free", 
    desc: "Track every application in one Kanban board — status updates, interview prep links, and share-experience prompts when you get an offer.",
    actionText: "Track Applications", 
    href: "/dashboard/tracker/" 
  },
  { 
    id: "github-optimizer", 
    icon: Github, 
    name: "GitHub Optimizer", 
    meta: "100 pt score", 
    tag: "New ✨", 
    desc: "Enter any GitHub username and get a full AI review — profile score, README feedback, repo analysis, strengths, weaknesses, and a quick-win action plan.",
    actionText: "Analyze Profile", 
    href: "/dashboard/github-optimizer/" 
  },
];

const roadmapSteps = [
  { step: "01", category: "Learn", title: "DSA roadmaps, system design, DevOps & ML guides", href: "/articles/roadmap/", icon: BookOpen },
  { step: "02", category: "Practice", title: "Mock interviews, company PYQs & DSA challenges", href: "/dashboard/mocktest/", icon: Terminal },
  { step: "03", category: "Optimize", title: "AI tools for resume, LinkedIn & job ready score", href: "/dashboard/", icon: Zap },
  { step: "04", category: "Connect", title: "16+ tech & city communities on Discord", href: "https://discord.gg/XRBheB9QF9", icon: Users },
  { step: "05", category: "Get Hired", title: "Job alerts, startup opps & interview experiences", href: "/jobs/", icon: Briefcase },
];

const companies = ["Google", "Amazon", "Microsoft", "Meta", "Goldman Sachs", "Atlassian", "Razorpay", "Swiggy", "Flipkart", "Zomato", "Adobe", "Uber", "Stripe", "TCS", "Infosys", "Wipro", "Cognizant", "Deloitte", "JP Morgan", "Zepto", "Groww"];

const pyqCompanies = [
  { name: "Google", href: "/previousyearcodingquestion/google-previous-year-coding-questions/" },
  { name: "Goldman Sachs", href: "/previousyearcodingquestion/goldman-sachs-previous-year-coding-questions/" },
  { name: "Meta", href: "/previousyearcodingquestion/meta-previous-year-coding-questions/" },
  { name: "Apple", href: "/previousyearcodingquestion/apple-previous-year-coding-questions/" },
  { name: "Qualcomm", href: "/previousyearcodingquestion/qualcomm-previous-year-coding-questions/" },
  { name: "Amazon", href: "/previousyearcodingquestion/amazon-previous-year-coding-questions/" },
  { name: "TCS", href: "/previousyearcodingquestion/tcspyq/" },
  { name: "Wipro", href: "/previousyearcodingquestion/wipropyq/" },
  { name: "Infosys", href: "/previousyearcodingquestion/infosyspyq/" },
  { name: "Microsoft", href: "/previousyearcodingquestion/microsoft-previous-year-coding-questions/" },
  { name: "Deloitte", href: "/previousyearcodingquestion/deloitte-previous-year-questions/" },
  { name: "Cognizant", href: "/previousyearcodingquestion/cognizant-questions/" }
];

const prepareCompanies = [
  { name: "Google", href: "/prepare/google/" },
  { name: "Amazon", href: "/prepare/amazon/" },
  { name: "Microsoft", href: "/prepare/microsoft/" },
  { name: "Goldman Sachs", href: "/prepare/goldman-sachs/" },
  { name: "TCS", href: "/prepare/tcs/" },
  { name: "Infosys", href: "/prepare/infosys/" },
  { name: "Wipro", href: "/prepare/wipro/" },
  { name: "Deloitte", href: "/prepare/deloitte/" },
  { name: "JP Morgan", href: "/prepare/jp-morgan/" },
  { name: "Flipkart", href: "/prepare/flipkart/" }
];

const resumeTemplates = [
  { name: "Classic", tagline: "Clean ATS standard layout preferred by MNCs" },
  { name: "Executive", tagline: "Bold layout with highlighted headers for impact" },
  { name: "Clean", tagline: "Minimalist layout optimized for standard parsers" },
  { name: "Campus", tagline: "Double column style built for students & freshers" },
  { name: "Harvard", tagline: "Classic university template optimized for placements" },
  { name: "Sigma", tagline: "Modern layout highlighting skills & GitHub repos" }
];

const techCommunities = [
  { title: "DSA Masters", desc: "Master Data Structures & Algorithms with daily problems and discussions", icon: BookOpen },
  { title: "Full Stack Hub", desc: "Connect with full stack developers and learn modern web development", icon: Users },
  { title: "Cloud Computing", desc: "Explore AWS, Azure, GCP and cloud-native technologies", icon: Globe },
  { title: "Open Source", desc: "Contribute to open source projects and grow your portfolio", icon: Github },
  { title: "AI/ML Engineers", desc: "Discuss AI, Machine Learning, and Deep Learning concepts", icon: BrainCircuit },
  { title: "Data Science", desc: "Learn data analysis, visualization, and statistical modeling", icon: FileSpreadsheet },
  { title: "Cyber Security", desc: "Explore security concepts, ethical hacking, and best practices", icon: Terminal },
  { title: "QA Community", desc: "Connect with QA engineers and learn testing methodologies", icon: Check }
];

const locationStartups = [
  { city: "Bangalore", desc: "India's Silicon Valley — 5000+ active startups, AI companies & unicorns.", href: "https://topmate.io/letscode/1020156" },
  { city: "Hyderabad", desc: "HITEC City ecosystem with IT, biotech & deep tech innovations.", href: "https://topmate.io/letscode/1021879" },
  { city: "Gurgaon", desc: "NCR's startup powerhouse — e-commerce to foodtech unicorns.", href: "https://topmate.io/letscode/1049450" },
  { city: "Pune", desc: "Growing tech hub — SaaS, automotive tech & engineering.", href: "https://topmate.io/letscode/1072429" },
  { city: "Mumbai", desc: "Financial capital — fintech, media & D2C startups.", href: "https://topmate.io/letscode/1061831" },
  { city: "Product Based", desc: "Join companies building cutting-edge products with engineering excellence.", href: "https://topmate.io/letscode/1313312" },
  { city: "100% Remote", desc: "Work from anywhere — flexible culture & global exposure.", href: "https://topmate.io/letscode/1171184" },
  { city: "Unicorn Startups", desc: "Join India's billion-dollar club & revolutionize industries.", href: "https://topmate.io/letscode/1375073" }
];

const resourcesList = {
  roadmaps: [
    { name: "DSA Roadmap", href: "/articles/roadmap/" },
    { name: "Python Roadmap", href: "/articles/pythonroadmap/" },
    { name: "DevOps", href: "/articles/devopsroadmap/" }
  ],
  interviewQuestions: [
    { name: "JavaScript", href: "/interview/javascriptinterview/" },
    { name: "OOPs", href: "/interview/oppsinterviewquestions/" },
    { name: "DBMS & OS", href: "/interview/dbmsinterview/" },
    { name: "Placement Questions", href: "/interview/advanced-placement-interview-questions/" }
  ],
  dsaChallenge: [
    { name: "Register Now", href: "/100-days-dsa-challenge/" },
    { name: "View Challenges", href: "/challenges/" }
  ],
  experiences: [
    { name: "Read Experiences", href: "/interview-experience/" },
    { name: "Share Yours", href: "/interview-experience/new/" }
  ],
  placementKit: [
    { name: "Placement Kit", href: "/articles/AtoZ-Placement-Kit/" },
    { name: "Cold Email Templates", href: "/articles/coldemailtemplates/" },
    { name: "FYP Ideas", href: "/articles/finalyearprojects/" }
  ],
  prepGuides: [
    { name: "Google Prep", href: "/prepare/google/" },
    { name: "Amazon Prep", href: "/prepare/amazon/" },
    { name: "TCS Prep", href: "/prepare/tcs/" },
    { name: "All Companies", href: "/prepare/" }
  ]
};

const testimonials = [
  {
    quote: "I just wanted to thank you for your material. It really helped me land a job at TCS. I'm very thankful for it. Just wanted to appreciate the effort you put in because it was very rewarding for me.",
    badge: "Landed a job at TCS",
    name: "Jinal Mehta",
    college: "B.Tech, DJ Sanghvi College of Engineering",
    batch: "2025",
    initials: "JM"
  },
  {
    quote: "I want to express my deepest gratitude to the Let's Code community. The abundance of technical resources here is astounding. Your generosity in sharing knowledge and your passion for coding have enriched my life in ways I cannot fully express.",
    badge: "Accelerated learning journey",
    name: "Kuldeep Panwar",
    college: "CSE, Indore Institute of Science and Technology",
    batch: "2025",
    initials: "KP"
  },
  {
    quote: "I wanted to extend a heartfelt thank you for the valuable information you share with us students. Your contributions have a positive impact on our education and career development, providing us with essential knowledge that has truly enriched our learning experience.",
    badge: "Career development support",
    name: "Megha Chhapre",
    college: "B.Tech, Medicaps University Indore",
    batch: "2024",
    initials: "MC"
  }
];

function Landing() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Job match scanner simulator state
  const [fileName, setFileName] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState("");
  const [scanComplete, setScanComplete] = useState(false);
  const [activeCommunityTab, setActiveCommunityTab] = useState<"tech" | "location">("tech");

  const handleDropdownHover = (menu: string | null) => {
    setActiveDropdown(menu);
  };

  const simulateResumeScan = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const name = e.target.files[0].name;
      setFileName(name);
      setIsScanning(true);
      setScanComplete(false);
      
      const messages = [
        "Uploading resume PDF...",
        "Parsing resume structure and formatting...",
        "Extracting highlighted skills (React, JS, Java)...",
        "Running gap analysis against 100+ placement standards...",
        "Querying matching live opportunities...",
        "Scan complete!"
      ];

      messages.forEach((msg, idx) => {
        setTimeout(() => {
          setScanMessage(msg);
          if (idx === messages.length - 1) {
            setIsScanning(false);
            setScanComplete(true);
          }
        }, (idx + 1) * 700);
      });
    }
  };

  return (
    <div className="min-h-screen bg-ink text-bone font-display selection:bg-neon selection:text-ink">
      
      {/* NAV */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-ink/85 border-b border-line-1">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          
          {/* Brand */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="size-7 grid place-items-center bg-neon text-on-neon">
              <span className="font-mono text-xs font-bold">{"</>"}</span>
            </div>
            <span className="text-lg font-black tracking-tighter uppercase italic group-hover:text-neon transition-colors">
              Let's Code
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6 text-[11px] font-medium tracking-[0.18em] uppercase text-bone/70">
            
            {/* Learn Dropdown */}
            <div 
              className="relative py-5"
              onMouseEnter={() => handleDropdownHover("learn")}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <button className="flex items-center gap-1 hover:text-accent transition-colors focus:outline-none">
                Learn <ChevronDown className={`size-3.5 transition-transform duration-250 ${activeDropdown === "learn" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "learn" && (
                <div className="absolute top-14 left-0 w-52 bg-ink-2 border border-line-2 p-4 shadow-xl grid gap-2">
                  <a href="/articles/roadmap/" className="hover:text-neon transition-colors">DSA Roadmap</a>
                  <a href="/articles/pythonroadmap/" className="hover:text-neon transition-colors">Python Roadmap</a>
                  <a href="/articles/devopsroadmap/" className="hover:text-neon transition-colors">DevOps Roadmap</a>
                  <a href="/articles/roadmap/" className="hover:text-neon transition-colors">Web Dev Roadmap</a>
                  <a href="/articles/roadmap/" className="hover:text-neon transition-colors">System Design</a>
                  <a href="/articles/roadmap/" className="hover:text-neon transition-colors">Machine Learning</a>
                </div>
              )}
            </div>

            {/* PYQ Dropdown */}
            <div 
              className="relative py-5"
              onMouseEnter={() => handleDropdownHover("pyqs")}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <button className="flex items-center gap-1 hover:text-accent transition-colors focus:outline-none">
                PYQ's <ChevronDown className={`size-3.5 transition-transform duration-250 ${activeDropdown === "pyqs" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "pyqs" && (
                <div className="absolute top-14 left-0 w-80 bg-ink-2 border border-line-2 p-4 shadow-xl grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
                  {pyqCompanies.map((c) => (
                    <a key={c.name} href={c.href} className="hover:text-neon transition-colors text-[10px]">
                      {c.name} PYQs
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Interview Dropdown */}
            <div 
              className="relative py-5"
              onMouseEnter={() => handleDropdownHover("interview")}
              onMouseLeave={() => handleDropdownHover(null)}
            >
              <button className="flex items-center gap-1 hover:text-accent transition-colors focus:outline-none">
                Interview <ChevronDown className={`size-3.5 transition-transform duration-250 ${activeDropdown === "interview" ? "rotate-180" : ""}`} />
              </button>
              {activeDropdown === "interview" && (
                <div className="absolute top-14 left-0 w-60 bg-ink-2 border border-line-2 p-4 shadow-xl grid gap-2">
                  <a href="/interview/javascriptinterview/" className="hover:text-neon transition-colors">JavaScript</a>
                  <a href="/interview/oppsinterviewquestions/" className="hover:text-neon transition-colors">OOPs Questions</a>
                  <a href="/interview/dbmsinterview/" className="hover:text-neon transition-colors">DBMS & OS</a>
                  <a href="/interview/advanced-placement-interview-questions/" className="hover:text-neon transition-colors">Placement Questions</a>
                  <a href="/interview/oppsinterviewquestions/" className="hover:text-neon transition-colors">Core Java</a>
                  <a href="/interview/javascriptinterview/" className="hover:text-neon transition-colors">SQL Questions</a>
                </div>
              )}
            </div>

            <a href="/feed/" className="hover:text-accent transition-colors">Feed</a>
            <a href="/contests/" className="hover:text-accent transition-colors">Contests</a>
            <a href="/startups-list/" className="hover:text-accent transition-colors">Startups</a>
            <a href="/jobs/" className="hover:text-accent transition-colors">Jobs</a>
            <a href="/interview-experience/" className="hover:text-accent transition-colors">Experiences</a>
            <a href="/explore/" className="hover:text-accent transition-colors">Explore</a>
            <a href="/blogs/" className="hover:text-accent transition-colors">Blogs</a>
            <a href="https://topmate.io/letscode" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Products</a>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a href="/dashboard/" className="bg-bone text-ink px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-neon hover:text-on-neon transition-colors hidden sm:block">
              AI Tools
            </a>
            
            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-bone/80 hover:text-neon transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-ink border-b border-line-2 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent">/ Roadmap Paths</span>
              <div className="grid grid-cols-2 gap-2 pl-2 pt-1 pb-3 text-xs">
                <a href="/articles/roadmap/" className="text-bone/70 hover:text-neon">DSA Roadmap</a>
                <a href="/articles/pythonroadmap/" className="text-bone/70 hover:text-neon">Python</a>
                <a href="/articles/devopsroadmap/" className="text-bone/70 hover:text-neon">DevOps</a>
                <a href="/articles/roadmap/" className="text-bone/70 hover:text-neon">System Design</a>
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent">/ PYQ Guides</span>
              <div className="grid grid-cols-2 gap-2 pl-2 pt-1 pb-3 text-xs">
                {pyqCompanies.slice(0, 6).map((c) => (
                  <a key={c.name} href={c.href} className="text-bone/70 hover:text-neon">
                    {c.name}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[9px] uppercase tracking-widest text-accent">/ Interview Cheatsheets</span>
              <div className="grid grid-cols-2 gap-2 pl-2 pt-1 pb-3 text-xs">
                <a href="/interview/javascriptinterview/" className="text-bone/70 hover:text-neon">JavaScript</a>
                <a href="/interview/oppsinterviewquestions/" className="text-bone/70 hover:text-neon">OOPs</a>
                <a href="/interview/dbmsinterview/" className="text-bone/70 hover:text-neon">DBMS & OS</a>
                <a href="/interview/advanced-placement-interview-questions/" className="text-bone/70 hover:text-neon">Placement Qs</a>
              </div>
            </div>

            <hr className="border-line-1" />

            <div className="grid grid-cols-2 gap-3 text-xs tracking-wider uppercase font-semibold">
              <a href="/feed/" className="hover:text-neon">Feed</a>
              <a href="/contests/" className="hover:text-neon">Contests</a>
              <a href="/startups-list/" className="hover:text-neon">Startups</a>
              <a href="/jobs/" className="hover:text-neon">Jobs</a>
              <a href="/interview-experience/" className="hover:text-neon">Experiences</a>
              <a href="/explore/" className="hover:text-neon">Explore</a>
              <a href="/blogs/" className="hover:text-neon">Blogs</a>
              <a href="https://topmate.io/letscode" target="_blank" rel="noopener noreferrer" className="hover:text-neon">Products</a>
            </div>

            <a href="/dashboard/" className="w-full text-center block bg-neon text-on-neon py-3 text-[11px] font-black uppercase tracking-[0.18em]">
              Open Toolkit
            </a>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="px-6 lg:px-10 pt-16 lg:pt-24 pb-12 relative overflow-hidden">
        {/* Decorative Grid Gradients */}
        <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start gap-12 mb-14">
            
            {/* Left Hero Column */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-8 border border-line-2 px-3 py-1 bg-ink-2/30">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-60" />
                  <span className="relative inline-flex rounded-full size-2 bg-neon" />
                </span>
                Trusted by 1,00,000+ engineers
              </div>
              <h1 className="text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.9] font-black uppercase tracking-tighter mb-8">
                Everything You<br />
                Need to <span className="text-neon">Land Your</span><br />
                Dream Tech Job.
              </h1>
              <p className="text-lg text-bone/60 font-light leading-relaxed mb-10 max-w-xl">
                8 free AI career tools, 1000+ interview resources, company prep guides, job tracker, and a community of 1 lakh+ engineers — all in one place.
              </p>
              
              {/* Call to Actions */}
              <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                <a href="/dashboard/job-ready-score/" className="group inline-flex items-center justify-center gap-2 bg-neon text-on-neon px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:bg-bone transition-all shadow-lg hover:shadow-neon/20">
                  <Trophy className="size-4" /> Check Job Ready Score — Free
                  <ArrowUpRight className="size-4 group-hover:rotate-45 transition-transform" />
                </a>
                <a href="/dashboard/mocktest/" className="inline-flex items-center justify-center gap-2 border border-line-3 px-6 py-4 text-[11px] font-bold uppercase tracking-[0.18em] hover:border-accent hover:text-accent transition-colors bg-ink-2/50">
                  <BrainCircuit className="size-4" /> Start Mock Interview
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-6 border-t border-line-1">
                <span className="font-mono text-[9px] uppercase tracking-wider text-bone/40">Connect:</span>
                <a href="https://whatsapp.com/channel/0029Va9IblC7dmecjzkkn811" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-bone/50 hover:text-[#25D366] transition-colors flex items-center gap-1.5 text-xs font-mono">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
                <a href="https://t.me/offcampusjobsupdatess" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-bone/50 hover:text-[#0088cc] transition-colors flex items-center gap-1.5 text-xs font-mono">
                  <Send className="size-4" /> Telegram
                </a>
                <a href="https://www.linkedin.com/company/lets-code-forever/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-bone/50 hover:text-[#0077b5] transition-colors flex items-center gap-1.5 text-xs font-mono">
                  <Linkedin className="size-4" /> LinkedIn
                </a>
                <a href="https://discord.gg/XRBheB9QF9" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-bone/50 hover:text-[#5865F2] transition-colors flex items-center gap-1.5 text-xs font-mono">
                  <Sparkles className="size-4" /> Discord
                </a>
              </div>
            </div>

            {/* Right Hero Column: Sidebar AI Tools Showcase */}
            <div className="w-full lg:max-w-md bg-ink-2 border border-line-1 p-6 relative">
              <div className="absolute top-4 right-4 font-mono text-[9px] text-accent">/ Toolkit_v1.0</div>
              <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-bone/50 mb-5 border-b border-line-1 pb-3">
                8 Free AI Career Tools
              </h2>
              <div className="space-y-2 max-h-[360px] overflow-y-auto pr-1">
                {tools.map((t) => {
                  const Icon = t.icon;
                  return (
                    <a 
                      key={t.id} 
                      href={t.href} 
                      className="flex items-center gap-3 px-3 py-2.5 border border-line-1 hover:border-accent hover:bg-ink-3 transition-all group"
                    >
                      <div className="size-9 bg-ink border border-line-2 flex items-center justify-center text-bone group-hover:bg-neon group-hover:text-ink transition-colors">
                        <Icon className="size-4.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-black uppercase tracking-wider">{t.name}</span>
                          <span className="font-mono text-[8px] bg-line-2 px-1 text-accent uppercase tracking-wider">{t.tag}</span>
                        </div>
                        <span className="font-mono text-[9px] text-bone/40">{t.meta}</span>
                      </div>
                      <ChevronRight className="size-3.5 text-bone/35 group-hover:translate-x-1 transition-transform" />
                    </a>
                  );
                })}
              </div>
              <a href="/user/dashboard/" className="mt-5 w-full text-center flex items-center justify-center gap-2 bg-bone text-ink py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-neon hover:text-on-neon transition-colors">
                Open AI Toolkit <ArrowRight className="size-3.5" />
              </a>
            </div>

          </div>

          {/* Stat Numbers Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border border-line-1 bg-ink-2/30 backdrop-blur-sm">
            {[
              ["1,00,000+", "Engineers Served"],
              ["8", "Free AI Tools"],
              ["35+", "Interview Topics"],
              ["25+", "Company Prep Guides"],
            ].map(([value, label]) => (
              <div key={label} className="text-center md:text-left md:pl-4">
                <div className="text-3xl md:text-5xl font-black tracking-tighter text-neon">{value}</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-bone/40 mt-1">{label}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-line-1 py-6 overflow-hidden bg-ink-2/40">
        <div className="flex marquee whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.3em] text-bone/30">
          {[...companies, ...companies].map((c, i) => (
            <span key={i} className="mx-8 flex items-center gap-8">
              {c} <span className="text-accent">●</span>
            </span>
          ))}
        </div>
      </section>

      {/* PIPELINE ROADMAP */}
      <section id="roadmap" className="px-6 lg:px-10 py-24 border-b border-line-1">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3 block">/ Pipeline</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                From student<br />
                to <span className="text-neon">employed.</span>
              </h2>
            </div>
            <p className="md:max-w-xs text-bone/50 text-sm leading-relaxed font-light">
              Every stage of your placement journey, mapped and covered in one single platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-line-2 border border-line-2">
            {roadmapSteps.map((step) => {
              const StepIcon = step.icon;
              return (
                <a 
                  key={step.step} 
                  href={step.href} 
                  className="bg-ink p-8 flex flex-col justify-between min-h-[300px] group hover:bg-ink-2 transition-all block no-underline border-b md:border-b-0 md:border-r border-line-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-3xl font-black italic text-accent">{step.step}</span>
                    <div className="size-8 border border-line-2 grid place-items-center text-bone/60 group-hover:border-neon group-hover:text-neon transition-colors">
                      <StepIcon className="size-4" />
                    </div>
                  </div>
                  <div className="mt-8">
                    <div className="font-mono text-[10px] uppercase text-neon tracking-wider mb-2 font-bold">{step.category}</div>
                    <h3 className="text-base font-bold uppercase tracking-tight leading-snug group-hover:text-bone transition-colors">{step.title}</h3>
                  </div>
                  <div className="h-0.5 w-6 bg-accent mt-6 group-hover:w-full transition-all duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8 AI TOOLS DETAIL CARDS */}
      <section id="tools" className="px-6 lg:px-10 py-24 bg-ink-2/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-neon mb-3 block">/ Toolkit_v1.0</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Prepare Smarter,<br />
                Get <span className="text-stroke">Hired Faster</span>
              </h2>
            </div>
            <p className="md:max-w-sm text-bone/50 text-sm leading-relaxed font-light">
              Eight free AI tools built to audit your profiles, practice mocks, match jobs, generate cover letters and track placements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((t) => {
              const Icon = t.icon;
              return (
                <article 
                  key={t.id} 
                  className="bg-ink-2 border border-line-1 p-6 flex flex-col justify-between min-h-[300px] group hover:border-accent/40 hover:bg-ink-3 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between mb-6">
                      <div className="size-10 bg-ink border border-line-2 flex items-center justify-center group-hover:bg-neon group-hover:text-ink transition-colors">
                        <Icon className="size-5" />
                      </div>
                      <span className="font-mono text-[9px] bg-neon/10 border border-neon/20 px-2 py-0.5 text-neon uppercase tracking-wider">
                        {t.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold uppercase tracking-tight mb-3 text-bone group-hover:text-neon transition-colors">
                      {t.name}
                    </h3>
                    <p className="text-xs text-bone/55 leading-relaxed font-light mb-6">
                      {t.desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-line-1 flex items-center justify-between">
                    <span className="font-mono text-[10px] text-bone/40 uppercase tracking-widest">{t.meta}</span>
                    <a href={t.href} className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-accent hover:text-neon transition-colors">
                      {t.actionText} <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <a href="/user/dashboard/" className="inline-flex items-center gap-2 bg-bone text-ink px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-neon hover:text-on-neon transition-all">
              Open Full AI Toolkit <Sparkles className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* INTERACTIVE AI JOB MATCH & DEMO */}
      <section className="px-6 lg:px-10 py-24 border-t border-line-1 relative">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Upload card */}
            <div className="lg:col-span-5 bg-ink-2 border border-line-1 p-8 relative">
              <span className="font-mono text-[10px] text-accent uppercase tracking-wider mb-4 block">🔍 Free AI Job Finder</span>
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">
                Upload Resume,<br />
                Get Matched Jobs
              </h2>
              <p className="text-xs text-bone/60 leading-relaxed mb-6 font-light">
                Drop your PDF resume and LetsCode AI searches 5+ live job boards — scoring every opening by fit and highlighting skill gaps.
              </p>

              {/* Upload Drag-and-Drop Mock Box */}
              <div className="border border-dashed border-line-3 hover:border-accent p-6 text-center cursor-pointer bg-ink transition-colors relative">
                <input 
                  type="file" 
                  accept=".pdf" 
                  onChange={simulateResumeScan}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  disabled={isScanning}
                />
                <FileText className="size-10 mx-auto mb-3 text-bone/40 group-hover:text-neon" />
                <span className="block text-xs font-bold uppercase tracking-wider mb-1">
                  {fileName ? fileName : "Upload Resume PDF"}
                </span>
                <span className="block font-mono text-[9px] text-bone/40 uppercase">
                  PDF format / Max 5MB
                </span>
              </div>

              {/* Scan loading overlay/info */}
              {isScanning && (
                <div className="mt-4 p-3 bg-neon/10 border border-neon/20 font-mono text-[10px] text-neon text-center flex items-center justify-center gap-2">
                  <span className="relative flex size-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon opacity-75" />
                    <span className="relative inline-flex rounded-full size-2 bg-neon" />
                  </span>
                  {scanMessage}
                </div>
              )}

              {/* Bullet points info */}
              <ul className="mt-8 space-y-2 text-xs font-mono text-bone/70">
                <li className="flex items-center gap-2">
                  <Check className="size-3 text-neon" /> Live Indian & global job listings in real-time
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3 text-neon" /> AI match score (0–100%) for every job
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-3 text-neon" /> Skill gaps highlighted so you know what to learn
                </li>
              </ul>
            </div>

            {/* Right side: Matches Mock lists */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex justify-between items-center border-b border-line-1 pb-3">
                <span className="font-mono text-[10px] text-bone/50 uppercase tracking-widest">Matched Placements</span>
                <span className="font-mono text-[9px] bg-accent/20 border border-accent/30 text-accent px-2 py-0.5 uppercase tracking-wider">
                  LetsCode Matcher API v1
                </span>
              </div>

              {/* Job Card 1 */}
              <div className={`p-5 border bg-ink-2/60 transition-all ${scanComplete ? "border-neon bg-ink-2" : "border-line-1"}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight">Software Engineer</h4>
                    <span className="font-mono text-xs text-bone/60">Razorpay · Bangalore · Full-Time</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-black text-neon">92%</span>
                    <span className="font-mono text-[8px] uppercase text-neon tracking-widest">Excellent Match</span>
                  </div>
                </div>
                {scanComplete && (
                  <div className="mt-4 pt-3 border-t border-line-1/50 flex flex-wrap gap-1.5">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-neon border border-neon/20 px-2 py-0.5">Matched: React</span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-neon border border-neon/20 px-2 py-0.5">Matched: SQL</span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-accent border border-accent/20 px-2 py-0.5">Gap: Docker</span>
                  </div>
                )}
              </div>

              {/* Job Card 2 */}
              <div className="p-5 border border-line-1 bg-ink-2/60">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight">Frontend Developer</h4>
                    <span className="font-mono text-xs text-bone/60">Zepto · Mumbai · Full-Time</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-black text-[#FFD700]">78%</span>
                    <span className="font-mono text-[8px] uppercase text-[#FFD700] tracking-widest">Strong Match</span>
                  </div>
                </div>
              </div>

              {/* Job Card 3 */}
              <div className="p-5 border border-line-1 bg-ink-2/60">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight">Full Stack Engineer</h4>
                    <span className="font-mono text-xs text-bone/60">Groww · Remote · Full-Time</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-xl font-black text-bone/70">65%</span>
                    <span className="font-mono text-[8px] uppercase text-bone/40 tracking-widest">Good Match</span>
                  </div>
                </div>
              </div>

              <div className="text-center font-mono text-[10px] text-bone/40 uppercase pt-2">
                + 50 more jobs matched to your resume
              </div>

              <div className="pt-4 text-center lg:text-left">
                <a href="/dashboard/job-finder/" className="inline-flex items-center gap-2 bg-neon text-on-neon px-6 py-3.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-bone transition-all">
                  Find My Matching Jobs →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ATS RESUME TEMPLATES */}
      <section className="px-6 lg:px-10 py-24 border-t border-line-1 bg-ink-2/30">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent mb-3 block">/ Resumes</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Build an ATS-Ready Resume<br />
                in <span className="text-neon">Minutes</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end text-xs font-mono text-bone/70">
              <span className="border border-line-2 px-3 py-1.5 uppercase">ATS-Optimised</span>
              <span className="border border-line-2 px-3 py-1.5 uppercase">Live Preview</span>
              <span className="border border-line-2 px-3 py-1.5 uppercase">PDF Download</span>
              <span className="border border-neon text-neon px-3 py-1.5 uppercase">Free</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {resumeTemplates.map((t) => (
              <a 
                key={t.name}
                href="/resume-templates/"
                className="bg-ink-2 border border-line-1 p-5 block hover:border-accent hover:-translate-y-1 transition-all group"
              >
                <div className="aspect-[3/4] bg-ink border border-line-2 mb-4 relative overflow-hidden flex flex-col justify-center items-center p-3 text-center">
                  <div className="absolute top-2 left-2 text-[8px] font-mono text-bone/30 uppercase">LET'S CODE</div>
                  <FileText className="size-8 text-bone/35 group-hover:text-neon transition-colors mb-2" />
                  <span className="text-xs font-black uppercase tracking-wider text-bone">{t.name}</span>
                  <div className="absolute bottom-2 inset-x-2 flex justify-between text-[7px] font-mono text-neon opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>EDIT TEMPLATE</span>
                    <ArrowUpRight className="size-2.5" />
                  </div>
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider mb-1 group-hover:text-neon transition-colors">{t.name}</h4>
                <p className="text-[9px] text-bone/50 font-light leading-snug">{t.tagline}</p>
              </a>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/resume-templates/" className="inline-flex items-center justify-center gap-2 border border-line-3 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-bone hover:text-ink transition-all">
              Browse Templates
            </a>
            <a href="/dashboard/resumes/" className="inline-flex items-center justify-center gap-2 bg-neon text-on-neon px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-bone transition-all">
              My Saved Resumes
            </a>
          </div>
        </div>
      </section>

      {/* PREPARE FOR ANY COMPANY Section */}
      <section className="px-6 lg:px-10 py-24 border-t border-line-1">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3 block">/ Company Prep</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Prepare for <span className="text-neon font-black italic text-stroke">Any Company</span>
              </h2>
            </div>
            <p className="md:max-w-xs text-bone/50 text-sm leading-relaxed font-light">
              One dashboard page per company — housing past PYQs, real interview experiences, open jobs, and specific AI interview prep tools.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {prepareCompanies.map((c) => (
              <a 
                key={c.name}
                href={c.href}
                className="flex items-center justify-between bg-ink-2 border border-line-1 px-5 py-4 font-mono text-xs uppercase hover:border-accent hover:text-accent transition-colors"
              >
                <span>{c.name} Prep</span>
                <ArrowUpRight className="size-3.5 text-bone/35" />
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a href="/prepare/" className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-neon border-b border-neon pb-1 hover:text-bone hover:border-bone transition-colors">
              View All 25+ Company Guides <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* JOB UPDATES & CHANNEL NETWORKS */}
      <section className="px-6 lg:px-10 py-24 border-t border-line-1 bg-ink-2/20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3 block">/ Placement News</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Trusted by <span className="text-neon">10,000+</span><br />
                Job Seekers
              </h2>
            </div>
            <p className="md:max-w-sm text-bone/50 text-sm leading-relaxed font-light">
              Get daily updates, batch-wise notifications, and hand-selected startup opportunities delivered right to your channels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <article className="border border-line-1 p-8 bg-ink-2 flex flex-col justify-between min-h-[340px] group hover:border-accent/40 transition-colors">
              <div>
                <span className="font-mono text-[10px] text-accent uppercase block mb-4">/ Channels</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-bone">
                  Free Job Updates
                </h3>
                <p className="text-xs text-bone/60 leading-relaxed mb-6 font-light">
                  Daily job alerts on WhatsApp, Telegram, and LinkedIn — spam-free, verified off-campus opportunities with direct apply links.
                </p>
              </div>
              <div>
                <div className="flex gap-3 mb-6">
                  <a href="https://whatsapp.com/channel/0029Va9IblC7dmecjzkkn811" target="_blank" rel="noopener noreferrer" className="size-9 bg-ink border border-line-2 flex items-center justify-center text-bone/60 hover:bg-[#25D366] hover:text-white transition-all">
                    <MessageCircle className="size-4.5" />
                  </a>
                  <a href="https://t.me/offcampusjobsupdatess" target="_blank" rel="noopener noreferrer" className="size-9 bg-ink border border-line-2 flex items-center justify-center text-bone/60 hover:bg-[#0088cc] hover:text-white transition-all">
                    <Send className="size-4.5" />
                  </a>
                  <a href="https://www.linkedin.com/company/lets-code-forever/" target="_blank" rel="noopener noreferrer" className="size-9 bg-ink border border-line-2 flex items-center justify-center text-bone/60 hover:bg-[#0077b5] hover:text-white transition-all">
                    <Linkedin className="size-4.5" />
                  </a>
                </div>
                <a href="/jobs/" className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-accent">
                  Join Free <ArrowRight className="size-3.5" />
                </a>
              </div>
            </article>

            {/* Box 2 */}
            <article className="border border-line-1 p-8 bg-ink-2 flex flex-col justify-between min-h-[340px] group hover:border-accent/40 transition-colors">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-[10px] text-accent uppercase">/ Premium</span>
                  <span className="font-mono text-[8px] bg-neon text-on-neon px-2 py-0.5 uppercase font-bold">LIFETIME</span>
                </div>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-bone">
                  Batch-wise Updates
                </h3>
                <p className="text-xs text-bone/60 leading-relaxed mb-6 font-light">
                  Get exclusive access to batch-sorted job feeds, premium resume formats, custom cold email templates, and high-priority interview resources.
                </p>
              </div>
              <div>
                <ul className="text-[10px] font-mono text-bone/50 space-y-1 mb-6">
                  <li>— early notify notifications</li>
                  <li>— verified apply channels</li>
                  <li>— template kits & sheets</li>
                </ul>
                <a href="https://topmate.io/letscode/1126097" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-neon">
                  Get Premium Access <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </article>

            {/* Box 3 */}
            <article className="border border-line-1 p-8 bg-ink-2 flex flex-col justify-between min-h-[340px] group hover:border-accent/40 transition-colors">
              <div>
                <span className="font-mono text-[10px] text-accent uppercase block mb-4">/ Curated list</span>
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-4 text-bone">
                  Startup Jobs
                </h3>
                <p className="text-xs text-bone/60 leading-relaxed mb-6 font-light">
                  Hand-curated software engineering listings from early-stage, fintech, SaaS, and unicorn startups in major Indian tech hubs.
                </p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-8 font-mono text-[8px] uppercase text-bone/50">
                  <span className="bg-ink border border-line-2 px-2 py-0.5">Bangalore</span>
                  <span className="bg-ink border border-line-2 px-2 py-0.5">Remote Hub</span>
                  <span className="bg-ink border border-line-2 px-2 py-0.5">Fintech</span>
                </div>
                <a href="#startups" className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-accent">
                  Explore Startups <ArrowDownLink className="size-3.5" />
                </a>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* STARTUP ECOSYSTEM BY LOCATION */}
      <section id="startups" className="px-6 lg:px-10 py-24 border-t border-line-1">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7">
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3 block">/ Startup Ecosystem</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                Explore Startups<br />
                by <span className="text-neon">Location</span>
              </h2>
              <p className="text-sm text-bone/60 leading-relaxed mt-4 font-light max-w-xl">
                Discover placement and internship opportunities in India's top tech cities. Filter companies by location, target tech stacks, and funding rounds.
              </p>
            </div>
            
            {/* Spreadsheet promo box */}
            <div className="lg:col-span-5 border border-line-1 bg-ink-2 p-6 flex flex-col justify-between min-h-[180px]">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[9px] text-neon bg-neon/10 px-2 py-0.5 uppercase tracking-wider font-bold">⭐ Premium Bundle</span>
                  <FileSpreadsheet className="size-5 text-neon" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-tight mb-2">The Ultimate Startup Bundle</h4>
                <p className="text-[11px] text-bone/50 font-light leading-relaxed">
                  A massive, curated spreadsheet of <strong>3,200+ startups</strong>, tech tags, locations, careers pages, and founder details.
                </p>
              </div>
              <a href="https://topmate.io/letscode/2071103" target="_blank" rel="noopener noreferrer" className="mt-4 w-full text-center bg-bone text-ink py-2.5 text-[9px] font-bold uppercase tracking-[0.2em] hover:bg-neon hover:text-on-neon transition-colors">
                Get Sheet Access
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationStartups.map((l) => (
              <a 
                key={l.city}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink-2 border border-line-1 p-6 flex flex-col justify-between min-h-[200px] group hover:border-accent hover:bg-ink-3 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-line-1 pb-3">
                    <h3 className="text-lg font-black uppercase tracking-wider text-bone group-hover:text-neon transition-colors">
                      {l.city}
                    </h3>
                    <MapPin className="size-4 text-bone/45 group-hover:text-neon" />
                  </div>
                  <p className="text-[11px] text-bone/55 font-light leading-relaxed mb-6">
                    {l.desc}
                  </p>
                </div>
                <div className="font-mono text-[9px] text-accent uppercase tracking-widest flex items-center gap-1 group-hover:text-neon transition-colors">
                  Explore Hub <ArrowUpRight className="size-3" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 1000+ FREE RESOURCES HUB */}
      <section className="px-6 lg:px-10 py-24 border-t border-line-1 bg-ink-2/30">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3 block">/ Resource Library</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
                1000+ Free <span className="text-neon">Resources</span>
              </h2>
            </div>
            <p className="md:max-w-xs text-bone/50 text-sm leading-relaxed font-light">
              From DSA roadmaps to company-specific PYQs and behavior templates — all completely free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Roadmaps */}
            <div className="border border-line-1 p-6 bg-ink-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon mb-4 pb-2 border-b border-line-1">
                // Roadmaps
              </h3>
              <div className="space-y-3">
                {resourcesList.roadmaps.map((r) => (
                  <a key={r.name} href={r.href} className="flex justify-between items-center group py-1 text-sm font-medium hover:text-neon transition-colors">
                    <span>{r.name}</span>
                    <ChevronRight className="size-4 text-bone/30 group-hover:text-neon group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Interview Qs */}
            <div className="border border-line-1 p-6 bg-ink-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon mb-4 pb-2 border-b border-line-1">
                // Interview Questions
              </h3>
              <div className="space-y-3">
                {resourcesList.interviewQuestions.map((r) => (
                  <a key={r.name} href={r.href} className="flex justify-between items-center group py-1 text-sm font-medium hover:text-neon transition-colors">
                    <span>{r.name} Questions</span>
                    <ChevronRight className="size-4 text-bone/30 group-hover:text-neon group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company PYQs */}
            <div className="border border-line-1 p-6 bg-ink-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon mb-4 pb-2 border-b border-line-1">
                // Top Company PYQs
              </h3>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {pyqCompanies.slice(0, 8).map((c) => (
                  <a key={c.name} href={c.href} className="text-xs py-1 hover:text-neon transition-colors truncate">
                    {c.name} Coding
                  </a>
                ))}
              </div>
              <a href="/previousyearcodingquestion/tcspyq/" className="mt-4 text-[10px] font-mono uppercase text-accent hover:text-neon block">
                Browse 50+ PYQ sets →
              </a>
            </div>

            {/* 100 Days Challenge */}
            <div className="border border-line-1 p-6 bg-ink-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon mb-4 pb-2 border-b border-line-1">
                // 100 Days DSA Challenge
              </h3>
              <p className="text-xs text-bone/60 leading-relaxed mb-4 font-light">
                Community-driven DSA challenge. Code daily, test your edge, and win tech swag.
              </p>
              <div className="flex gap-4">
                {resourcesList.dsaChallenge.map((r) => (
                  <a key={r.name} href={r.href} className="text-xs font-mono uppercase tracking-wider text-accent hover:text-neon transition-colors">
                    {r.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Interview Experiences */}
            <div className="border border-line-1 p-6 bg-ink-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon mb-4 pb-2 border-b border-line-1">
                // Placed Stories
              </h3>
              <p className="text-xs text-bone/60 leading-relaxed mb-4 font-light">
                Read real-life recruitment accounts of developers at major companies or share yours.
              </p>
              <div className="flex gap-4">
                {resourcesList.experiences.map((r) => (
                  <a key={r.name} href={r.href} className="text-xs font-mono uppercase tracking-wider text-accent hover:text-neon transition-colors">
                    {r.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Placement Kit */}
            <div className="border border-line-1 p-6 bg-ink-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-neon mb-4 pb-2 border-b border-line-1">
                // Prep Kits
              </h3>
              <div className="space-y-3">
                {resourcesList.placementKit.map((r) => (
                  <a key={r.name} href={r.href} className="flex justify-between items-center group py-1 text-sm font-medium hover:text-neon transition-colors">
                    <span>{r.name}</span>
                    <ChevronRight className="size-4 text-bone/30 group-hover:text-neon group-hover:translate-x-1 transition-all" />
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STUDENT TESTIMONIALS */}
      <section className="px-6 lg:px-10 py-24 border-t border-line-1">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent mb-3 block">/ Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              What Our Community Says
            </h2>
            <p className="text-sm text-bone/50 mt-3 font-light">
              Join thousands of developers who have cracked placement interviews with Let's Code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className="border border-line-1 p-8 bg-ink-2 flex flex-col justify-between">
                <div>
                  <span className="text-5xl font-mono text-accent leading-none select-none">“</span>
                  <p className="text-sm text-bone/85 leading-relaxed font-light mt-2 italic mb-6">
                    {t.quote}
                  </p>
                </div>
                <div className="pt-6 border-t border-line-1 flex items-center gap-4">
                  <div className="size-10 bg-accent text-on-neon font-black text-xs grid place-items-center rounded-sm">
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-bone">{t.name}</h4>
                    <span className="block text-[9px] font-mono text-bone/40">{t.college}</span>
                    <span className="inline-block mt-1 font-mono text-[8px] bg-neon/15 border border-neon/30 text-neon px-1.5 py-0.5 uppercase tracking-wider font-bold">
                      {t.badge} · Batch {t.batch}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH COMMUNITIES */}
      <section className="px-6 lg:px-10 py-24 border-t border-line-1 bg-ink-2/30">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3 block">/ Community Guilds</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
                Join Our Tech Communities
              </h2>
            </div>
            
            {/* Tabs toggle */}
            <div className="flex border border-line-2 p-1 font-mono text-[10px] uppercase">
              <button 
                onClick={() => setActiveCommunityTab("tech")}
                className={`px-4 py-2 font-bold transition-all ${activeCommunityTab === "tech" ? "bg-neon text-on-neon" : "text-bone/60 hover:text-bone"}`}
              >
                Tech Channels
              </button>
              <button 
                onClick={() => setActiveCommunityTab("location")}
                className={`px-4 py-2 font-bold transition-all ${activeCommunityTab === "location" ? "bg-neon text-on-neon" : "text-bone/60 hover:text-bone"}`}
              >
                Location Circles
              </button>
            </div>
          </div>

          {activeCommunityTab === "tech" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {techCommunities.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="bg-ink border border-line-1 p-6 flex flex-col justify-between min-h-[180px] group hover:border-accent transition-colors">
                    <div>
                      <div className="size-8 bg-ink border border-line-2 flex items-center justify-center text-accent group-hover:bg-neon group-hover:text-ink transition-all mb-4">
                        <Icon className="size-4" />
                      </div>
                      <h4 className="text-base font-bold uppercase tracking-wide text-bone mb-2">{c.title}</h4>
                      <p className="text-[11px] text-bone/50 font-light leading-snug">{c.desc}</p>
                    </div>
                    <a href="/dashboard/" className="mt-4 font-mono text-[9px] text-accent/80 uppercase tracking-widest hover:text-neon transition-colors block">
                      Join Channel →
                    </a>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {locationStartups.map((c) => (
                <div key={c.city} className="bg-ink border border-line-1 p-6 flex flex-col justify-between min-h-[180px] group hover:border-accent transition-colors">
                  <div>
                    <div className="size-8 bg-ink border border-line-2 flex items-center justify-center text-accent group-hover:bg-neon group-hover:text-ink transition-all mb-4">
                      <MapPin className="size-4" />
                    </div>
                    <h4 className="text-base font-bold uppercase tracking-wide text-bone mb-2">{c.city} Circle</h4>
                    <p className="text-[11px] text-bone/50 font-light leading-snug">{c.desc}</p>
                  </div>
                  <a href="https://discord.gg/XRBheB9QF9" target="_blank" rel="noopener noreferrer" className="mt-4 font-mono text-[9px] text-accent/80 uppercase tracking-widest hover:text-neon transition-colors block">
                    Join City Discord →
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DEVELOPER NETWORK SECTION */}
      <section className="px-6 lg:px-10 py-24 border-t border-line-1">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6">
            <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent mb-3 block">/ Network</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">
              Connect with Developers<br />
              & Get Hired
            </h2>
            <p className="text-sm text-bone/60 leading-relaxed font-light mb-8 max-w-lg">
              Explore public portfolios of students and professionals on Let's Code. Search by specific skill grids, cities, and hiring ready indicators. Get inspired, collaborate, or hire top talent.
            </p>
            <div className="flex gap-4">
              <a href="/explore/" className="bg-neon text-on-neon px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-bone transition-all">
                Explore Profiles
              </a>
              <a href="/user/dashboard/" className="border border-line-3 px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-colors">
                Create Your Profile
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {[
              ["500+", "Public Profiles"],
              ["1000+", "Developer Skills Listed"],
              ["50+", "Indian Cities Represented"],
              ["100%", "Hiring Ready Verified"],
            ].map(([stat, title]) => (
              <div key={title} className="bg-ink-2 border border-line-1 p-6">
                <div className="text-3xl font-black text-neon mb-1">{stat}</div>
                <div className="font-mono text-[9px] text-bone/50 uppercase tracking-widest leading-snug">{title}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* PARTNERS & COLLABORATORS */}
      <section className="border-t border-line-1 py-16 px-6 lg:px-10 bg-ink-2/10">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-8">
            <span className="font-mono text-[9px] uppercase tracking-widest text-bone/40">Collaborations & Trust</span>
            <h3 className="text-base font-bold uppercase tracking-widest mt-1 text-bone">Our Partners & Collaborators</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 hover:opacity-75 transition-opacity py-4">
            <div className="font-mono text-sm font-black uppercase">Unstop</div>
            <div className="font-mono text-sm font-black uppercase">Titan Capital</div>
            <div className="font-mono text-sm font-black uppercase">Beehiiv</div>
            <div className="font-mono text-sm font-black uppercase">MongoDB</div>
            <div className="font-mono text-sm font-black uppercase">AWS Startups</div>
          </div>
          <div className="mt-8 text-center">
            <a href="https://docs.google.com/document/d/145uqZ3cyKJKAuAsbGSbXfWwWokaUhz_zHACpaDYmdlA/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] text-accent hover:text-neon underline tracking-widest uppercase">
              Become a Partner or Collaborate with us
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="border-t border-line-1 py-32 px-6 lg:px-10 bg-gradient-to-b from-ink to-ink-2 text-center">
        <div className="max-w-[1400px] mx-auto">
          <span className="font-mono text-[11px] tracking-[0.25em] uppercase text-accent mb-6 block">/ Placement Engine</span>
          <h2 className="text-[clamp(2.5rem,8vw,7.5rem)] font-black uppercase tracking-tighter leading-[0.85] mb-12">
            Ready to <span className="text-stroke">level up?</span>
          </h2>
          <p className="text-sm text-bone/60 max-w-md mx-auto mb-10 font-light">
            Gain immediate access to mock tests, profile auditors, resumes and the engineer placement network. Always free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/dashboard/job-ready-score/" className="inline-flex items-center justify-center gap-2 bg-neon text-on-neon px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-bone transition-all">
              Check Job Ready Score <ArrowUpRight className="size-4" />
            </a>
            <a href="/dashboard/" className="inline-flex items-center justify-center gap-2 border border-line-3 px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:border-accent hover:text-accent transition-colors bg-ink">
              Open AI Toolkit
            </a>
          </div>
        </div>
      </section>

      {/* RICH DETAILED FOOTER */}
      <footer className="border-t border-line-1 py-16 px-6 lg:px-10 bg-ink">
        <div className="max-w-[1400px] mx-auto">
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
            
            {/* Column 1: Brand details */}
            <div className="col-span-2 space-y-4">
              <a href="/" className="flex items-center gap-2">
                <div className="size-7 grid place-items-center bg-neon text-on-neon">
                  <span className="font-mono text-xs font-bold">{"</>"}</span>
                </div>
                <span className="text-lg font-black tracking-tighter uppercase italic text-bone">
                  Let's Code
                </span>
              </a>
              <p className="text-xs text-bone/50 leading-relaxed font-light max-w-sm">
                AI-powered career tools, 1000+ free resources, and a community of 1 lakh+ engineers — everything you need to land your dream tech job.
              </p>
              <div className="pt-2">
                <span className="block text-[9px] font-mono uppercase text-bone/30 tracking-widest">Office location</span>
                <span className="text-xs text-bone/60 font-light block">New Delhi, India</span>
                <a href="mailto:letscode@lets-code.co.in" className="text-xs text-accent hover:text-neon underline block mt-1 font-mono">
                  letscode@lets-code.co.in
                </a>
              </div>
            </div>

            {/* Column 2: Learning */}
            <div className="space-y-4">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-neon">// Learning</h4>
              <ul className="space-y-2 text-xs text-bone/60 font-light">
                <li><a href="/articles/roadmap/" className="hover:text-neon transition-colors">DSA Roadmap</a></li>
                <li><a href="/articles/roadmap/" className="hover:text-neon transition-colors">System Design</a></li>
                <li><a href="/interview/javascriptinterview/" className="hover:text-neon transition-colors">Interview Questions</a></li>
                <li><a href="/previousyearcodingquestion/tcspyq/" className="hover:text-neon transition-colors">Company PYQs</a></li>
                <li><a href="/100-days-dsa-challenge/" className="hover:text-neon transition-colors">100 Days Challenge</a></li>
                <li><a href="/blogs/" className="hover:text-neon transition-colors">Tech Blogs</a></li>
              </ul>
            </div>

            {/* Column 3: AI Tools */}
            <div className="space-y-4">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-neon">// AI Tools</h4>
              <ul className="space-y-2 text-xs text-bone/60 font-light">
                <li><a href="/dashboard/mocktest/" className="hover:text-neon transition-colors">Mock Interview</a></li>
                <li><a href="/dashboard/optimizeresume/" className="hover:text-neon transition-colors">Resume Optimizer</a></li>
                <li><a href="/dashboard/optimiselinkedin/" className="hover:text-neon transition-colors">LinkedIn Optimizer</a></li>
                <li><a href="/dashboard/job-ready-score/" className="hover:text-neon transition-colors">Job Ready Score</a></li>
                <li><a href="/dashboard/job-finder/" className="hover:text-neon transition-colors">AI Job Finder</a></li>
                <li><a href="/dashboard/cover-letter/" className="hover:text-neon transition-colors">Cover Letter AI</a></li>
              </ul>
            </div>

            {/* Column 4: Community & Support */}
            <div className="space-y-4">
              <h4 className="font-mono text-[10px] uppercase tracking-widest text-neon">// Community</h4>
              <ul className="space-y-2 text-xs text-bone/60 font-light">
                <li><a href="/interview-experience/" className="hover:text-neon transition-colors">Interview Experiences</a></li>
                <li><a href="/startups-list/" className="hover:text-neon transition-colors">Startup Directory</a></li>
                <li><a href="/explore/" className="hover:text-neon transition-colors">Explore Profiles</a></li>
                <li><a href="/jobs/" className="hover:text-neon transition-colors">Job Opportunities</a></li>
                <li><a href="https://topmate.io/letscode/2128688" target="_blank" rel="noopener noreferrer" className="hover:text-neon transition-colors text-accent">Premium Formats ↗</a></li>
              </ul>
            </div>

          </div>

          <hr className="border-line-1 mb-8" />

          {/* Bottom links and legal */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono tracking-wider text-bone/40 uppercase">
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="/about/" className="hover:text-neon">About Us</a>
              <a href="/privacy-policy/" className="hover:text-neon">Privacy Policy</a>
              <a href="/terms-and-conditions/" className="hover:text-neon">Terms of Service</a>
              <a href="/terms-of-refund/" className="hover:text-neon">Refund Policy</a>
              <a href="/help-center/" className="hover:text-neon">Help Center</a>
              <a href="/contact/" className="hover:text-neon">Contact</a>
            </div>
            <div>
              © 2026 Let's Code · Made with ❤️ for developers · <a href="/sitemappost.xml" className="hover:text-neon">Sitemap</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}

// Simple Helper for Arrow Down in Startup Article
function ArrowDownLink({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
