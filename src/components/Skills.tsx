"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, GitBranch } from "lucide-react";
import { useLocale } from "./LocaleProvider";

export default function Skills() {
  const { t } = useLocale();
  const skillCategories = [
    {
      title: t.skills.categories.frontend,
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        "React/Next.js",
        "Hydrogen",
        "Framer Motion",
        "JavaScript",
        "HTML",
        "CSS",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
    {
      title: t.skills.categories.backend,
      icon: <Server className="text-green-600" size={24} />,
      skills: [
        "Node.js",
        "Express.js",
        "GraphQL",
        "REST APIs",
        "JWT",
      ],
    },
    {
      title: t.skills.categories.database,
      icon: <Database className="text-purple-600" size={24} />,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "TypeORM",
      ],
    },

    {
      title: t.skills.categories.devops,
      icon: <GitBranch className="text-red-600" size={24} />,
      skills: [
        "Git/GitHub",
        "Docker",
        "Vercel",
        "CI/CD",
      ],
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
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
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
            {t.skills.title}{" "}
            <span className="gradient-text">{t.skills.subtitle}</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill}>
                      <div className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                        <span className="font-medium text-sm">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats */}
          
        </motion.div>
      </div>
    </section>
  );
}
