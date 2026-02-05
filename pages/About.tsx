import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../App';
import { COMPANY_NAME } from '../constants';
import { Target, Eye, Award } from 'lucide-react';
import { db } from '../lib/db';
import { TeamMember } from '../types';

const About: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    setTeam(db.getTeam());
  }, []);

  return (
    <div className="fade-in">
        {/* Header */}
        <div className="bg-somtech-blue text-white py-20">
             <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold mb-4">{lang === 'en' ? 'About Us' : 'Nagu Saabsan'}</h1>
                <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                    {lang === 'en' ? 'Building the future through reliability and innovation.' : 'Dhisidda mustaqbalka iyada oo loo marayo isku halaynta iyo hal-abuurka.'}
                </p>
            </div>
        </div>

        {/* Mission Vision Values */}
        <div className="container mx-auto px-4 py-20">
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-somtech-blue text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-somtech-blue">
                        <Target size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{lang === 'en' ? 'Our Mission' : 'Hawlgalkayaga'}</h3>
                    <p className="text-gray-600">
                        {lang === 'en' 
                        ? `To provide world-class general services that empower businesses and improve lives across the region through ${COMPANY_NAME}'s expertise.` 
                        : `Si aan u bixinno adeegyo guud oo heer caalami ah oo awood u siinaya ganacsiyada isla markaana horumariya nolosha gobolka.`}
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-somtech-accent text-center">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-somtech-accent">
                        <Eye size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{lang === 'en' ? 'Our Vision' : 'Aragtiyada'}</h3>
                    <p className="text-gray-600">
                        {lang === 'en' 
                        ? "To be the most trusted and innovative service provider in East Africa." 
                        : "Inaan noqono bixiyaha adeegga ugu kalsoonida badan uguna hal-abuursan Bariga Afrika."}
                    </p>
                </div>
                <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-somtech-lightBlue text-center">
                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 text-somtech-lightBlue">
                        <Award size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{lang === 'en' ? 'Core Values' : 'Qiyamka Asaasiga ah'}</h3>
                    <p className="text-gray-600">
                        {lang === 'en' 
                        ? "Integrity, Excellence, Innovation, and Customer Commitment." 
                        : "Daacadnimo, Heer sare, Hal-abuur, iyo Ballanqaadka Macaamiisha."}
                    </p>
                </div>
            </div>

            {/* Team Section */}
            <h2 className="text-3xl font-bold text-center text-somtech-blue mb-12">
                {lang === 'en' ? 'Our Professional Team' : 'Kooxdayada Xirfadleyda ah'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
                {team.map((member) => (
                    <div key={member.id} className="group relative overflow-hidden rounded-xl shadow-md">
                        <img src={member.image} alt={member.name} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-white text-xl font-bold">{member.name}</h3>
                            <p className="text-gray-300 text-sm">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default About;
