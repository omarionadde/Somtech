import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../App';
import { COMPANY_NAME } from '../constants';
import { Target, Eye, Award, CheckCircle2, Zap, Users } from 'lucide-react';
import { db } from '../lib/db';
import { TeamMember } from '../types';

const About: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    setTeam(db.getTeam());
  }, []);

  return (
    <div className="bg-[#F8FAFC]">
        {/* 2026 Hero Section */}
        <div className="relative bg-[#0B1E3F] text-white pt-32 pb-40 rounded-b-[3rem] overflow-hidden -mt-28">
             {/* Background Effects */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#00E08F] rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3B82F6] rounded-full blur-[100px]"></div>
             </div>

             <div className="container mx-auto px-6 relative z-10 text-center">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 text-[#00E08F] text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                    {lang === 'en' ? 'Who We Are' : 'Waa Kuma Somtech'}
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                    {lang === 'en' ? 'Building the' : 'Dhisidda'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E08F] to-emerald-200">{lang === 'en' ? 'Future' : 'Mustaqbalka'}</span>.
                </h1>
                <p className="text-blue-100/80 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
                    {lang === 'en' 
                        ? "Somtech is more than a service provider. We are the architects of efficiency, bringing global standards to East Africa's growing market."
                        : "Somtech ma aha oo kaliya bixiye adeeg. Waxaan nahay injineerada hufnaanta, annagoo keenayna heerar caalami ah suuqa koraya ee Bariga Afrika."}
                </p>
            </div>
        </div>

        {/* Bento Grid Values Section */}
        <div className="container mx-auto px-6 -mt-20 relative z-20 pb-20">
            <div className="grid md:grid-cols-3 gap-6">
                {/* Mission - Large Card */}
                <div className="md:col-span-2 bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-center relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-4 -mt-4 transition-all group-hover:bg-[#0B1E3F] group-hover:scale-110 duration-500"></div>
                    <Target className="w-12 h-12 text-[#0B1E3F] mb-6 relative z-10 group-hover:text-white transition-colors duration-500" />
                    <h3 className="text-2xl font-bold text-[#0B1E3F] mb-4 relative z-10">{lang === 'en' ? 'Our Mission' : 'Hawlgalkayaga'}</h3>
                    <p className="text-gray-500 text-lg leading-relaxed relative z-10 group-hover:text-gray-800 transition-colors">
                        {lang === 'en' 
                        ? `To empower businesses and improve lives across the region by delivering world-class general services with unmatched reliability.` 
                        : `Si aan u awood-siinno ganacsiyada isla markaana aan u horumarinno nolosha gobolka annagoo bixinayna adeegyo guud oo heer caalami ah.`}
                    </p>
                </div>

                {/* Vision - Tall Card */}
                <div className="bg-[#0B1E3F] p-10 rounded-[2.5rem] shadow-xl text-white flex flex-col justify-between relative overflow-hidden group">
                     <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#00E08F] rounded-full blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div>
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                            <Eye className="w-6 h-6 text-[#00E08F]" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Our Vision' : 'Aragtiyada'}</h3>
                        <p className="text-blue-100/70">
                            {lang === 'en' 
                            ? "To be the undisputed leader in innovation and service delivery in East Africa." 
                            : "Inaan noqono hoggaamiyaha aan lagula tartami karin hal-abuurka iyo bixinta adeegga ee Bariga Afrika."}
                        </p>
                    </div>
                </div>

                {/* Values - Grid */}
                <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
                    {[
                        { icon: Award, title: { en: 'Excellence', so: 'Heer Sare' }, desc: { en: 'We never settle for average.', so: 'Marnaba kuma qancno dhexdhexaad.' } },
                        { icon: Zap, title: { en: 'Innovation', so: 'Hal-abuur' }, desc: { en: 'Constantly evolving solutions.', so: 'Xalal si joogto ah u horumaraya.' } },
                        { icon: CheckCircle2, title: { en: 'Integrity', so: 'Daacadnimo' }, desc: { en: 'Trust is our currency.', so: 'Kalsoonidu waa lacagteena.' } }
                    ].map((val, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                            <val.icon className="w-10 h-10 text-[#00E08F] mb-4" />
                            <h4 className="text-xl font-bold text-[#0B1E3F] mb-2">{val.title[lang]}</h4>
                            <p className="text-gray-500 text-sm">{val.desc[lang]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-bold text-[#0B1E3F] mb-4">{lang === 'en' ? 'Meet the Minds' : 'La Kulmo Hogaanka'}</h2>
                        <p className="text-gray-500">{lang === 'en' ? 'The experts behind our success.' : 'Khubarada ka dambeeya guushayada.'}</p>
                    </div>
                    <button className="px-6 py-3 rounded-full border border-gray-200 text-[#0B1E3F] font-bold hover:bg-[#0B1E3F] hover:text-white transition-all">
                        {lang === 'en' ? 'Join the Team' : 'Ku Biir Kooxda'}
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {team.map((member) => (
                        <div key={member.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-[2rem] mb-6 bg-gray-100">
                                <img src={member.image} alt={member.name} className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        <p className="text-white text-xs font-bold uppercase tracking-wider mb-1">{member.role}</p>
                                        <p className="text-white text-sm opacity-80">Driving innovation at Somtech.</p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold text-[#0B1E3F] group-hover:text-[#00E08F] transition-colors">{member.name}</h3>
                            <p className="text-gray-400 font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export default About;