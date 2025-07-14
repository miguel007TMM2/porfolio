'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { useLocale } from './LocaleProvider';

export default function Projects() {
  const { t } = useLocale();
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con carrito de compras, pagos y panel de administración.",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/tuusuario/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/tuusuario/task-manager",
      demo: "https://task-manager-demo.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Dashboard del clima con gráficos interactivos y pronósticos detallados.",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/tuusuario/weather-dashboard",
      demo: "https://weather-dashboard-demo.surge.sh",
      featured: false
    },
    {
      id: 4,
      title: "Social Media Clone",
      description: "Clon de red social con funcionalidades de posts, likes, comentarios y chat.",
      technologies: ["React Native", "Firebase", "Redux"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/tuusuario/social-clone",
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Sitio web de portafolio personal con animaciones y diseño responsivo.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/tuusuario/portfolio",
      demo: "https://miportfolio.dev",
      featured: false
    },
    {
      id: 6,
      title: "API REST Blog",
      description: "API REST completa para un blog con autenticación JWT y documentación Swagger.",
      technologies: ["Express.js", "JWT", "Swagger", "MySQL"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/tuusuario/blog-api",
      demo: null,
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            {t.projects.title} <span className="gradient-text">{t.projects.subtitle}</span>
          </motion.h2>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Folder className="text-blue-600" />
              {t.projects.featuredProjects}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.filter(project => project.featured).map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                    <Folder size={64} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github size={16} />
                        {t.projects.viewCode}
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 gradient-bg text-white rounded-lg hover:shadow-lg transition-all"
                        >
                          <ExternalLink size={16} />
                          {t.projects.viewDemo}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8">{t.projects.otherProjects}</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Folder className="text-blue-600" size={24} />
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        <Github size={20} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
