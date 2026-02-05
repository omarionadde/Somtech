import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { LanguageContext } from '../App';
import { db } from '../lib/db';
import { Service } from '../types';
import { ICON_MAP } from '../constants';
import { ArrowLeft, CheckCircle2, MessageSquare, ChevronRight, ArrowUpRight } from 'lucide-react';

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [service, setService] = useState<Service | undefined>(undefined);
  const [otherServices, setOtherServices] = useState<Service[]>([]);

  useEffect(() => {
    if (serviceId) {
      const found = db.getServiceById(serviceId);
      if (found) {
        setService(found);
        setOtherServices(db.getServices().filter(s => s.id !== serviceId).slice(0, 3));
      } else {
        navigate('/services');
      }
    }
  }, [serviceId, navigate]);

  if (!service) return null;

  const Icon = ICON_MAP[service.iconName] || ICON_MAP['Briefcase'];

  const benefits = lang === 'en' ? [
    "Comprehensive needs assessment and strategic planning",
    "Expert team with international certifications and local knowledge",
    "Tailored solutions designed for sustainable long-term impact",
    "24/7 technical support and dedicated account management",
    "Scalable implementations that grow with your organization"
  ] : [
    "Qiimaynta baahida dhamaystiran iyo qorshaynta istiraatiijiga ah",
    "Koox khabiiro ah oo haysta shahaadooyin caalami ah iyo aqoon maxalli ah",
    "Xalal gaar ah oo loogu talagalay saameyn waarta oo mustaqbal fog ah",
    "Taageerada farsamada 24/7 iyo maamulka akoonnada gaarka ah",
    "Hirgelinno la ballaarin karo oo la koraaya ururkaaga"
  ];

  return (
    <div className="fade-in pb-20">
      {/* Hero Header */}
      <div className="bg-somtech-blue relative overflow-hidden pt-20 pb-32 rounded-b-[4rem] -mt-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-overlay filter blur-[100px] opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-somtech-accent rounded-full mix-blend-overlay filter blur-[100px] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-white/70 hover:text-somtech-accent transition-colors mb-12 group font-medium">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            {lang === 'en' ? 'Back to Services' : 'Ku laabo Adeegyada'}
          </Link>
          
          <div className="flex flex-col md:flex-row items-start gap-10">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex items-center justify-center shrink-0 shadow-2xl">
               <Icon size={48} className="text-somtech-accent" />
            </div>
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">{service.title[lang]}</h1>
              <p className="text-xl text-blue-100 max-w-3xl leading-relaxed opacity-90">
                {service.description[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl shadow-gray-200/50 border border-gray-100">
              <h2 className="text-3xl font-bold text-somtech-blue mb-8">
                {lang === 'en' ? 'Service Overview' : 'Guudmarka Adeegga'}
              </h2>
              <div className="prose prose-lg prose-blue max-w-none text-gray-600 leading-relaxed space-y-6">
                <p>
                  {lang === 'en' 
                    ? `Our ${service.title.en} is built on a foundation of deep industry expertise and a commitment to excellence. We understand that every client faces unique challenges, which is why our approach is always collaborative and outcome-driven.`
                    : `Adeeggayaga ${service.title.so} wuxuu ku dhisanyahay aqoon qoto dheer iyo ballanqaadka heer sare. Waxaan fahamsanahay in macmiil kasta uu wajahayo caqabado gaar ah, taas oo ah sababta habkayagu had iyo jeer u yahay mid iskaashi iyo natiijo ku salaysan.`}
                </p>
                <p>
                   {lang === 'en'
                    ? "We utilize the latest methodologies and tools to ensure that our solutions are not only efficient but also future-proof. Whether you are looking for local implementation or large-scale transformation, Somtech has the capabilities to deliver."
                    : "Waxaan isticmaalnaa qaababkii iyo qalabkii ugu dambeeyay si aan u hubinno in xalalkayagu aysan ahayn kaliya kuwa waxtar leh laakiin sidoo kale kuwa u diyaarsan mustaqbalka. Haddii aad raadinayso hirgelin maxalli ah ama isbeddel weyn, Somtech waxay leedahay awood ay ku fuliso."}
                </p>
              </div>

              <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">
                  {lang === 'en' ? 'Key Benefits' : 'Faa'iidooyinka Muhiimka ah'}
                </h3>
                <div className="grid md:grid-cols-1 gap-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors">
                      <div className="mt-1 bg-green-100 p-1 rounded-full text-green-600">
                        <CheckCircle2 size={20} />
                      </div>
                      <span className="text-gray-700 font-medium text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA area */}
            <div className="bg-gray-900 rounded-[3rem] p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="absolute top-0 right-0 w-64 h-64 bg-somtech-accent rounded-full filter blur-[80px] opacity-20"></div>
              
              <div className="relative z-10 max-w-md">
                <h3 className="text-3xl font-bold mb-4">
                  {lang === 'en' ? 'Ready to begin?' : 'Diyaar ma u tahay inaad bilowdo?'}
                </h3>
                <p className="text-gray-400">
                  {lang === 'en' 
                    ? "Let's discuss how we can tailor this service to your specific goals."
                    : "Aan ka wada hadalno sida aan ugu habeyn karno adeeggan yoolalkaaga gaarka ah."}
                </p>
              </div>
              <Link to="/contact" className="relative z-10 bg-somtech-accent text-somtech-blue font-bold px-10 py-5 rounded-full hover:bg-white transition-colors flex items-center gap-2 whitespace-nowrap shadow-lg shadow-green-500/20 text-lg">
                {lang === 'en' ? 'Get a Quote' : 'Dalbo Qiimo'} <ArrowUpRight size={20} />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-lg shadow-gray-100">
              <h3 className="text-xl font-bold text-somtech-blue mb-8">
                {lang === 'en' ? 'Related Services' : 'Adeegyada Kale'}
              </h3>
              <div className="space-y-4">
                {otherServices.map(other => {
                  const OtherIcon = ICON_MAP[other.iconName] || ICON_MAP['Briefcase'];
                  return (
                    <Link 
                      key={other.id} 
                      to={`/services/${other.id}`}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-somtech-blue hover:text-white transition-all group"
                    >
                      <div className="w-12 h-12 bg-white text-somtech-blue rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                        <OtherIcon size={20} />
                      </div>
                      <span className="font-bold text-sm leading-tight">{other.title[lang]}</span>
                      <ChevronRight size={16} className="ml-auto opacity-50 group-hover:text-somtech-accent group-hover:opacity-100" />
                    </Link>
                  );
                })}
              </div>
              <Link to="/services" className="block text-center mt-8 text-somtech-blue font-bold text-sm hover:text-somtech-lightBlue transition">
                {lang === 'en' ? 'View All Services' : 'Eeg Dhammaan Adeegyada'}
              </Link>
            </div>

            <div className="bg-gradient-to-br from-somtech-blue to-blue-900 p-8 rounded-[2.5rem] text-white text-center">
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-somtech-accent">
                 <MessageSquare size={32} />
               </div>
               <h3 className="text-xl font-bold mb-4">
                 {lang === 'en' ? 'Need Help?' : 'Ma u Baahan Tahay Caawimo?'}
               </h3>
               <p className="text-blue-100 text-sm mb-8 leading-relaxed">
                 {lang === 'en' 
                  ? "Speak with our consultants about how we can help your business grow."
                  : "La hadal la-taliyayaashayada ku saabsan sida aan gacan uga geysan karno koritaanka ganacsigaaga."}
               </p>
               <a href={`https://wa.me/${'+252620000959'.replace('+', '')}`} className="block w-full bg-white text-somtech-blue font-bold py-4 rounded-xl hover:bg-somtech-accent transition-colors">
                  WhatsApp Us
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;