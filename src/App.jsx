import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './assets/M dev.png';
import { 
  FiGithub, 
  FiLinkedin, 
  FiMail, 
  FiGlobe,
  FiExternalLink,
  FiChevronDown,
  FiCode,
  FiLayers,
  FiMonitor,
  FiSmartphone
} from "react-icons/fi";
import { 
  FaReact, 
  FaWordpress, 
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiTailwindcss, 
  SiFramer,
  SiNextdotjs,
  SiExpress,
  SiPhp,
  SiMysql
} from "react-icons/si";
import { DiLaravel } from 'react-icons/di';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "WordPress Plugin",
    description: "Custom WordPress plugin for advanced analytics integration",
    tags: ["WordPress", "PHP", "MySQL", "JavaScript"],
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "https://sivaramaswami.media/audio/"
  },
  {
    id: 3,
    title: "Corporate Website",
    description: "High-performance website for a Fortune 500 company",
    tags: ["Next.js", "Tailwind CSS", "Headless CMS"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "https://hilltech-bd.com"
  },
  {
    id: 4,
    title: "WordPress Website",
    description: "Highperformance and modern wordpress website",
    tags: ["WordPress", "PHP", "MySQL", "JavaScript"],
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "https://camedgroup.com/"
  },
  {
    id: 5,
    title: "WordPress Website",
    description: "Modern UI agency website",
    tags: ["WordPress", "PHP", "MySQL", "JavaScript"],
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#",
    live: "https://parkcitybjj.com/"
  },
  {
    id: 6,
    title: "Drone Brouchere Website",
    description: "Modern UI drone photography website",
    tags: ["Laravel", "PHP", "MySQL", "JavaScript", "blade"],
    image: "https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    github: "#https://github.com/mohimanul15/laravel-drone-project",
    live: "https://drone.free.nf"
  }
];

const experience = [
  {
    company: "Digital Visibility Concepts",
    role: "Web Developer",
    location: "California, USA",
    period: "2022 - Present",
    responsibilities: [
      "Developed and maintained responsive web applications",
      "Implemented SEO best practices",
      "Collaborated with design team to create UI components"
    ]
  },
  {
    company: "NOC Media KFT",
    role: "Plugin Developer",
    location: "Frankfurt, Germany",
    period: "2020 - 2022",
    responsibilities: [
      "Created custom WordPress plugins",
      "Optimized database performance",
      "Integrated third-party APIs"
    ]
  },
  {
    company: "Soul Art Media Agency",
    role: "Junior WordPress Dev",
    location: "Hungary",
    period: "2018 - 2020",
    responsibilities: [
      "Built WordPress themes from scratch",
      "Maintained client websites",
      "Troubleshoot technical issues"
    ]
  }
];

const skills = [
  { icon: <FaReact size={24} />, name: "React", level: 90 },
  { icon: <FaNodeJs size={24} />, name: "Node.js", level: 85 },
  { icon: <SiMongodb size={24} />, name: "MongoDB", level: 80 },
  { icon: <FaWordpress size={24} />, name: "WordPress", level: 95 },
  { icon: <SiTailwindcss size={24} />, name: "Tailwind", level: 90 },
  { icon: <SiNextdotjs size={24} />, name: "Next.js", level: 75 },
  { icon: <SiExpress size={24} />, name: "Express", level: 80 },
  { icon: <SiPhp size={24} />, name: "PHP", level: 85 },
  { icon: <SiMysql size={24} />, name: "MySQL", level: 75 },
  { icon: <FaHtml5 size={24} />, name: "HTML5", level: 95 },
  { icon: <FaCss3Alt size={24} />, name: "CSS3", level: 90 },
  { icon: <FaJs size={24} />, name: "JavaScript", level: 85 },
  { icon: <DiLaravel size={24} />, name: "Laravel", level: 70 }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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

const App = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [expandedExperience, setExpandedExperience] = useState(null);

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => tag.toLowerCase() === activeTab.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.a 
            href="#" 
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img src={Logo} alt="Site Logo" srcset="" width="120" height="auto"/>
          </motion.a>
          
          <motion.div 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a href="#home" className="hover:text-cyan-400 transition">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
            <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
            <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
            <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
          </motion.div>
          
          <motion.button 
            className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Hire Me
          </motion.button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col md:flex-row items-center"
          >
            <motion.div variants={fadeIn} className="md:w-1/2 mb-12 md:mb-0">
              <motion.p 
                className="text-cyan-400 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Hi, I'm
              </motion.p>
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                  Mohimanul I.
                </span>
                <br />
                Web Developer
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-400 mb-8 max-w-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Full Stack Developer specializing in MERN stack and Senior WordPress Developer with international experience across Europe and North America.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
                  View Projects
                </button>
                <button className="border border-cyan-600 text-cyan-400 hover:bg-cyan-900/30 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
                  Download CV
                </button>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-75"></div>
                <div className="relative bg-gray-800 rounded-2xl p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Developer working" 
                    className="rounded-xl w-full max-w-md"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About <span className="text-cyan-400">Me</span>
              </h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                I'm a passionate web developer with 5+ years of experience creating modern web applications and websites. I specialize in both frontend and backend development, delivering high-quality solutions to clients worldwide.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div 
                variants={fadeIn}
                className="bg-gray-800 p-8 rounded-xl text-center"
                whileHover={{ y: -10 }}
              >
                <div className="bg-cyan-900/20 text-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCode size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
                <p className="text-gray-400">
                  Building responsive, interactive user interfaces with React, Next.js, and modern CSS frameworks.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="bg-gray-800 p-8 rounded-xl text-center"
                whileHover={{ y: -10 }}
              >
                <div className="bg-cyan-900/20 text-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiLayers size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Backend Development</h3>
                <p className="text-gray-400">
                  Creating robust APIs and server-side applications with Node.js, Express, and MongoDB.
                </p>
              </motion.div>

              <motion.div 
                variants={fadeIn}
                className="bg-gray-800 p-8 rounded-xl text-center"
                whileHover={{ y: -10 }}
              >
                <div className="bg-cyan-900/20 text-cyan-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiMonitor size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">WordPress Development</h3>
                <p className="text-gray-400">
                  Custom themes, plugins, and full website solutions with WordPress and WooCommerce.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My <span className="text-cyan-400">Skills</span>
              </h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Here are the technologies and tools I work with on a daily basis.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 p-6 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-cyan-400 mr-3">
                      {skill.icon}
                    </div>
                    <h3 className="font-medium">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-cyan-500 h-2.5 rounded-full" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Work <span className="text-cyan-400">Experience</span>
              </h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                My professional journey and the companies I've worked with.
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="space-y-6"
            >
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button 
                    className="w-full p-6 text-left flex justify-between items-center"
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                  >
                    <div>
                      <h3 className="text-xl font-bold">{exp.company}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <span className="text-cyan-400">{exp.role}</span>
                        <span className="text-gray-400 text-sm flex items-center">
                          <FiGlobe className="mr-1" /> {exp.location}
                        </span>
                        <span className="text-gray-400 text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <FiChevronDown 
                      className={`text-gray-400 transition-transform ${expandedExperience === index ? 'rotate-180' : ''}`} 
                      size={20}
                    />
                  </button>
                  
                  <AnimatePresence>
                    {expandedExperience === index && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 overflow-hidden"
                      >
                        <div className="pb-6">
                          <h4 className="font-medium mb-3">Responsibilities:</h4>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((item, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-cyan-400 mr-2">•</span>
                                <span className="text-gray-400">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                My <span className="text-cyan-400">Projects</span>
              </h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                A selection of my recent work across different technologies.
              </p>
            </motion.div>

            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-full p-1 bg-gray-800">
                {['all', 'React', 'WordPress', 'Next.js'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab.toLowerCase())}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeTab === tab.toLowerCase() ? 'bg-cyan-600 text-white' : 'text-gray-400 hover:text-white'}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <motion.div 
              variants={fadeIn}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div 
                  key={project.id}
                  className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700"
                  whileHover={{ y: -10 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-700 text-cyan-400 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.github} 
                        className="text-gray-400 hover:text-white transition flex items-center"
                      >
                        <FiGithub className="mr-2" /> Code
                      </a>
                      <a 
                        href={project.live} 
                        className="text-gray-400 hover:text-white transition flex items-center"
                      >
                        <FiExternalLink className="mr-2" /> Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div 
              variants={fadeIn}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In <span className="text-cyan-400">Touch</span>
              </h2>
              <div className="w-20 h-1 bg-cyan-500 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
              </p>
            </motion.div>

            <motion.div 
              variants={fadeIn}
              className="grid md:grid-cols-2 gap-12"
            >
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Subject"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows="5" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div>
                <div className="bg-gray-800 p-8 rounded-xl h-full">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="bg-cyan-900/20 text-cyan-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <FiMail size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Email</h4>
                        <a href="mailto:contact@example.com" className="text-gray-400 hover:text-cyan-400 transition">
                          Mohimanul15@gmail.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-cyan-900/20 text-cyan-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <FiGlobe size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Based In</h4>
                        <p className="text-gray-400">California, USA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-cyan-900/20 text-cyan-400 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <FiSmartphone size={20} />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Phone</h4>
                        <a href="tel:+1234567890" className="text-gray-400 hover:text-cyan-400 transition">
                          +880 (1521)- 473833
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-700">
                    <h4 className="font-medium mb-4">Connect with me</h4>
                    <div className="flex space-x-4">
                      <a href="https://github.com/mohimanul15" target='_blank' className="bg-gray-700 text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                        <FiGithub size={20} />
                      </a>
                      <a href="https://linkedin.com/in/mohimanul15" target='_blank' className="bg-gray-700 text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                        <FiLinkedin size={20} />
                      </a>
                      <a href="#" className="bg-gray-700 text-gray-300 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition">
                        <FaWordpress size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Moha. Portfolio
              </a>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
              <a href="#home" className="text-gray-400 hover:text-cyan-400 transition">Home</a>
              <a href="#about" className="text-gray-400 hover:text-cyan-400 transition">About</a>
              <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition">Skills</a>
              <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition">Experience</a>
              <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition">Projects</a>
              <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</a>
            </div>
            
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Mohimanul I. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;