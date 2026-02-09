import React from 'react';
import { motion } from 'framer-motion';
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
    <section id="skills" className="section-container">
      <div className='flex flex-col items-center mb-12'>
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
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        <h3 className="text-2xl text-slate-50 mb-8 border-l-4 border-blue-500 pl-4">Frontend</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-8">
          <SkillCard icon={<FaHtml5 />} label="HTML5" color="#E34F26" />
          <SkillCard icon={<FaCss3Alt />} label="CSS3" color="#1572B6" />
          <SkillCard icon={<FaJs />} label="JavaScript" color="#F7DF1E" />
          <SkillCard icon={<FaReact />} label="React" color="#61DAFB" />
          <SkillCard icon={<SiTailwindcss />} label="Tailwind" color="#38B2AC" />
        </div>
      </motion.div>

      {/* Backend */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={2}
      >
        <h3 className="text-2xl text-slate-50 mb-8 border-l-4 border-blue-500 pl-4">Backend</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-8">
          <SkillCard icon={<FaNode />} label="Node.js" color="#68A063" />
          <SkillCard icon={<SiMongodb />} label="MongoDB" color="#4DB33D" />
        </div>
      </motion.div>

      {/* Tools */}
      <motion.div
        className="mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={3}
      >
        <h3 className="text-2xl text-slate-50 mb-8 border-l-4 border-blue-500 pl-4">Tools</h3>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-8">
          <SkillCard icon={<FaGithub />} label="GitHub" color="#f5f5f5" />
        </div>
      </motion.div>
    </section>
  );
}

// SkillCard Component
function SkillCard({ icon, label, color }) {
  return (
    <motion.div
      className="group bg-slate-800/50 backdrop-blur-md p-8 pt-6 rounded-xl border border-white/10 flex flex-col items-center justify-center text-center gap-4 transition-all duration-300 cursor-default shadow-md shadow-black/5 hover:-translate-y-1 hover:bg-slate-800/90 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300 }}
      viewport={{ once: true }}
    >
      <div className="text-5xl mb-2 drop-shadow-md transition-transform duration-300 group-hover:scale-110" style={{ color }}>
        {icon}
      </div>
      <span className="font-medium text-slate-400 group-hover:text-slate-50 transition-colors duration-300">{label}</span>
    </motion.div>
  );
}

export default Skills;
