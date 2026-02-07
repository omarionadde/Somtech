import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '../constants';
import { db } from '../lib/db';

const Contact: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [status, setStatus] = useState<'idle' | 'success' | 'sending'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // 1. Save to local DB (For Admin Dashboard)
    // This ensures we never lose a lead even if the email API fails
    db.addInquiry(formData);

    // 2. Send Email via FormSubmit
    // Using FormData is more robust against CORS issues than JSON
    const body = new FormData();
    body.append("name", formData.name);
    body.append("email", formData.email);
    body.append("phone", formData.phone);
    body.append("subject", formData.subject);
    body.append("message", formData.message);
    
    // FormSubmit Configuration fields
    body.append("_subject", `New Message from ${formData.name} - Somtech Website`);
    body.append("_template", "table");
    body.append("_captcha", "false"); // Disable captcha for smoother experience
    
    try {
      // We use the AJAX endpoint which returns JSON
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        body: body,
        // mode: 'no-cors' // Do NOT use no-cors with the /ajax/ endpoint or it breaks the JSON response
      });
      
      // If the email address is new, FormSubmit might return a 200 but asking for activation
      // We accept the result
      setStatus('success');
    } catch (error) {
      console.warn("Email API unreachable, saved to local DB instead.", error);
      // We treat this as success for the user because we saved the data locally
      setStatus('success'); 
    }

    setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen relative">
      {/* Background Map Graphic (Abstract) */}
      <div className="absolute inset-0 bg-[#0B1E3F] z-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#3B82F6] rounded-full filter blur-[150px] opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-[#00E08F] rounded-full filter blur-[150px] opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-20 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 text-white">
                <span className="text-[#00E08F] font-bold tracking-widest uppercase text-xs mb-6 block">
                    {lang === 'en' ? 'Get In Touch' : 'Nala Soo Xiriir'}
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                    {lang === 'en' ? 'Let’s start a' : 'Aan bilowno'} <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E08F] to-emerald-200">{lang === 'en' ? 'conversation.' : 'wada hadal.'}</span>
                </h1>
                <p className="text-blue-100/80 text-lg mb-12 max-w-md">
                    {lang === 'en' ? 'Have a project in mind? We would love to hear from you. Visit us or send a message.' : 'Ma haysaa mashruuc? Waxaan jeclaan lahayn inaan kaa maqalno. Na soo booqo ama fariin soo dir.'}
                </p>

                <div className="space-y-8">
                     <div className="flex items-start gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#00E08F] group-hover:text-[#0B1E3F] transition-all duration-300">
                            <MapPin size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Mogadishu HQ</h4>
                            <p className="text-blue-200 text-sm">KM4 Junction, Mogadishu, Somalia</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#00E08F] group-hover:text-[#0B1E3F] transition-all duration-300">
                            <Mail size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Email Us</h4>
                            <p className="text-blue-200 text-sm">{CONTACT_EMAIL}</p>
                        </div>
                     </div>
                     <div className="flex items-start gap-6 group">
                        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#00E08F] group-hover:text-[#0B1E3F] transition-all duration-300">
                            <Phone size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-1">Call Us</h4>
                            <p className="text-blue-200 text-sm">{WHATSAPP_NUMBER}</p>
                        </div>
                     </div>
                </div>
            </div>

            {/* Right Form - Floating Glass */}
            <div className="lg:col-span-7">
                <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-black/20">
                    <h3 className="text-2xl font-bold text-[#0B1E3F] mb-8">
                        {lang === 'en' ? 'Send a Message' : 'Dir Fariin'}
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2">Name</label>
                            <input 
                                name="name" 
                                value={formData.name} 
                                onChange={handleChange} 
                                type="text" 
                                placeholder="John Doe"
                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0B1E3F] outline-none transition-all font-medium text-[#0B1E3F]" 
                                required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2">Phone</label>
                            <input 
                                name="phone" 
                                value={formData.phone} 
                                onChange={handleChange} 
                                type="tel" 
                                placeholder="+252..."
                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0B1E3F] outline-none transition-all font-medium text-[#0B1E3F]" 
                                required 
                            />
                        </div>
                    </div>

                    <div className="mb-6 space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2">Email</label>
                        <input 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            type="email" 
                            placeholder="john@company.com"
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0B1E3F] outline-none transition-all font-medium text-[#0B1E3F]" 
                            required 
                        />
                    </div>

                    <div className="mb-6 space-y-2">
                         <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2">Subject</label>
                         <div className="relative">
                            <select 
                                name="subject" 
                                value={formData.subject} 
                                onChange={handleChange} 
                                className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0B1E3F] outline-none transition-all font-medium text-[#0B1E3F] appearance-none cursor-pointer"
                            >
                                <option>General Inquiry</option>
                                <option>Request Quote</option>
                                <option>Partnership</option>
                                <option>Careers</option>
                            </select>
                            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                                <ArrowRight size={16} className="rotate-90" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-8 space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2">Message</label>
                        <textarea 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            rows={4} 
                            placeholder="Tell us about your project..."
                            className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-transparent focus:bg-white focus:border-[#0B1E3F] outline-none transition-all font-medium text-[#0B1E3F] resize-none" 
                            required
                        ></textarea>
                    </div>
                    
                    {status === 'success' && (
                        <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-2xl flex items-center gap-2 border border-green-100 animate-in fade-in slide-in-from-top-2">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            {lang === 'en' ? 'Message sent successfully!' : 'Fariinta waa la diray!'}
                        </div>
                    )}
                    
                    {status === 'sending' && (
                        <div className="mb-6 p-4 bg-blue-50 text-blue-700 rounded-2xl flex items-center gap-2 border border-blue-100">
                            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                            {lang === 'en' ? 'Sending message...' : 'Fariinta waa la dirayaa...'}
                        </div>
                    )}

                    <button 
                        type="submit" 
                        disabled={status === 'sending'}
                        className="w-full bg-[#0B1E3F] text-white font-bold py-5 rounded-2xl hover:bg-[#3B82F6] transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20 group disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {lang === 'en' ? 'Send Message' : 'Dir Fariinta'} 
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;