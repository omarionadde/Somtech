import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ArrowUpRight, ArrowRight, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';
import { NAV_LINKS, COMPANY_NAME, LOGO_URL } from '../constants';
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
      {/* 2026 Design: Floating Pill Container - Dark Theme Fixed */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 sm:px-6">
        <nav 
          className={`
            w-full max-w-[1200px] transition-all duration-300
            flex items-center justify-between pl-3 pr-3 py-3 rounded-full
            bg-[#0B1E3F]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/20
          `}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 pl-1 group">
             <div className="w-10 h-10 flex items-center justify-center bg-white rounded-full p-2 shadow-lg group-hover:scale-105 transition-transform">
                <img src={LOGO_URL} alt={COMPANY_NAME} className="w-full h-full object-contain" />
             </div>
             <span className="text-xl font-bold text-white tracking-tight hidden sm:block">
               {COMPANY_NAME}
             </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <div className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path}
                  className={`
                    px-4 py-2 rounded-full text-[14px] font-medium transition-all duration-300
                    ${isActive(link.path) 
                      ? 'bg-white/15 text-white shadow-inner backdrop-blur-sm' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'}
                  `}
                >
                  {link.label[lang]}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
             {/* Language */}
             <button 
                onClick={() => setLang(lang === 'en' ? 'so' : 'en')}
                className="flex items-center gap-2 text-gray-300 hover:text-white text-xs font-bold uppercase tracking-wider transition-colors px-2"
              >
                <Globe size={18} /> <span className="hidden sm:inline">{lang}</span>
              </button>

             {/* CTA Button */}
             <Link 
                to="/contact" 
                className="hidden sm:flex bg-[#00E08F] text-[#0B1E3F] px-6 py-3 rounded-full font-bold text-xs hover:bg-white hover:scale-105 transition-all duration-300 items-center gap-2 shadow-[0_0_15px_rgba(0,224,143,0.4)]"
              >
                {lang === 'en' ? "LET'S TALK" : 'NALA HADAL'}
                <ArrowUpRight size={18} />
             </Link>

              {/* Mobile Menu Button */}
             <button 
              onClick={toggleMenu} 
              className="lg:hidden w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white backdrop-blur-md active:scale-95 transition-transform"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#0B1E3F] z-40 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,224,143,0.1),transparent_50%)]"></div>
        <div className="flex flex-col h-full pt-32 px-8 pb-10 overflow-y-auto relative z-10">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link, idx) => (
              <Link 
                key={link.path} 
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-4xl font-bold py-2 flex items-center gap-4 group transition-all duration-500 ${isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <span className={`group-hover:text-[#00E08F] transition-colors ${isActive(link.path) ? 'text-[#00E08F]' : 'text-white'}`}>
                  {link.label[lang]}
                </span>
                <ArrowRight size={24} className="text-[#00E08F] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            ))}
          </div>
          <div className="mt-auto">
             <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="block w-full bg-[#00E08F] text-[#0B1E3F] py-5 rounded-2xl text-center font-bold text-lg shadow-xl shadow-[#00E08F]/20 active:scale-95 transition-transform"
            >
              {lang === 'en' ? 'Start Your Project' : 'Bilow Mashruucaaga'}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const Footer: React.FC = () => {
    const { lang } = useContext(LanguageContext);
    
    return (
        <footer className="bg-[#0B1E3F] text-white pt-24 pb-12 mt-20 relative overflow-hidden">
            {/* 2026 Footer Design: Clean & Structured */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
                    <div className="space-y-6 max-w-sm">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-2">
                                <img src={LOGO_URL} alt={COMPANY_NAME} className="w-full h-full object-contain" />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-white">{COMPANY_NAME}</span>
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            {lang === 'en' 
                            ? "Pioneering the future of general services in East Africa through innovation, reliability, and global standards."
                            : "Hormuudka mustaqbalka adeegyada guud ee Bariga Afrika iyada oo loo marayo hal-abuur, isku halayn, iyo heerar caalami ah."}
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#00E08F] hover:border-[#00E08F] hover:bg-[#00E08F]/10 transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
                        <div>
                            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">{lang === 'en' ? 'Company' : 'Shirkadda'}</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link to="/about" className="hover:text-[#00E08F] transition-colors">About</Link></li>
                                <li><Link to="/services" className="hover:text-[#00E08F] transition-colors">Services</Link></li>
                                <li><Link to="/careers" className="hover:text-[#00E08F] transition-colors">Careers</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">{lang === 'en' ? 'Resources' : 'Khayraadka'}</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link to="/blog" className="hover:text-[#00E08F] transition-colors">Blog</Link></li>
                                <li><Link to="/faq" className="hover:text-[#00E08F] transition-colors">FAQ</Link></li>
                                <li><Link to="/privacy" className="hover:text-[#00E08F] transition-colors">Privacy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} General Services. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-grow pt-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};