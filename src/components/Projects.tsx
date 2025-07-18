"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function Projects() {
  const { t } = useLocale();
  const projects = [
    {
      id: 1,
      title: "Copic Markers E-commerce",
      description:
        "Plataforma de comercio electrónico para la venta de marcadores Copic",
      technologies: [
        "Hydrogen js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GraphQL",
        "Apollo Client",
        "Shopify",
        "DatoCMS",
        "Vercel",
        "KanvasSDK",
        "Supabase",
        "NetSuite",
      ],
      image:
        "https://www.copicmarkers.com/static/img/educational/educational_image.webp",
      site: "https://www.copicmarkers.com",
      featured: true,
    },
    {
      id: 2,
      title: "VacunateRD",
      description:
        "Aplicación de gestión de citas para vacunación COVID-19, Solicitud de Certificado de Vacunación  y Centros de vacunación en República Dominicana",
      technologies: [
        "JavaScript",
        "React",
        "Material UI",
        "Express.js",
        "Node.js",
        "MongoDB",
        "JWT",
        "Axios",
        "Python",
        "Django",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHCQo26Y4H9zjMxGffC9FFwUFyce5MjAY-vA&s",
      site: "https://vacunate.gob.do",
      featured: true,
    },
    {
      id: 3,
      title: "Blog de Notas",
      description:
        "Dashboard de notas con funcionalidades de creación, edición y eliminación.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Nuqs", "Tiptap"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/miguel007TMM2/prueba-tecnica-frontend",
      demo: "https://prueba-tecnica-frontend-lake.vercel.app",
      featured: false,
    },
    {
      id: 6,
      title: "API REST Blog",
      description:
        "API REST completa para un blog con autenticación JWT",
      technologies: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "TypeORM", "JWT"],
      image: "/api/placeholder/400/250",
      github: "https://github.com/miguel007TMM2/prueba-tecnica-backend",
      demo: null,
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
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
            {t.projects.title}{" "}
            <span className="gradient-text">{t.projects.subtitle}</span>
          </motion.h2>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Folder className="text-blue-600" />
              {t.projects.featuredProjects}
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {projects
                .filter((project) => project.featured)
                .map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                        <Folder size={64} className="text-white" />
                      </div>
                    )}
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2">
                        {project.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>

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
                      <div className="flex">
                        {project.site && (
                          <a
                            href={project.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 gradient-bg text-white rounded-lg hover:shadow-lg transition-all"
                          >
                            <ExternalLink size={16} />
                            {t.projects.viewSite}
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
            <h3 className="text-2xl font-bold mb-8">
              {t.projects.otherProjects}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {projects
                .filter((project) => !project.featured)
                .map((project) => (
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
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {project.description}
                    </p>

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
