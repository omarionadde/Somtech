import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { db } from '../lib/db';
import { Service } from '../types';
import { ICON_MAP } from '../constants';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    setServices(db.getServices());
  }, []);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
        {/* Modern Header */}
        <div className="container mx-auto px-6 pt-16 pb-20">
            <div className="max-w-3xl">
                <span className="text-[#00E08F] font-bold tracking-widest uppercase text-xs mb-4 block animate-fade-in-up">
                    {lang === 'en' ? 'Our Capabilities' : 'Awoodeena'}
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-[#0B1E3F] mb-8 leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
                    {lang === 'en' ? 'Services designed for' : 'Adeegyo loo qaabeeyay'} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B1E3F] to-blue-600">{lang === 'en' ? 'growth & scale.' : 'koboca & baaxadda.'}</span>
                </h1>
                <p className="text-gray-500 text-xl leading-relaxed animate-fade-in-up [animation-delay:200ms]">
                    {lang === 'en' 
                    ? "We deliver excellence across multiple sectors, ensuring your business has the robust foundation it needs to thrive in a competitive landscape." 
                    : "Waxaan bixinaa heer sare qaybo badan, annagoo hubinayna in ganacsigaagu helo aasaas adag oo uu ugu baahan yahay inuu ku horumaro."}
                </p>
            </div>
        </div>

        {/* Services List - 2026 Interactive Style */}
        <div className="container mx-auto px-6 pb-32">
            <div className="flex flex-col gap-6">
                {services.map((service, idx) => {
                    const Icon = ICON_MAP[service.iconName] || ICON_MAP['Briefcase'];
                    return (
                        <Link 
                            key={service.id} 
                            to={`/services/${service.id}`}
                            className="group relative bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#0B1E3F]/10 transition-all duration-500 overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12 hover:-translate-y-1"
                        >
                            {/* Hover Gradient Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E3F]/0 via-[#0B1E3F]/0 to-[#0B1E3F]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Icon Box */}
                            <div className="w-20 h-20 bg-[#F8FAFC] rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-[#0B1E3F] transition-colors duration-500 relative z-10">
                                <Icon strokeWidth={1.5} size={36} className="text-[#0B1E3F] group-hover:text-[#00E08F] transition-colors duration-500" />
                            </div>

                            {/* Content */}
                            <div className="flex-1 relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#0B1E3F] mb-3">
                                    {service.title[lang]}
                                </h3>
                                <p className="text-gray-500 text-lg leading-relaxed max-w-2xl group-hover:text-gray-600 transition-colors">
                                    {service.description[lang]}
                                </p>
                            </div>

                            {/* Action Arrow */}
                            <div className="w-16 h-16 rounded-full border border-gray-100 flex items-center justify-center shrink-0 group-hover:bg-[#00E08F] group-hover:border-[#00E08F] transition-all duration-500 relative z-10">
                                <ArrowUpRight size={28} className="text-gray-300 group-hover:text-[#0B1E3F] group-hover:rotate-45 transition-all duration-500" />
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