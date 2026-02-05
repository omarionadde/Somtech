import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../App';
import { db } from '../lib/db';
import { Project } from '../types';

const Projects: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(db.getProjects());
  }, []);

  return (
    <div className="fade-in py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-somtech-blue mb-4">
                {lang === 'en' ? 'Our Projects' : 'Mashaariicdayada'}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                {lang === 'en' 
                ? "A showcase of our recent work and successful deliveries across various industries." 
                : "Bandhigga shaqadeenii dhawaa iyo guulihii aan ka gaarnay warshado kala duwan."}
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="h-48 overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                        <span className="text-xs font-bold text-somtech-accent uppercase tracking-wider mb-2 block">{project.category}</span>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{project.description[lang]}</p>
                        <button className="text-somtech-blue font-bold text-sm hover:underline">
                            {lang === 'en' ? 'View Details' : 'Eeg Faahfaahinta'}
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
