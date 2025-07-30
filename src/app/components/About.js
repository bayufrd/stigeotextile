'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
    HiShieldCheck, 
    HiGlobeAlt, 
    HiLightBulb, 
    HiCog, 
    HiChartBar 
} from 'react-icons/hi';
import { aboutData } from '../data/aboutData'; // Sesuaikan path import

const About = () => {
    const [showMore, setShowMore] = useState(false);
    const [activeSection, setActiveSection] = useState('visi');

    const features = [
        { 
            icon: HiCog, 
            title: "Produk Berkualitas Tinggi", 
            description: aboutData.aboutAdvantages.split('.')[0] || "Produk berkualitas tinggi dengan teknologi modern"
        },
        { 
            icon: HiShieldCheck, 
            title: "Jaminan Mutu", 
            description: "Uji kualitas berkala dengan lembaga independen" 
        },
        { 
            icon: HiGlobeAlt, 
            title: "Standar Internasional", 
            description: "Memenuhi SNI-7718:2011, ISO 9001-2008" 
        },
        { 
            icon: HiLightBulb, 
            title: "Inovasi Berkelanjutan", 
            description: aboutData.aboutMisi.split('.')[0] || "Inovasi produk berkelanjutan" 
        },
        { 
            icon: HiChartBar, 
            title: "Solusi Infrastruktur", 
            description: "Produk geotextile untuk berbagai kebutuhan konstruksi" 
        },
        { 
            icon: HiChartBar, // Ganti dengan icon yang ada
            title: "Layanan Profesional", 
            description: "Konsultasi dan dukungan teknis komprehensif" 
        }
    ];

    return (
        <section id="about">
        <div className="bg-white min-h-screen">
            <div className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-[#1F3D57] mb-4">
                        CV. Sentra Teknologi Investama
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        {aboutData.aboutDetail[0]}
                    </p>
                </motion.div>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-12">
                    {['visi', 'misi', 'penawaran'].map((section) => (
                        <button
                            key={section}
                            onClick={() => setActiveSection(section)}
                            className={`
                                px-6 py-2 mx-2 rounded-full transition-all duration-300
                                ${activeSection === section 
                                    ? 'bg-[#1F3D57] text-white' 
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                            `}
                        >
                            {section === 'visi' ? 'Visi' : section === 'misi' ? 'Misi' : 'Penawaran'}
                        </button>
                    ))}
                </div>

                {/* Content Sections */}
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    {activeSection === 'visi' && (
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F3D57] mb-6">Visi Kami</h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                {aboutData.aboutVisi}
                            </p>
                        </div>
                    )}

                    {activeSection === 'misi' && (
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F3D57] mb-6">Misi Kami</h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                {aboutData.aboutMisi}
                            </p>
                        </div>
                    )}

                    {activeSection === 'penawaran' && (
                        <div>
                            <h2 className="text-3xl font-bold text-[#1F3D57] mb-6">Apa yang Kami Tawarkan</h2>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                {aboutData.aboutOffers}
                            </p>
                        </div>
                    )}
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 }}
                                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-all"
                            >
                                <Icon className="mx-auto text-5xl text-[#1F3D57] mb-4" />
                                <h3 className="text-xl font-bold text-[#1F3D57] mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

                {/* More Details Section */}
                <div className="max-w-4xl mx-auto mt-16">
                    <h2 className="text-3xl font-bold text-[#1F3D57] mb-6 text-center">
                        Lebih Lanjut Tentang Kami
                    </h2>
                    <div className="text-gray-700 leading-relaxed">
                        {aboutData.aboutMoreDetails
                            .slice(0, showMore ? undefined : 3)
                            .map((paragraph, index) => (
                                paragraph !== "" ? (
                                    <p key={index} className="mb-4">{paragraph}</p>
                                ) : null
                            ))
                        }
                        <div className="text-center mt-6">
                            <button
                                onClick={() => setShowMore(!showMore)}
                                className="px-6 py-2 bg-[#1F3D57] text-white rounded-full hover:bg-opacity-90 transition-all"
                            >
                                {showMore ? 'Tampilkan Lebih Sedikit' : 'Baca Selengkapnya'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
};

export default About;