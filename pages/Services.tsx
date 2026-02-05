import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { db } from '../lib/db';
import { Service } from '../types';
import { ICON_MAP } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Services: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setServices(db.getServices());
  }, []);

  return (
    <div className="fade-in">
        <div className="py-20 bg-somtech-surface">
            <div className="container mx-auto px-4 text-center">
                <span className="text-somtech-lightBlue font-bold tracking-widest uppercase text-sm mb-4 block">What We Do</span>
                <h1 className="text-5xl md:text-6xl font-bold text-somtech-blue mb-6">
                    {lang === 'en' ? 'Our Expertise' : 'Khibaradeena'}
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
                    {lang === 'en' 
                    ? "We deliver excellence across multiple sectors, ensuring your business has the support it needs to thrive." 
                    : "Waxaan bixinaa heer sare qaybo badan, annagoo hubinayna in ganacsigaagu helo taageerada uu u baahan yahay si uu u horumaro."}
                </p>
            </div>
        </div>

        <div className="container mx-auto px-4 pb-32">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => {
                    const Icon = ICON_MAP[service.iconName] || ICON_MAP['Briefcase'];
                    return (
                        <Link 
                            key={service.id} 
                            to={`/services/${service.id}`}
                            className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 hover:border-somtech-blue/20 transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-somtech-blue group-hover:bg-somtech-blue group-hover:text-white transition-colors duration-300">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-somtech-accent group-hover:border-transparent transition-all">
                                    <ArrowUpRight size={20} className="text-gray-400 group-hover:text-somtech-blue" />
                                </div>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-somtech-blue transition-colors">
                                {service.title[lang]}
                            </h3>
                            
                            <p className="text-gray-500 leading-relaxed mb-6 flex-grow">
                                {service.description[lang]}
                            </p>
                            
                            <div className="w-full h-1 bg-gray-50 rounded-full overflow-hidden">
                                <div className="h-full bg-somtech-accent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    </div>
  );
};

export default Services;