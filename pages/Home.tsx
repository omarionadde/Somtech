import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ArrowUpRight, ChevronRight, PlayCircle } from 'lucide-react';
import { LanguageContext } from '../App';
import { ICON_MAP, WHATSAPP_NUMBER } from '../constants';
import { db } from '../lib/db';
import { Service, Testimonial } from '../types';

const Home: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [services, setServices] = useState<Service[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setServices(db.getServices());
    setTestimonials(db.getTestimonials());
  }, []);

  return (
    <div className="overflow-hidden bg-[#F8FAFC]">
      {/* 2026 Hero Section: Clean, Dark, Minimalist */}
      <section className="relative min-h-[90vh] flex items-center justify-center -mt-28 bg-[#0B1E3F] rounded-b-[4rem] overflow-hidden">
        {/* Subtle Gradient Orbs */}
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#3B82F6] rounded-full mix-blend-overlay filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#00E08F] rounded-full mix-blend-overlay filter blur-[120px] opacity-10"></div>
        
        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center pt-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#00E08F] text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm animate-fade-in-up">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E08F] animate-pulse"></span>
                {lang === 'en' ? 'The Future of General Services' : 'Mustaqbalka Adeegyada Guud'}
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
                {lang === 'en' ? 'Innovate.' : 'Hal-abuur.'} <br className="md:hidden" />
                <span className="text-white/40"> {lang === 'en' ? 'Connect.' : 'Xiriiri.'} </span> <br className="md:hidden" />
                <span className="text-[#00E08F]"> {lang === 'en' ? 'Grow.' : 'Kobci.'} </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
                {lang === 'en' 
                ? "We simplify complexities. Somtech provides next-generation solutions for businesses ready to scale in East Africa."
                : "Waxaan fududeynaa waxyaabaha adag. Somtech waxay bixisaa xalal casri ah ganacsiyada u diyaar ah inay koraan."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:300ms]">
                <Link to="/contact" className="bg-[#00E08F] text-[#0B1E3F] font-bold text-sm px-8 py-4 rounded-full transition-all hover:bg-white hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(0,224,143,0.3)]">
                    {lang === 'en' ? 'Start Project' : 'Bilow Mashruuc'} <ArrowUpRight size={18}/>
                </Link>
                <div className="flex items-center gap-4 justify-center px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full bg-white text-[#0B1E3F] flex items-center justify-center">
                        <PlayCircle size={16} fill="currentColor" />
                    </div>
                    <span className="text-white font-bold text-sm">{lang === 'en' ? 'How We Work' : 'Sida Aan U Shaqeyno'}</span>
                </div>
            </div>
        </div>
      </section>

      {/* Stats / Trust Banner */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center border border-gray-100">
            {[
                { num: '500+', label: 'Clients' },
                { num: '98%', label: 'Satisfaction' },
                { num: '24/7', label: 'Support' },
                { num: '10+', label: 'Years' }
            ].map((stat, i) => (
                <div key={i} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#0B1E3F] mb-1">{stat.num}</div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
            ))}
        </div>
      </div>

      {/* Services Section - Clean Cards */}
      <section className="py-32 relative">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3F] tracking-tight mb-4">
                        {lang === 'en' ? 'Our Expertise' : 'Khibaradeena'}
                    </h2>
                    <p className="text-gray-500 text-lg max-w-md">
                         {lang === 'en' ? 'Tailored solutions for modern challenges.' : 'Xalal gaar ah oo loogu talagalay caqabadaha casriga ah.'}
                    </p>
                </div>
                <Link to="/services" className="text-[#0B1E3F] font-bold border-b-2 border-[#0B1E3F] pb-1 hover:text-[#00E08F] hover:border-[#00E08F] transition-colors">
                    {lang === 'en' ? 'View All Services' : 'Eeg Dhammaan Adeegyada'}
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, 6).map((service) => {
                     const Icon = ICON_MAP[service.iconName] || ICON_MAP['Briefcase'];
                     return (
                        <Link 
                            key={service.id} 
                            to={`/services/${service.id}`}
                            className="group bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#0B1E3F]/5 transition-all duration-500 hover:-translate-y-1 flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-[#0B1E3F]/5 rounded-2xl flex items-center justify-center text-[#0B1E3F] mb-8 group-hover:bg-[#00E08F] group-hover:text-[#0B1E3F] transition-colors duration-500">
                                <Icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-[#0B1E3F] mb-3">{service.title[lang]}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                                {service.description[lang]}
                            </p>
                            <div className="flex items-center gap-2 text-[#0B1E3F] font-bold text-sm group-hover:gap-3 transition-all">
                                <span>{lang === 'en' ? 'Learn more' : 'Sii akhri'}</span>
                                <ArrowRight size={16} className="text-[#00E08F]" />
                            </div>
                        </Link>
                     );
                })}
            </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
         <div className="container mx-auto bg-[#0B1E3F] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,224,143,0.1),transparent_70%)]"></div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                    {lang === 'en' ? 'Ready to transform your business?' : 'Diyaar ma u tahay inaad beddesho ganacsigaaga?'}
                </h2>
                <p className="text-xl text-gray-400">
                    {lang === 'en' ? 'Join hundreds of successful companies trusting Somtech.' : 'Ku biir boqolaal shirkadood oo guuleystay oo aaminsan Somtech.'}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Link to="/contact" className="bg-[#00E08F] text-[#0B1E3F] font-bold px-10 py-4 rounded-full hover:bg-white transition-all shadow-lg hover:shadow-xl">
                        {lang === 'en' ? 'Get Started Now' : 'Bilow Hadda'}
                    </Link>
                    <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`} className="bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all">
                        WhatsApp
                    </a>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;