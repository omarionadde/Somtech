
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ArrowUpRight, Shield, Zap, Globe2, ChevronRight } from 'lucide-react';
import { LanguageContext } from '../App';
// Import WHATSAPP_NUMBER from constants
import { ICON_MAP, LOGO_URL, WHATSAPP_NUMBER } from '../constants';
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
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24">
        {/* Background Mesh */}
        <div className="absolute inset-0 bg-somtech-blue -z-20">
             <div className="absolute top-0 left-0 w-full h-full bg-hero-mesh opacity-40"></div>
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-somtech-accent/20 rounded-full filter blur-[128px] animate-blob"></div>
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-[128px] animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full px-5 py-2 text-somtech-accent text-[11px] font-black uppercase tracking-[0.2em] mb-10 animate-fade-in-up shadow-2xl">
                <span className="flex h-2 w-2 rounded-full bg-somtech-accent animate-pulse"></span>
                {lang === 'en' ? 'Pioneering General Services' : 'Hormuudka Adeegyada Guud'}
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9] animate-fade-in-up [animation-delay:100ms] italic uppercase">
                {lang === 'en' ? 'Excellence' : 'Heer-Sare'} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-somtech-accent to-white">Without</span> <br />
                {lang === 'en' ? 'Limits' : 'Xuduud'}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms] font-medium">
                {lang === 'en' 
                ? "Somtech delivers integrated corporate solutions, from advanced logistics to IT transformation, powering the future of East African enterprise."
                : "Somtech waxay bixisaa xalal isku dhafan oo shirkadeed, laga bilaabo saadka ilaa isbeddelka IT-ga, oo kobcinaya ganacsiga Bariga Afrika."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up [animation-delay:300ms]">
                <Link to="/contact" className="bg-somtech-accent text-somtech-blue font-black text-sm uppercase tracking-widest px-10 py-5 rounded-2xl btn-glow transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-somtech-accent/20">
                    {lang === 'en' ? 'Get Started' : 'Bilow Hadda'} <ArrowUpRight size={20}/>
                </Link>
                <Link to="/services" className="bg-white/5 backdrop-blur-md text-white font-black text-sm uppercase tracking-widest px-10 py-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                    {lang === 'en' ? 'Our Services' : 'Adeegyada'}
                </Link>
            </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 animate-bounce opacity-30 text-white">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-somtech-accent to-transparent"></div>
        </div>
      </section>

      {/* Brand Trust Bar */}
      <section className="py-12 bg-white border-y border-gray-100">
         <div className="container mx-auto px-6 overflow-hidden">
             <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                <span className="text-2xl font-black italic tracking-tighter">PARTNER_01</span>
                <span className="text-2xl font-black italic tracking-tighter">GLOBAL_LOGISTICS</span>
                <span className="text-2xl font-black italic tracking-tighter">TECH_HORN</span>
                <span className="text-2xl font-black italic tracking-tighter">EAST_TRADE</span>
                <span className="text-2xl font-black italic tracking-tighter">GOV_AFRICA</span>
             </div>
         </div>
      </section>

      {/* About Section - Bold Content */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
                <div className="absolute -inset-4 bg-somtech-accent/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop" alt="Office" className="w-full aspect-[4/5] object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-somtech-blue/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                        <div className="text-somtech-accent font-black text-4xl mb-1 italic tracking-tighter">10+</div>
                        <div className="text-white text-xs font-black uppercase tracking-widest">Years of Excellence</div>
                    </div>
                </div>
            </div>
            
            <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-somtech-blue/5 rounded-lg text-somtech-blue text-[10px] font-black uppercase tracking-widest border border-somtech-blue/10">
                    Corporate Identity
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-somtech-blue leading-none tracking-tighter uppercase italic">
                    Shaping the <br />
                    <span className="text-somtech-accent">Future</span> of <br />
                    Somali Business.
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed font-medium">
                    Somtech is more than a service provider; we are architects of transformation. We combine local wisdom with global standards to deliver unmatched results in corporate consulting, supply chain management, and high-tech implementations.
                </p>
                
                <div className="grid grid-cols-2 gap-8 py-6">
                    <div className="space-y-2">
                        <div className="w-12 h-1 bg-somtech-accent"></div>
                        <h4 className="font-black text-somtech-blue text-sm uppercase">Global Quality</h4>
                        <p className="text-xs text-gray-400 font-bold">Adhering to ISO standards in every project we touch.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="w-12 h-1 bg-somtech-blue"></div>
                        <h4 className="font-black text-somtech-blue text-sm uppercase">Local Trust</h4>
                        <p className="text-xs text-gray-400 font-bold">Deep roots in Mogadishu and surrounding regional states.</p>
                    </div>
                </div>

                <Link to="/about" className="inline-flex items-center gap-4 group">
                    <div className="w-14 h-14 bg-somtech-blue rounded-full flex items-center justify-center text-white group-hover:bg-somtech-accent group-hover:text-somtech-blue transition-all duration-500 shadow-xl">
                        <ArrowRight size={24} />
                    </div>
                    <span className="font-black uppercase tracking-widest text-sm text-somtech-blue group-hover:translate-x-2 transition-transform">Discover Our Story</span>
                </Link>
            </div>
        </div>
      </section>

      {/* Services Section - Modern Layout */}
      <section className="py-32 bg-somtech-surface relative">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-xl">
                    <h2 className="text-5xl md:text-7xl font-black text-somtech-blue tracking-tighter uppercase leading-none mb-6">
                        Integrated <br /> <span className="text-somtech-accent italic">Power.</span>
                    </h2>
                    <p className="text-gray-500 font-bold">Customized solutions designed to handle the most complex requirements of modern industry.</p>
                </div>
                <Link to="/services" className="bg-white px-8 py-4 rounded-2xl border border-gray-100 font-black text-xs uppercase tracking-widest hover:bg-somtech-blue hover:text-white transition-all shadow-xl shadow-gray-200/50">
                    Explore All Solutions
                </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.slice(0, 6).map((service, i) => {
                     const Icon = ICON_MAP[service.iconName] || ICON_MAP['Briefcase'];
                     return (
                        <Link 
                            key={service.id} 
                            to={`/services/${service.id}`}
                            className="group relative bg-white p-10 rounded-[3rem] border border-gray-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="w-16 h-16 bg-somtech-blue/5 rounded-2xl flex items-center justify-center text-somtech-blue mb-8 group-hover:bg-somtech-blue group-hover:text-white transition-all duration-500">
                                <Icon size={32} />
                            </div>
                            <h3 className="text-2xl font-black text-somtech-blue mb-4 uppercase tracking-tighter italic">{service.title[lang]}</h3>
                            <p className="text-gray-400 font-bold text-sm leading-relaxed mb-8 flex-grow">
                                {service.description[lang]}
                            </p>
                            <div className="flex items-center gap-2 text-somtech-accent font-black text-[10px] uppercase tracking-widest">
                                Learn Detail <ChevronRight size={14} />
                            </div>
                        </Link>
                     );
                })}
            </div>
         </div>
      </section>

      {/* Testimonials - Editorial Style */}
      <section className="py-32 bg-somtech-blue text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-somtech-accent/10 rounded-full blur-[120px]"></div>
         <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-24">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic mb-4">Voice of Trust</h2>
                <div className="w-24 h-2 bg-somtech-accent mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
                {testimonials.map((t) => (
                    <div key={t.id} className="bg-white/5 backdrop-blur-xl p-12 rounded-[4rem] border border-white/10 flex flex-col md:flex-row gap-10 items-center md:items-start transition-all hover:bg-white/10">
                        <img src={t.image} alt={t.name} className="w-24 h-24 rounded-3xl object-cover grayscale" />
                        <div className="space-y-6 text-center md:text-left">
                            <div className="flex text-somtech-accent gap-1 justify-center md:justify-start">
                                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor"/>)}
                            </div>
                            <p className="text-xl font-bold leading-relaxed italic">"{t.text[lang]}"</p>
                            <div>
                                <h4 className="font-black text-somtech-accent uppercase tracking-widest text-sm">{t.name}</h4>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 bg-white text-center px-6">
         <div className="max-w-4xl mx-auto space-y-12 animate-fade-in-up">
            <h2 className="text-6xl md:text-9xl font-black text-somtech-blue tracking-tighter uppercase leading-[0.85] italic">
                Let's <br /> Build The <br /> <span className="text-somtech-accent">Next</span> Level.
            </h2>
            <p className="text-xl text-gray-400 font-bold max-w-xl mx-auto">
                Ready to scale? Connect with our team for a high-level strategy session and custom quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact" className="bg-somtech-blue text-white font-black text-sm uppercase tracking-[0.2em] px-12 py-6 rounded-2xl hover:bg-somtech-accent hover:text-somtech-blue transition-all duration-500 shadow-2xl shadow-somtech-blue/20">
                    Launch Partnership
                </Link>
                <a href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`} className="bg-somtech-accent text-somtech-blue font-black text-sm uppercase tracking-[0.2em] px-12 py-6 rounded-2xl shadow-2xl shadow-somtech-accent/20">
                    WhatsApp Strategist
                </a>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
