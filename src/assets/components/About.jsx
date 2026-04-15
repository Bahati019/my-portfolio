import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaBriefcase, FaCode, FaTrophy } from 'react-icons/fa';

function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Animated counter
    const AnimatedCounter = ({ end, duration = 2, suffix = '' }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!inView) return;

            let startTime;
            const animate = (timestamp) => {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / (duration * 1000);

                if (progress < 1) {
                    setCount(Math.floor(end * progress));
                    requestAnimationFrame(animate);
                } else {
                    setCount(end);
                }
            };

            requestAnimationFrame(animate);
        }, [inView, end, duration]);

        return <span>{count}{suffix}</span>;
    };

    const experiences = [
        {
            year: '2024 - Present',
            title: 'Frontend Developer',
            company: 'Freelance',
            description: 'Building modern, responsive web applications for clients using React, TypeScript, and Tailwind CSS. Focusing on performance optimization and accessibility.',
            icon: FaBriefcase,
        },
        {
            year: '2023 - 2024',
            title: 'Self-Taught Developer',
            company: 'Personal Projects',
            description: 'Completed multiple full-stack projects including e-commerce platforms, weather apps, and mobile applications. Mastered React, React Native, and modern web development practices.',
            icon: FaCode,
        },
        {
            year: '2019 - 2023',
            title: 'Bachelor of Science in Computer Science',
            company: 'Maasai Mara University',
            description: 'Studied fundamentals of computer science, algorithms, data structures, and web development. Built strong foundation in programming principles.',
            icon: FaGraduationCap,
        },
    ];

    const stats = [
        { label: 'Years Experience', value: 2, suffix: '+' },
        { label: 'Projects Completed', value: 10, suffix: '+' },
        { label: 'Technologies', value: 15, suffix: '+' },
        { label: 'Happy Clients', value: 5, suffix: '+' },
    ];

    return (
        <section id="about" className="section-container" ref={ref}>
            <h2 className="section-title">About Me</h2>

            {/* Stats Grid */}
            <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.5)' }}
                    >
                        <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-500 mb-2">
                            {inView && <AnimatedCounter end={stat.value} suffix={stat.suffix} />}
                        </div>
                        <p className="text-slate-400 text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </motion.div>

            {/* About Text */}
            <motion.div
                className="max-w-3xl mx-auto mb-16 text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                    I'm a passionate frontend developer who loves creating beautiful, functional, and user-friendly web experiences.
                    My journey into web development started with a curiosity about how websites work, and quickly grew into a deep
                    passion for building digital solutions.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                    I specialize in modern JavaScript frameworks, particularly React and React Native, and I'm always eager to learn
                    new technologies and best practices. When I'm not coding, you'll find me exploring new design trends,
                    contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
            </motion.div>

            {/* Experience Timeline */}
            <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl font-semibold text-center mb-12 text-slate-50">
                    My Journey
                </h3>

                <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />

                    {experiences.map((exp, index) => {
                        const Icon = exp.icon;
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={index}
                                className={`relative flex items-center mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                            >
                                {/* Timeline Icon */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/50 z-10">
                                    <Icon className="text-white text-2xl" />
                                </div>

                                {/* Content Card */}
                                <div className={`ml-24 md:ml-0 md:w-[calc(50%-4rem)] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                    <motion.div
                                        className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
                                        whileHover={{ scale: 1.02, y: -5 }}
                                    >
                                        <div className="text-blue-400 font-semibold mb-2">{exp.year}</div>
                                        <h4 className="text-xl font-bold text-slate-50 mb-1">{exp.title}</h4>
                                        <p className="text-violet-400 text-sm mb-3">{exp.company}</p>
                                        <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default About;
