'use client';

import { motion } from 'framer-motion';
import { Code, Coffee, Heart } from 'lucide-react';
import { useLocale } from './LocaleProvider';
import Image from 'next/image';
export default function About() {
  const { t } = useLocale();
  
  // const skills = [
  //   'JavaScript/TypeScript',
  //   'React/Next.js',
  //   'Node.js',
  //   'GraphQL',
  //   'SQL',
  //   'NoSQL',
  //   'Tailwind CSS',
  //   'Framer Motion',
  //   'CSS',
  //   'HTML',
  //   'Hydrogen',
  //   'Express.js',
  //   'Git/GitHub',
  //   'Asana',
  //   'Figma',
  //   'PostgreSQL',
  //   'TypeORM',
  //   'English (B2)',
  //   'Spanish (Native)',
  // ];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            {t.about.title} <span className="gradient-text">{t.about.subtitle}</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants}>
              <div className="relative">
                <div className="w-96 h-96 mx-auto bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Image
                    src="https://media.licdn.com/dms/image/v2/C4E03AQHI9VOOLOgxWA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1619901644862?e=1755734400&v=beta&t=Juqb9NrRqQZPsW3f8MgKrgzOqZQ0lMwwfrTO07iKC-w"
                    alt="Your Name"
                    layout="fill"
                    objectFit="contain"
                    className="rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Coffee size={32} className="text-gray-800" />
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold flex items-center gap-2">
                <Code className="text-blue-600" />
                {t.about.myStory}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.about.description1}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t.about.description2}
              </p>
              
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Heart className="text-red-500" size={20} />
                <span>{t.about.passion}</span>
              </div>

              {/* <div>
                <h4 className="text-lg font-semibold mb-3">{t.about.technologies}</h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div> */}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
