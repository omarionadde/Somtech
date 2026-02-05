import React, { useContext, useState } from 'react';
import { LanguageContext } from '../App';
import { Plus, Minus } from 'lucide-react';

const FAQ: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: { en: "What services does Somtech provide?", so: "Waa maxay adeegyada ay bixiso Somtech?" },
      a: { 
        en: "We offer a wide range of general services including IT solutions, logistics, construction, security, and corporate consultancy.",
        so: "Waxaan bixinaa adeegyo guud oo kala duwan oo ay ku jiraan xalalka IT-ga, saadka, dhismaha, amniga, iyo la-talinta shirkadaha."
      }
    },
    {
      q: { en: "Where is Somtech located?", so: "Halkee bay ku taallaa Somtech?" },
      a: { 
        en: "Our headquarters are located at KM4 Junction, Mogadishu, Somalia. We also operate in various regions across East Africa.",
        so: "Xaruntayada dhexe waxay ku taallaa Isgoyska KM4, Muqdisho, Soomaaliya. Waxaan sidoo kale ka hawlgallaa gobollo kala duwan oo ka tirsan Bariga Afrika."
      }
    },
    {
      q: { en: "How can I request a quote?", so: "Sidee baan ku dalban karaa qiimo?" },
      a: { 
        en: "You can request a quote by visiting our Contact page and filling out the inquiry form, or by emailing us directly at info@somyunimah.com.",
        so: "Waxaad ku dalban kartaa qiimo adigoo booqanaya bogga Xiriirka oo buuxinaya foomka weydiinta, ama adigoo si toos ah noogu soo diraya email info@somyunimah.com."
      }
    },
    {
      q: { en: "Do you offer international shipping?", so: "Ma bixisaan rarida caalamiga ah?" },
      a: { 
        en: "Yes, our logistics department handles both domestic and international freight forwarding.",
        so: "Haa, waaxdayada saadka ayaa maamusha rarida gudaha iyo kuwa caalamiga ah labadaba."
      }
    }
  ];

  return (
    <div className="fade-in py-20 bg-gray-50">
       <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-somtech-blue mb-4">
                {lang === 'en' ? 'Frequently Asked Questions' : 'Su\'aalaha Inta Badan La Isweydiiyo'}
            </h1>
            <p className="text-gray-600">
                {lang === 'en' ? 'Find answers to common questions about our services.' : 'Ka hel jawaabaha su\'aalaha caadiga ah ee ku saabsan adeegyadayada.'}
            </p>
        </div>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                    <button 
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none hover:bg-gray-50 transition"
                    >
                        <span className="font-bold text-gray-900">{faq.q[lang]}</span>
                        {openIndex === index ? <Minus className="text-somtech-accent" /> : <Plus className="text-gray-400" />}
                    </button>
                    {openIndex === index && (
                        <div className="p-6 pt-0 text-gray-600 border-t border-gray-100 mt-2">
                            {faq.a[lang]}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
