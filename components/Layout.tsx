import React, { useState, useContext, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, MessageCircle, ArrowUpRight, ArrowRight } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME, COMPANY_TAGLINE, CONTACT_EMAIL, WHATSAPP_NUMBER, LOGO_URL } from '../constants';
import { LanguageContext } from '../App';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useContext(LanguageContext);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className={`
          w-full max-w-6xl transition-all duration-500 ease-in-out
          ${scrolled || isOpen ? 'glass-nav shadow-2xl shadow-somtech-blue/5' : 'bg-transparent border-transparent'}
          rounded-full px-6 py-2.5 flex items-center justify-between
        `}>
          
          <Link to="/" className="flex items-center gap-3 group relative z-50">
             <div className="w-12 h-12 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                <img src={LOGO_URL} alt={COMPANY_NAME} className="w-full h-full object-contain" />
             </div>
             <div className="flex flex-col">
               <span className={`text-xl font-extrabold tracking-tighter ${scrolled || isOpen ? 'text-somtech-blue' : 'text-somtech-blue md:text-white'} transition-colors`}>
                 {COMPANY_NAME.toUpperCase()}
               </span>
               <span className={`text-[9px] font-bold tracking-[0.2em] uppercase ${scrolled || isOpen ? 'text-somtech-accent' : 'text-somtech-accent'} transition-colors`}>
                  General Services
               </span>
             </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-somtech-blue/5 backdrop-blur-md p-1 rounded-full border border-somtech-blue/10">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`
                  px-5 py-2 rounded-full text-[13px] font-bold transition-all duration-300
                  ${isActive(link.path) 
                    ? 'bg-somtech-blue text-white shadow-lg' 
                    : scrolled 
                        ? 'text-somtech-blue hover:bg-somtech-blue/10' 
                        : 'text-somtech-blue lg:text-gray-200 hover:bg-white/20'}
                `}
              >
                {link.label[lang]}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
             <button 
                onClick={() => setLang(lang === 'en' ? 'so' : 'en')}
                className={`
                  flex items-center gap-2 px-3 py-2 rounded-full font-bold text-[10px] transition-all
                  ${scrolled ? 'bg-somtech-blue/5 text-somtech-blue' : 'bg-white/10 text-white hover:bg-white/20'}
                `}
              >
                <Globe size={12} /> {lang.toUpperCase()}
              </button>

             <Link 
                to="/contact" 
                className="bg-somtech-accent text-somtech-blue px-6 py-2.5 rounded-full font-extrabold text-xs btn-glow transition-all flex items-center gap-2 group shadow-xl shadow-somtech-accent/20"
              >
                {lang === 'en' ? "LET'S TALK" : 'NALA HADAL'}
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
             </Link>
          </div>

          <div className="lg:hidden flex items-center gap-3 relative z-50">
             <button 
                onClick={() => setLang(lang === 'en' ? 'so' : 'en')}
                className="text-[10px] font-extrabold text-somtech-blue bg-somtech-accent/20 px-2 py-1 rounded"
              >
                {lang.toUpperCase()}
              </button>
            <button 
              onClick={toggleMenu} 
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${scrolled || isOpen ? 'bg-somtech-blue text-white' : 'bg-white text-somtech-blue'}`}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-32 px-8 animate-fade-in-up">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-extrabold py-3 border-b border-gray-100 flex justify-between items-center ${isActive(link.path) ? 'text-somtech-blue' : 'text-gray-300'}`}
              >
                {link.label[lang]}
                <ArrowRight size={24} className={isActive(link.path) ? 'text-somtech-accent' : 'text-gray-200'} />
              </Link>
            ))}
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="mt-8 bg-somtech-blue text-white py-5 rounded-2xl text-center font-extrabold text-lg shadow-2xl shadow-somtech-blue/20"
            >
              {lang === 'en' ? 'GET A QUOTE' : 'DALBO QIIMO'}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export const Footer: React.FC = () => {
    const { lang } = useContext(LanguageContext);
    
    return (
        <footer className="bg-somtech-blue text-white pt-24 pb-8 rounded-t-[4rem] mt-20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-hero-mesh opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                             <div className="w-12 h-12 bg-white rounded-xl p-1">
                                <img src={LOGO_URL} alt="Somtech" className="w-full h-full object-contain" />
                             </div>
                             <span className="text-2xl font-black tracking-tighter italic">{COMPANY_NAME.toUpperCase()}</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed font-medium">
                            {lang === 'en' 
                            ? "Leading general services provider in Somalia, dedicated to innovation, quality, and community growth."
                            : "Bixiyaha adeegyada guud ee hormuudka ka ah Soomaaliya, u heellan hal-abuurka, tayada, iyo koritaanka bulshada."}
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-somtech-accent hover:text-somtech-blue hover:border-transparent transition-all duration-300 shadow-lg">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-somtech-accent">{lang === 'en' ? 'Explore' : 'Baadh'}</h4>
                        <ul className="space-y-4 text-gray-400 font-bold text-sm">
                            <li><Link to="/about" className="hover:text-white transition">About Somtech</Link></li>
                            <li><Link to="/services" className="hover:text-white transition">Core Services</Link></li>
                            <li><Link to="/projects" className="hover:text-white transition">Latest Projects</Link></li>
                            <li><Link to="/blog" className="hover:text-white transition">Company Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-somtech-accent">{lang === 'en' ? 'Support' : 'Taageero'}</h4>
                        <ul className="space-y-4 text-gray-400 font-bold text-sm">
                             <li><Link to="/faq" className="hover:text-white transition">Help Center & FAQ</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition">Privacy & Legal</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition">Contact Us</Link></li>
                            <li><Link to="/admin" className="hover:text-white transition">Partner Login</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-black uppercase tracking-widest mb-8 text-somtech-accent">{lang === 'en' ? 'Location' : 'Xafiiska'}</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10"><MapPin size={18} className="text-somtech-accent"/></div>
                                <span className="text-gray-400 text-sm font-bold pt-1">KM4 Junction, Wadada Maka Al-Mukarama, Mogadishu</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10"><Phone size={18} className="text-somtech-accent"/></div>
                                <span className="text-gray-400 text-sm font-bold">{WHATSAPP_NUMBER}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} GENERAL SERVICES. ALL RIGHTS RESERVED.</p>
                    <p className="mt-4 md:mt-0 flex items-center gap-1">Designed for <span className="text-somtech-accent">2026</span></p>
                </div>
            </div>
        </footer>
    )
}

export const WhatsAppButton: React.FC = () => {
    return (
        <a 
            href={`https://wa.me/${WHATSAPP_NUMBER.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-[#25D366] text-white w-16 h-16 rounded-2xl shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] transition-all hover:scale-110 z-40 flex items-center justify-center group"
            title="Chat on WhatsApp"
        >
            <MessageCircle size={32} className="group-hover:animate-bounce" />
            <span className="absolute right-full mr-4 bg-somtech-blue text-white px-4 py-2 rounded-xl text-xs font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-widest border border-white/10">
                CHAT WITH US
            </span>
        </a>
    );
}

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="font-sans text-somtech-blue min-h-screen flex flex-col bg-somtech-surface selection:bg-somtech-accent selection:text-somtech-blue">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
