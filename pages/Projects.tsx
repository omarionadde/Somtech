import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../App';
import { db } from '../lib/db';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(db.getProjects());
  }, []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      <div className="container mx-auto px-6 pt-16 pb-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
             <div className="max-w-2xl">
                <span className="text-[#00E08F] font-bold tracking-widest uppercase text-xs mb-4 block">
                    {lang === 'en' ? 'Portfolio' : 'Mashaariicda'}
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-[#0B1E3F] mb-6">
                    {lang === 'en' ? 'Selected Work' : 'Shaqooyinka Xulan'}
                </h1>
                <p className="text-gray-500 text-lg">
                    {lang === 'en' 
                    ? "A showcase of our impact across industries. Real results for real clients." 
                    : "Bandhigga saameynta aan ku leenahay warshadaha. Natiijooyin dhab ah oo loo sameeyay macaamiil dhab ah."}
                </p>
            </div>
            <div className="hidden md:block text-right">
                <p className="text-6xl font-bold text-gray-200">2024</p>
                <p className="text-gray-400 text-sm font-medium tracking-wider uppercase">Collection</p>
            </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[400px]">
            {projects.map((project, idx) => (
                <div 
                    key={project.id} 
                    className={`
                        group relative rounded-[2.5rem] overflow-hidden cursor-pointer
                        ${idx === 0 || idx === 3 ? 'md:col-span-2' : ''}
                    `}
                >
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3F] via-[#0B1E3F]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md text-[#00E08F] text-xs font-bold uppercase tracking-wider rounded-full mb-4 border border-white/10">
                                    {project.category}
                                </span>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-300 text-sm md:text-base max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {project.description[lang]}
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-[#00E08F] rounded-full flex items-center justify-center text-[#0B1E3F] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100">
                                <ArrowUpRight size={24} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;