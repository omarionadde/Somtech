import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { CONTACT_EMAIL, WHATSAPP_NUMBER } from '../constants';
import { db } from '../lib/db';

const Contact: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    db.addInquiry(formData);
    setStatus('success');
    setFormData({ name: '', phone: '', email: '', subject: 'General Inquiry', message: '' });
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="fade-in py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-somtech-blue mb-4">
                {lang === 'en' ? 'Contact Us' : 'Nala Soo Xiriir'}
            </h1>
            <p className="text-gray-600">
                {lang === 'en' ? 'We are here to answer any questions you may have about our services.' : 'Waxaan halkaan u joognaa inaan ka jawaabno su\'aal kasta oo aad qabto.'}
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
                <div className="bg-blue-50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-somtech-blue mb-6">
                        {lang === 'en' ? 'Get In Touch' : 'La Xiriir'}
                    </h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="text-somtech-accent shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900">Location</h4>
                                <p className="text-gray-600">KM4 Junction, Mogadishu, Somalia</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="text-somtech-accent shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900">Phone</h4>
                                <p className="text-gray-600">{WHATSAPP_NUMBER}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Mail className="text-somtech-accent shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900">Email</h4>
                                <p className="text-gray-600">{CONTACT_EMAIL}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Clock className="text-somtech-accent shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold text-gray-900">Working Hours</h4>
                                <p className="text-gray-600">Sat - Thu: 8:00 AM - 5:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="bg-gray-200 h-64 rounded-2xl overflow-hidden relative">
                    <iframe 
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.310123456789!2d45.312345!3d2.034567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMDInMDQuNCJOIDQ1wrAxOCw0NC40IkU!5e0!3m2!1sen!2sso!4v1600000000000!5m2!1sen!2sso" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-somtech-blue mb-6">
                    {lang === 'en' ? 'Send a Message' : 'Dir Fariin'}
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-somtech-blue focus:ring-1 focus:ring-somtech-blue outline-none transition" required />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                        <input name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-somtech-blue focus:ring-1 focus:ring-somtech-blue outline-none transition" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                    <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-somtech-blue focus:ring-1 focus:ring-somtech-blue outline-none transition" required />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                    <select name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-somtech-blue focus:ring-1 focus:ring-somtech-blue outline-none transition">
                        <option>General Inquiry</option>
                        <option>Request Quote</option>
                        <option>Partnership</option>
                        <option>Careers</option>
                    </select>
                </div>
                <div className="mb-8">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-somtech-blue focus:ring-1 focus:ring-somtech-blue outline-none transition" required></textarea>
                </div>
                
                {status === 'success' && (
                    <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
                        {lang === 'en' ? 'Message sent successfully!' : 'Fariinta waa la diray!'}
                    </div>
                )}

                <button type="submit" className="w-full bg-somtech-blue text-white font-bold py-4 rounded-lg hover:bg-blue-900 transition flex items-center justify-center gap-2">
                    {lang === 'en' ? 'Send Message' : 'Dir Fariinta'} <Send size={18} />
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
