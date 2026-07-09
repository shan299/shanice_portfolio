import { motion } from "framer-motion";
import { 
  Globe, Zap, Coffee, Smartphone, Code2, Terminal, Database, 
  GraduationCap, Smartphone as MobileIcon, Sparkles, MapPin, Target,
  Mail, MessageSquare, ExternalLink, ChevronRight, CheckCircle2,
  GraduationCap as GradCapIcon, Smartphone as PhoneIcon, Calculator, RefreshCw
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Linkedin } from "lucide-react";

export default function Home() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tight cursor-pointer" onClick={() => scrollTo('hero')}>
            Shanice Alima<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            {['Home', 'Skills', 'Projects', 'About', 'Timeline', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-foreground transition-colors hover:text-primary transition-all duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-40">
        
        {/* Hero Section */}
        <section id="home" className="min-h-[80vh] flex flex-col justify-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="relative z-10 space-y-8 max-w-3xl"
          >
            <motion.div variants={itemFadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-primary text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Student Developer
            </motion.div>
            
            <motion.div variants={itemFadeIn} className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-foreground leading-[1.1]">
                Shanice Alima
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-display">
                Student @ Kabarak University · IT
              </p>
            </motion.div>

            <motion.p variants={itemFadeIn} className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I build digital solutions — from web apps to mobile experiences. Currently studying at Kabarak University since 2025, focused on mobile programming and growing every day. Based in Kenya.
            </motion.p>

            <motion.div variants={itemFadeIn} className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={() => scrollTo('projects')}
                className="px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2"
              >
                View My Work <ChevronRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="px-8 py-4 bg-secondary text-foreground font-medium rounded-lg hover:bg-secondary/80 border border-border transition-all"
              >
                Contact Me
              </button>
            </motion.div>

            <motion.div variants={itemFadeIn} className="flex flex-wrap gap-6 pt-12">
              {[
                { label: "Skills", value: "8+" },
                { label: "Projects", value: "2+" },
                { label: "Based in", value: "Kenya" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <span className="text-3xl font-display font-bold text-foreground">{stat.value}</span>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="space-y-2">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">What I Work With</span>
            <h2 className="text-4xl font-bold font-display">Skills & Technologies</h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { name: "HTML & CSS", icon: Globe, level: 85 },
              { name: "JavaScript", icon: Zap, level: 75 },
              { name: "Java", icon: Coffee, level: 80 },
              { name: "Mobile Prog.", icon: MobileIcon, level: 70 },
              { name: "VB.NET", icon: Code2, level: 65 },
              { name: "GitHub", icon: SiGithub, level: 80 },
              { name: "C++", icon: Terminal, level: 60 },
              { name: "Databases", icon: Database, level: 75 },
            ].map((skill, i) => (
              <motion.div 
                key={i} 
                variants={itemFadeIn}
                className="group p-6 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors space-y-4"
              >
                <skill.icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="space-y-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="space-y-2">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">What I've Built</span>
            <h2 className="text-4xl font-bold font-display">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              variants={itemFadeIn}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <GradCapIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">Shanta University System</h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                A university management system built as part of my academic project at Kabarak University. Features student enrollment, academic records, and admin dashboards. Available on GitHub.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Java', 'Databases', 'University System'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href="https://github.com/shan299/shanta-university_group_work" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mt-auto"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div 
              variants={itemFadeIn}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-all flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">Android Task Manager App</h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                A native Android task management application built with Java. Features task creation, priority levels, completion tracking, and a clean mobile UI. Built as part of my mobile programming coursework.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Java', 'Android SDK', 'Mobile Programming', 'XML Layouts'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/shan299/MyTask"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mt-auto"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              variants={itemFadeIn}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">Smart Calculator</h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                A smart calculator application built with Java. Goes beyond basic arithmetic — handles advanced operations with a clean, intuitive interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Java', 'Android', 'Mathematics', 'UI Design'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/shan299/Smart_Calculator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mt-auto"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              variants={itemFadeIn}
              className="bg-card border border-border rounded-2xl p-8 flex flex-col hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-3">Task Flow</h3>
              <p className="text-muted-foreground mb-8 flex-grow">
                A task and workflow management app built with Java. Designed to help users organise, track and move through tasks efficiently with a smooth, intuitive flow.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Java', 'Android', 'Workflow', 'Productivity'].map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://github.com/shan299/Task_flow"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors mt-auto"
              >
                View on GitHub <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div 
              variants={itemFadeIn}
              className="md:col-span-2 border-2 border-dashed border-border rounded-2xl p-12 flex flex-col items-center justify-center text-center space-y-4 hover:border-primary/50 hover:bg-primary/5 transition-colors"
            >
              <Sparkles className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-bold font-display">More Projects Coming Soon</h3>
              <p className="text-muted-foreground">Building more exciting projects. Stay tuned.</p>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section 
          id="about" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="space-y-2">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Who I Am</span>
            <h2 className="text-4xl font-bold font-display">About Me</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed p-6 bg-card border border-border rounded-2xl">
                I joined Kabarak University in 2025 and I'm currently enrolled, building my foundation in software development. I'm passionate about mobile programming and excited to be growing my skills in cybersecurity. I believe in learning by building real projects.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Education</h4>
                    <p className="text-sm text-muted-foreground">Kabarak University</p>
                    <p className="text-sm text-muted-foreground">BSc. Information Technology</p>
                    <p className="text-xs text-primary mt-2">Currently Enrolled — joined 2025</p>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-sm text-muted-foreground">Based in Kenya</p>
                    <p className="text-sm text-muted-foreground">Nakuru / Kabarak area</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 space-y-6">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="font-medium">Current Focus</h4>
              <ul className="space-y-4">
                {[
                  "Mobile Programming & Android Development",
                  "Routing & Switching (Networking)",
                  "Starting journey in Cybersecurity"
                ].map((focus, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Timeline Section */}
        <motion.section 
          id="timeline" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="space-y-2">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Timeline</span>
            <h2 className="text-4xl font-bold font-display">My Journey</h2>
          </div>

          <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 py-4">
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-primary rounded-full ring-4 ring-background" />
              <div className="mb-1 flex items-center gap-3">
                <span className="text-primary font-bold font-display">Now</span>
                <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">Current Focus</span>
              </div>
              <h3 className="text-xl font-bold mb-2">What I'm Working On</h3>
              <p className="text-muted-foreground mb-4">Mobile Programming & Android development, Building real-world projects, Starting my cybersecurity journey.</p>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-border rounded-full ring-4 ring-background" />
              <div className="mb-1 flex items-center gap-3">
                <span className="text-foreground font-bold font-display">2025</span>
                <span className="px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">Skills</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Started Learning</h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {['HTML & CSS', 'JavaScript', 'Java', 'Mobile Programming', 'VB.NET', 'GitHub', 'C++', 'Databases'].map(skill => (
                  <span key={skill} className="px-2 py-1 bg-card border border-border text-muted-foreground text-xs font-medium rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative pl-8 md:pl-12">
              <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-border rounded-full ring-4 ring-background" />
              <div className="mb-1 flex items-center gap-3">
                <span className="text-foreground font-bold font-display">2025</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Joined Kabarak University</h3>
              <p className="text-muted-foreground">Started Bachelor of Science in Information Technology at Kabarak University, Nakuru, Kenya.</p>
            </div>

          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section 
          id="contact" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="space-y-12"
        >
          <div className="space-y-2 text-center">
            <span className="text-primary font-medium tracking-wide uppercase text-sm">Contact Me</span>
            <h2 className="text-4xl font-bold font-display">Get In Touch</h2>
            <p className="text-muted-foreground max-w-xl mx-auto pt-4">I'm open to collaborations, internships, and learning opportunities.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a 
              href="mailto:alimashan29@gmail.com"
              className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all text-center gap-4 group"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Email</h3>
                <p className="text-sm text-muted-foreground break-all">alimashan29@gmail.com</p>
              </div>
            </a>

            <a 
              href="https://wa.me/254705128431"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all text-center gap-4 group"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <MessageSquare className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">+254 705 128 431</p>
              </div>
            </a>

            <a 
              href="https://github.com/shan299"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all text-center gap-4 group"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <SiGithub className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium mb-1">GitHub</h3>
                <p className="text-sm text-muted-foreground">github.com/shan299</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/shanice-sande-381ba43bb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-8 bg-card border border-border rounded-2xl hover:border-primary/50 hover:bg-primary/5 transition-all text-center gap-4 group"
            >
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Linkedin className="w-5 h-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-medium mb-1">LinkedIn</h3>
                <p className="text-sm text-muted-foreground">linkedin.com/in/shanice-sande</p>
              </div>
            </a>
          </div>
        </motion.section>

      </main>

      <footer className="border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-sm text-muted-foreground">
          <p>© 2025 Shanice Alima · Kabarak University, Kenya</p>
          <p className="text-xs text-muted-foreground mt-1">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      </footer>
    </div>
  );
}
