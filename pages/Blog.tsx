import React, { useContext, useEffect, useState } from 'react';
import { LanguageContext } from '../App';
import { db } from '../lib/db';
import { BlogPost } from '../types';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(db.getPosts());
  }, []);

  return (
    <div className="fade-in py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-somtech-blue mb-4">
                {lang === 'en' ? 'Latest Insights & News' : 'Wararka & Fikradaha Ugu Dambeeyay'}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                {lang === 'en' 
                ? "Stay updated with our latest company news, industry trends, and success stories." 
                : "La soco wararkii ugu dambeeyay ee shirkadda, isbeddellada suuqa, iyo sheekooyinka guusha."}
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                    <div className="h-48 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                            <Calendar size={14} className="text-somtech-accent"/>
                            <span>{post.date}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                        <button className="text-somtech-blue font-bold text-sm hover:text-somtech-lightBlue transition flex items-center gap-1">
                            {lang === 'en' ? 'Read Article' : 'Akhri Maqaalka'} <ArrowRight size={16}/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
        
        {posts.length === 0 && (
            <div className="text-center py-20 text-gray-500">
                {lang === 'en' ? 'No posts available at the moment.' : 'Hadda ma jiraan qoraalo la heli karo.'}
            </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
