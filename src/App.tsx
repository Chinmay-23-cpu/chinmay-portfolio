/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profile from "./assets/profile.jpg";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Terminal, 
  Globe, 
  Database, 
  GitBranch, 
  BookOpen, 
  Palette, 
  Brain,
  ChevronRight,
  Send,
  User,
  Cpu,
  GraduationCap,
  Briefcase
} from 'lucide-react';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

const skills = [
  { name: 'C', icon: <Terminal className="w-6 h-6" />, category: 'Languages' },
  { name: 'Java', icon: <Cpu className="w-6 h-6" />, category: 'Languages' },
  { name: 'HTML', icon: <Globe className="w-6 h-6" />, category: 'Web' },
  { name: 'CSS', icon: <Palette className="w-6 h-6" />, category: 'Web' },
  { name: 'DSA', icon: <Brain className="w-6 h-6" />, category: 'Fundamentals' },
  { name: 'Git', icon: <GitBranch className="w-6 h-6" />, category: 'Tools' },
  { name: 'GitHub', icon: <Github className="w-6 h-6" />, category: 'Tools' },
];

const interests = [
  { name: 'Reading Fiction', icon: <BookOpen className="w-5 h-5" /> },
  { name: 'Portrait Drawing', icon: <Palette className="w-5 h-5" /> },
  { name: 'Logical Puzzles', icon: <Brain className="w-5 h-5" /> },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const scrollPosition = window.scrollY + 100;
      const current = sections.find(section => {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          return scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight;
        }
        return false;
      });
      if (current) setActiveSection(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            CHINMAY<span className="text-cyan-400">.</span>BHAT
          </motion.div>
          
          <div className="hidden md:flex items-center gap-8">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${activeSection === section.id ? 'text-cyan-400' : 'text-white/60'}`}
              >
                {section.label}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all"
          >
            Let's Talk
          </motion.a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Available for opportunities
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
                Hi, I am <br />
                <span className="text-gradient">Chinmay Bhat</span>
              </h1>
              <p className="text-lg md:text-xl text-white/40 mb-8 font-medium tracking-[0.2em] uppercase">welcome</p>
              
              <p className="text-xl md:text-2xl text-white/60 font-medium mb-8 max-w-xl leading-relaxed">
                Aspiring Software Developer · Computer Science Student · Web Development Enthusiast
              </p>
              <p className="text-white/40 mb-10 max-w-lg leading-relaxed">
                Passionate about building modern web applications and continuously improving programming skills. Currently pursuing B.E. in Computer Science at Bapuji Institute of Engineering and Technology, Davangere.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="#portfolio"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl bg-cyan-500 text-black font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  View Projects <ChevronRight className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all"
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -20, 0] 
              }}
              transition={{ 
                opacity: { duration: 1, ease: "easeOut" },
                scale: { duration: 1, ease: "easeOut" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl" 
                />
                <div className="relative w-full h-full rounded-full border-2 border-white/10 p-4 backdrop-blur-sm">
                  <img 
                    src={profile} 
                    alt="Chinmay Bhat" 
                    className="w-full h-full rounded-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <User className="w-6 h-6 text-cyan-400" /> Introduction
              </h3>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  I am Chinmay Bhat, a Computer Science student and I am deeply interested in software development and modern web technologies. I enjoy exploring programming concepts and building practical projects that strengthen my development skills.
                </p>
                <p>
                  Currently pursuing a Bachelor of Engineering in Computer Science, I am focused on mastering programming fundamentals, web development technologies, and data structures.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="glass-card p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Palette className="w-5 h-5 text-cyan-400" /> Personal Interests
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {interests.map((interest, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
                      <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                        {interest.icon}
                      </div>
                      <span className="font-medium text-white/80">{interest.name}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card p-8 bg-gradient-to-br from-cyan-500/10 to-transparent">
                <p className="text-white/80 italic leading-relaxed">
                  "These interests help develop both my creative thinking and analytical problem-solving abilities."
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
                className="glass-card p-6 flex flex-col items-center text-center group transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h4 className="font-bold text-lg mb-1">{skill.name}</h4>
                <span className="text-xs text-white/40 uppercase tracking-widest">{skill.category}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-white/60 leading-relaxed">
              I am currently working on improving my development skills and building new projects. This section will soon showcase web applications, programming projects, and problem-solving implementations that demonstrate my technical abilities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card overflow-hidden group"
              >
                <div className="aspect-video bg-white/5 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Briefcase className="w-12 h-12 text-white/10 group-hover:text-cyan-400/50 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="h-2 w-12 bg-cyan-500/20 rounded-full mb-4" />
                  <h4 className="text-xl font-bold mb-2">Project {i}</h4>
                  <p className="text-sm text-white/40 mb-6">Coming Soon</p>
                  <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                    <Github className="w-4 h-4" /> Placeholder
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-24">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/10"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
              <div className="glass-card p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gradient">Bachelor of Engineering in Computer Science</h3>
                    <p className="text-lg text-white/80 font-medium">Bapuji Institute of Engineering and Technology</p>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-bold text-cyan-400">
                    2024 — 2028
                  </div>
                </div>
                <div className="flex items-center gap-6 text-white/40">
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Davangere, India
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4" /> Expected Graduation: 2028
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 mb-20">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-bold mb-8">Contact Info</h3>
                <div className="space-y-6">
                  <a href="mailto:bhatchinmay172@gmail.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">Email</p>
                      <p className="font-medium">bhatchinmay172@gmail.com</p>
                    </div>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <Linkedin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs text-white/40 uppercase font-bold tracking-widest mb-1">LinkedIn</p>
                      <p className="font-medium">Chinmay Bhat</p>
                    </div>
                  </a>
                </div>
              </motion.div>
              
              <div className="p-8 glass-card bg-cyan-500/5">
                <p className="text-sm text-white/60 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 glass-card p-8 md:p-10"
            >
              <form
                className="space-y-6"
                 action="https://formspree.io/f/mlgpwnap"
                   method="POST"
                >
                   <input
                      type="hidden"
                      name="_next"
                      value="https://chinmay-portfolio.vercel.app/"
                    />
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Email</label>
                    <input 
                      type="email"
                      name="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 outline-none transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/40 uppercase tracking-widest">Message</label>
                  <textarea
                    name="message" 
                    rows={4}
                    placeholder="Your message here..."
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-cyan-500/50 focus:bg-white/10 outline-none transition-all resize-none"
                  />
                </div>
                <button className="w-full py-4 rounded-xl bg-cyan-500 text-black font-bold flex items-center justify-center gap-2 hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Chinmay Bhat. Built with React & Tailwind.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/Chinmay-23-cpu" className="text-white/40 hover:text-cyan-400 transition-colors"></a>
            <a href="https://www.linkedin.com/in/chinmay-bhat-840b9532a" className="text-white/40 hover:text-blue-400 transition-colors"></a>
            <a href="mailto:bhatchinmay172@gmail.com" className="text-white/40 hover:text-red-400 transition-colors"></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
