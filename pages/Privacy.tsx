import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import { COMPANY_NAME, CONTACT_EMAIL } from '../constants';

const Privacy: React.FC = () => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="fade-in py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold text-somtech-blue mb-8">
            {lang === 'en' ? 'Privacy Policy' : 'Qaanuunka Arrimaha Khaaska ah'}
        </h1>
        
        <div className="prose prose-blue max-w-none text-gray-700 space-y-6">
            <p>
                {lang === 'en' 
                ? `At ${COMPANY_NAME}, we are committed to protecting your privacy and ensuring the security of your personal information.` 
                : `Annaga oo ah ${COMPANY_NAME}, waxaa naga go'an inaan ilaalino arrimahaaga khaaska ah oo aan hubinno amniga macluumaadkaaga shakhsi ahaaneed.`}
            </p>

            <h3 className="text-xl font-bold text-somtech-blue mt-8 mb-4">
                {lang === 'en' ? 'Information We Collect' : 'Macluumaadka Aan Ururino'}
            </h3>
            <p>
                {lang === 'en'
                ? "We may collect personal information such as your name, email address, phone number, and company details when you fill out forms on our website or contact us directly."
                : "Waxaan ururin karnaa macluumaadka shakhsi ahaaneed sida magacaaga, cinwaanka emailka, lambarka taleefanka, iyo faahfaahinta shirkadda markaad buuxinayso foomamka websaydkayaga ama aad si toos ah noola soo xiriirto."}
            </p>

            <h3 className="text-xl font-bold text-somtech-blue mt-8 mb-4">
                {lang === 'en' ? 'How We Use Your Information' : 'Sida Aan U Isticmaalno Macluumaadkaaga'}
            </h3>
            <ul className="list-disc pl-5 space-y-2">
                <li>{lang === 'en' ? 'To provide and improve our services.' : 'Si aan u bixinno oo aan u horumarinno adeegyadayada.'}</li>
                <li>{lang === 'en' ? 'To communicate with you regarding inquiries and projects.' : 'Si aan kaagala xiriirno weydiimaha iyo mashaariicda.'}</li>
                <li>{lang === 'en' ? 'To comply with legal obligations.' : 'Si aan ugu hoggaansanno waajibaadka sharciga ah.'}</li>
            </ul>

            <h3 className="text-xl font-bold text-somtech-blue mt-8 mb-4">
                {lang === 'en' ? 'Contact Us' : 'Nala Soo Xiriir'}
            </h3>
            <p>
                {lang === 'en'
                ? `If you have any questions about this Privacy Policy, please contact us at ${CONTACT_EMAIL}.`
                : `Haddii aad qabto wax su'aalo ah oo ku saabsan Qaanuunkan Arrimaha Khaaska ah, fadlan nagala soo xiriir ${CONTACT_EMAIL}.`}
            </p>
            
            <p className="text-sm text-gray-500 mt-12 border-t pt-4">
                {lang === 'en' ? 'Last Updated: January 2024' : 'Cusbooneysiinkii Ugu Dambeeyay: Janaayo 2024'}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
