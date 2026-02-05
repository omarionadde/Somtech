import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  const plans = [
    {
      name: { en: "Starter", so: "Bilow" },
      price: { en: "$499", so: "$499" },
      desc: { en: "Perfect for small businesses.", so: "Ku habboon ganacsiyada yaryar." },
      features: [
         { en: "Business Registration", so: "Diiwaangelinta Ganacsiga" },
         { en: "Basic IT Setup", so: "Habaynta IT-ga Aasaasiga ah" },
         { en: "Email Support", so: "Taageerada Email-ka" },
      ],
      cta: { en: "Get Started", so: "Bilow" },
      highlight: false
    },
    {
      name: { en: "Corporate", so: "Shirkad" },
      price: { en: "$1,299", so: "$1,299" },
      desc: { en: "For growing organizations.", so: "Loogu talagalay ururada koraya." },
      features: [
         { en: "Full Compliance Audit", so: "Hanti-dhawrka U Hoggaansanaanta" },
         { en: "Advanced Security Systems", so: "Nidaamyada Amniga Sare" },
         { en: "Logistics Coordination", so: "Isku-xirka Saadka" },
         { en: "Priority Support", so: "Taageerada Mudnaanta leh" },
      ],
      cta: { en: "Choose Corporate", so: "Dooro Shirkad" },
      highlight: true
    },
    {
      name: { en: "Enterprise", so: "Hay'ad" },
      price: { en: "Custom", so: "Gaar ah" },
      desc: { en: "Tailored for large scale operations.", so: "Loogu talagalay hawlgallada baaxadda weyn." },
      features: [
         { en: "Dedicated Account Manager", so: "Maamule Account Gaar ah" },
         { en: "International Shipping", so: "Rarida Caalamiga ah" },
         { en: "24/7 On-site Support", so: "Taageero Goobta ah 24/7" },
         { en: "Custom Tech Solutions", so: "Xalalka Teknoolojiyadda Gaarka ah" },
      ],
      cta: { en: "Contact Sales", so: "La Xiriir Iibka" },
      highlight: false
    }
  ];

  return (
    <div className="fade-in py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-somtech-blue mb-4">
                {lang === 'en' ? 'Transparent Pricing' : 'Qiimaha Cad'}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                {lang === 'en' 
                ? "Choose the plan that fits your business needs. No hidden fees." 
                : "Dooro qorshaha ku habboon baahiyahaaga ganacsi. Ma jiraan kharashyo qarsoon."}
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, idx) => (
                <div key={idx} className={`rounded-2xl p-8 border ${plan.highlight ? 'border-somtech-blue ring-4 ring-blue-50 shadow-xl relative' : 'border-gray-200 shadow-sm hover:shadow-lg'} transition-all duration-300 flex flex-col`}>
                    {plan.highlight && (
                        <div className="absolute top-0 right-0 bg-somtech-accent text-somtech-blue text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg uppercase">
                            {lang === 'en' ? 'Popular' : 'Caan ah'}
                        </div>
                    )}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name[lang]}</h3>
                    <div className="text-4xl font-extrabold text-somtech-blue mb-4">{plan.price[lang]}</div>
                    <p className="text-gray-500 mb-8">{plan.desc[lang]}</p>
                    
                    <ul className="space-y-4 mb-8 flex-1">
                        {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3 text-gray-700 text-sm">
                                <Check size={18} className="text-green-500 shrink-0 mt-0.5" />
                                <span>{feature[lang]}</span>
                            </li>
                        ))}
                    </ul>

                    <Link to="/contact" className={`w-full py-3 rounded-lg font-bold text-center transition ${plan.highlight ? 'bg-somtech-blue text-white hover:bg-blue-900' : 'bg-gray-100 text-somtech-blue hover:bg-gray-200'}`}>
                        {plan.cta[lang]}
                    </Link>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
