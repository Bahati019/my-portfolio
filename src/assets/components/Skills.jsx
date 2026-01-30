import React from 'react';
import { motion } from 'framer-motion';
import '../styles/Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut'
    }
  })
};

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className='skills-container'>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          Skills
        </motion.h2>
      </div>


      {/* Frontend */}
      <motion.div
        className="skills-category"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        <h3 className="skills-subtitle">Frontend</h3>
        <div className="skills-grid">
          <SkillCard icon={<FaHtml5 />} label="HTML5" color="#E34F26" />
          <SkillCard icon={<FaCss3Alt />} label="CSS3" color="#1572B6" />
          <SkillCard icon={<FaJs />} label="JavaScript" color="#F7DF1E" />
          <SkillCard icon={<FaReact />} label="React" color="#61DAFB" />
          <SkillCard icon={<SiTailwindcss />} label="Tailwind" color="#38B2AC" />
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div
        className="skills-category"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={2}
      >
        <h3 className="skills-subtitle">Backend</h3>
        <div className="skills-grid">
          <SkillCard icon={<FaNode />} label="Node.js" color="#68A063" />
          <SkillCard icon={<SiMongodb />} label="MongoDB" color="#4DB33D" />
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div
        className="skills-category"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={3}
      >
        <h3 className="skills-subtitle">Tools</h3>
        <div className="skills-grid">
          <SkillCard icon={<FaGithub />} label="GitHub" color="#181717" />
        </div>
      </motion.div>
    </section>
  );
}

// SkillCard Component
function SkillCard({ icon, label, color }) {
  return (
    <motion.div
      className="skill-card"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      viewport={{ once: true }}
    >
      <div className="skill-icon" style={{ color }}>
        {icon}
      </div>
      <span>{label}</span>
    </motion.div>
  );
}

export default Skills;
