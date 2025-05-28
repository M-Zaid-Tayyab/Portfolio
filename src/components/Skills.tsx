import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code,
  Database,
  GitBranch,
  Globe,
  Layers,
  Server,
  Terminal,
  Cloud,
} from "lucide-react";

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("technical");
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const technicalSkills = [
    { name: "React & React Native", icon: <Globe />, level: 9 },
    { name: "JavaScript / TypeScript", icon: <Code />, level: 9 },
    { name: "Node.js & Express", icon: <Server />, level: 8 },
    { name: "SQL & NoSQL Databases", icon: <Database />, level: 8 },
    { name: "Git & Version Control", icon: <GitBranch />, level: 8 },
    { name: "AWS & Cloud Services", icon: <Cloud />, level: 7 },
  ];

  const softSkills = [
    { name: "Problem Solving", level: 9 },
    { name: "Team Leadership", level: 8 },
    { name: "Communication", level: 9 },
    { name: "Project Management", level: 8 },
    { name: "Agile Methodology", level: 8 },
    { name: "Mentoring", level: 8 },
    { name: "Critical Thinking", level: 9 },
    { name: "Time Management", level: 8 },
  ];

  const activeSkills = activeTab === "technical" ? technicalSkills : softSkills;

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              My{" "}
              <span className="text-primary-600 dark:text-primary-400">
                Skills
              </span>
            </h2>
            <div className="h-1 w-20 bg-accent-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of my technical and soft skills acquired
              over 3+ years of professional experience
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm">
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                    activeTab === "technical"
                      ? "bg-primary-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                  }`}
                  onClick={() => setActiveTab("technical")}
                >
                  Technical Skills
                </button>
                <button
                  type="button"
                  className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                    activeTab === "soft"
                      ? "bg-primary-600 text-white"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700"
                  }`}
                  onClick={() => setActiveTab("soft")}
                >
                  Soft Skills
                </button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      {skill.icon && (
                        <div className="flex-shrink-0 mr-3">
                          <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                            {skill.icon}
                          </div>
                        </div>
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                          {skill.name}
                        </h3>
                        <div className="flex items-center">
                          <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                            <div
                              className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                              style={{ width: `${(skill.level / 10) * 100}%` }}
                            ></div>
                          </div>
                          <span className="ml-3 text-sm text-gray-600 dark:text-gray-400">
                            {skill.level}/10
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="bg-primary-50 dark:bg-gray-800/50 rounded-xl p-8 border border-primary-100 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies I Work With
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "React Native",
                  "React",
                  "JavaScript",
                  "TypeScript",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "PostgreSQL",
                  "AWS",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full border border-gray-200 dark:border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
