'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Server, 
  GitBranch,
  Palette,
  Zap
} from 'lucide-react';
import { useLocale } from './LocaleProvider';

export default function Skills() {
  const { t } = useLocale();
  const skillCategories = [
    {
      title: t.skills.categories.frontend,
      icon: <Code className="text-blue-600" size={24} />,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 75 },
        { name: "SASS/SCSS", level: 80 }
      ]
    },
    {
      title: t.skills.categories.backend,
      icon: <Server className="text-green-600" size={24} />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 88 },
        { name: "Python", level: 80 },
        { name: "Django", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: t.skills.categories.database,
      icon: <Database className="text-purple-600" size={24} />,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 82 },
        { name: "Redis", level: 70 },
        { name: "Prisma ORM", level: 88 }
      ]
    },
    {
      title: t.skills.categories.mobile,
      icon: <Smartphone className="text-orange-600" size={24} />,
      skills: [
        { name: "React Native", level: 78 },
        { name: "Expo", level: 80 },
        { name: "Flutter", level: 65 },
        { name: "PWA", level: 85 }
      ]
    },
    {
      title: t.skills.categories.devops,
      icon: <GitBranch className="text-red-600" size={24} />,
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "AWS", level: 70 },
        { name: "Vercel", level: 85 },
        { name: "CI/CD", level: 72 }
      ]
    },
    {
      title: t.skills.categories.design,
      icon: <Palette className="text-pink-600" size={24} />,
      skills: [
        { name: "UI/UX Design", level: 75 },
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 70 },
        { name: "Responsive Design", level: 90 }
      ]
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
            {t.skills.title} <span className="gradient-text">{t.skills.subtitle}</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
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
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          className="h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          initial={{ width: "0%" }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1,
                            ease: "easeOut",
                            delay: categoryIndex * 0.1 + skillIndex * 0.05 
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 dark:bg-blue-900 rounded-full">
                <Code className="text-blue-600" size={24} />
              </div>
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-gray-600 dark:text-gray-400">{t.skills.stats.projects}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-100 dark:bg-green-900 rounded-full">
                <Globe className="text-green-600" size={24} />
              </div>
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-gray-600 dark:text-gray-400">{t.skills.stats.clients}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-purple-100 dark:bg-purple-900 rounded-full">
                <Zap className="text-purple-600" size={24} />
              </div>
              <div className="text-3xl font-bold gradient-text">3+</div>
              <div className="text-gray-600 dark:text-gray-400">{t.skills.stats.years}</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-orange-100 dark:bg-orange-900 rounded-full">
                <GitBranch className="text-orange-600" size={24} />
              </div>
              <div className="text-3xl font-bold gradient-text">1000+</div>
              <div className="text-gray-600 dark:text-gray-400">{t.skills.stats.commits}</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
