'use client';

import { useState, useEffect } from 'react';

const portfolioData = [
    {
        id: 'p1',
        title: 'Profile Roblox',
        link: 'https://www.roblox.com/users/8137963695/profile',
        images: ['https://i.ibb.co.com/Rphzxk3N/profile-roblox.jpg'],
        desc: ''
    },
    {
        id: 'p2',
        title: 'Lucid Dream Expedition',
        link: 'https://www.roblox.com/games/113684503965156/Lucid-Dream-Expedition',
        images: ['https://i.ibb.co.com/QF9bVdL9/lucid-exp.jpg', 'https://i.ibb.co.com/1YdWKkYH/community-animo.jpg'],
        desc: 'Proyek perdana saya dalam pengembangan game di platform Roblox, dimulai pada Juni 2025 dan dirilis pada 20 September 2025. Dalam proyek ini, saya bertanggung jawab penuh atas desain peta (terrain mapping), tata letak objek, serta penanganan elemen 3D dengan mengoptimalkan beberapa free models dari Roblox Studio. Pengembangan fitur in-game dan sistem backend dikerjakan secara kolaboratif bersama Eland (Aditya Bagaskara).'
    },
    {
        id: 'p3',
        title: 'HMNS O Day: Virtual Exhibition',
        link: 'https://www.roblox.com/games/125344958165807/HMNS-O-Day-Virtual-Exhibition',
        images: [
            'https://i.ibb.co.com/tMv34xGC/hmns-exp1.jpg',
            'https://i.ibb.co.com/6RJQYLKd/hmns-exp2.jpg',
            'https://i.ibb.co.com/Hpkydqbt/alia.jpg',
            'https://i.ibb.co.com/BHCvtBsn/krisdafi.jpg',
            'https://i.ibb.co.com/KzXz1mnt/aditya-bagas.jpg'
        ],
        desc: 'Merupakan proyek virtual exhibition dan marketing event untuk kampanye "HMNS Orgasm Day" dari PT Hadir Mengharumkan Nusantara. Game ini berfokus pada pengenalan produk parfum "The Absolute Orgsm" dan "The Darker Shade of Orgsm". Pemain dapat mengikuti berbagai event interaktif untuk mendapatkan voucer diskon eksklusif serta item UGC (aksesoris) di dalam game Roblox.\n\nKontributor Proyek:\n• Project Manager (HMNS): Alia Salsabila\n• 3D Artist: M. Faturahman & M. Kamaruzzaman\n• Game Developer: Krisdafi & Aditya Bagaskara'
    },
    {
        id: 'p4',
        title: 'Mitra Strategis Satpol PP DKI JAKARTA',
        link: '#',
        images: [
            'https://i.ibb.co.com/0y6T4qvF/satpolpp.png',
            'https://i.ibb.co.com/JFv09SBY/kris1.jpg',
            'https://i.ibb.co.com/0ydkHKWt/kris2.jpg',
            'https://i.ibb.co.com/MDT8JLY2/kris3.jpg',
            'https://i.ibb.co.com/PG3k9XnH/kris4.jpg',
            'https://i.ibb.co.com/23PjHtf9/kris5.jpg'
        ],
        desc: 'Dipercaya sebagai moderator dalam serangkaian acara strategis Satpol PP Provinsi DKI Jakarta. Bertugas memandu jalannya sesi pemaparan dan memfasilitasi diskusi terkait program-program pembinaan untuk meningkatkan kualitas kedisiplinan dan kapasitas Sumber Daya Manusia (SDM).\n\nProgram yang difasilitasi meliputi:\n• Program Pembinaan MFD (Mental Fisik Disiplin) Satpol PP DKI Jakarta 2026\n• Program Peningkatan Kapasitas SDM Satpol PP Jakarta Pusat (Jakpus) 2026\n• Program Peningkatan SDM Satpol PP Jakarta Timur (Jaktim) 2026'
    }
];

export default function Home() {
    const [sliderState, setSliderState] = useState({});
    const [expandedDesc, setExpandedDesc] = useState({});
    const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!lightbox.isOpen) return;
            if (e.key === 'Escape') setLightbox({ ...lightbox, isOpen: false });
            if (e.key === 'ArrowRight' && lightbox.images.length > 1) {
                setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length }));
            }
            if (e.key === 'ArrowLeft' && lightbox.images.length > 1) {
                setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length }));
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        if (lightbox.isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = 'auto';
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [lightbox]);

    const handleNextSlide = (id, max) => {
        setSliderState(prev => ({ ...prev, [id]: ((prev[id] || 0) + 1) % max }));
    };

    const handlePrevSlide = (id, max) => {
        setSliderState(prev => ({ ...prev, [id]: ((prev[id] || 0) - 1 + max) % max }));
    };

    const setSpecificSlide = (id, index) => {
        setSliderState(prev => ({ ...prev, [id]: index }));
    };

    const toggleDesc = (id) => {
        setExpandedDesc(prev => {
            const newState = {};
            if (!prev[id]) newState[id] = true;
            return newState;
        });
    };

    const openLightbox = (images, index) => {
        setLightbox({ isOpen: true, images, currentIndex: index });
    };

    return (
        <div className="w-full flex flex-col items-center">
            
            <header className="w-full max-w-[1050px] min-h-[80px] flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-[50px] py-4 sticky top-[10px] md:top-[20px] z-50 bg-white/85 backdrop-blur-md rounded-[24px] border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] gap-4 md:gap-0">
                <a href="#beranda" className="flex items-center gap-[12px] no-underline">
                    <img src="https://i.ibb.co.com/qFXzr85s/vector2dme.png" alt="Logo" className="w-[24px] md:w-[28px] h-[24px] md:h-[28px] object-contain mix-blend-multiply" />
                    <span className="text-[20px] md:text-[22px] font-bold text-[#0A192F] tracking-[0.5px]">KRISDAFI</span>
                </a>
                <nav>
                    <ul className="flex flex-wrap justify-center gap-[15px] md:gap-[35px] list-none">
                        {['Beranda', 'Tentang Saya', 'Portofolio', 'Pendidikan', 'Pengalaman', 'Kontak'].map((item) => (
                            <li key={item}>
                                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[14px] md:text-[15px] font-semibold text-[#4b5563] no-underline transition-colors duration-300 hover:text-[#0A192F]">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main className="w-full flex flex-col items-center gap-[40px] mt-[40px]">
                
                <section id="beranda" className="w-full max-w-[1050px] bg-gradient-to-br from-[#ffffff] via-[#f3f4f6] to-[#d1d5db] border border-[#e5e7eb] rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.12),0_10px_20px_rgba(0,0,0,0.05)] p-[30px] md:p-[60px] scroll-mt-[140px] flex flex-col-reverse md:flex-row items-center justify-between gap-[40px] min-h-[auto] md:min-h-[75vh] text-center md:text-left">
                    <div className="flex-1 flex flex-col gap-[16px]">
                        <span className="text-[12px] text-[#6b7280] font-normal">Hi! Semua.. Pagi pagi makan ayam krispi, kenalin saya,</span>
                        <h1 className="text-[32px] md:text-[46px] font-bold text-[#111827] leading-[1.1]">KRISDAFI</h1>
                        <span className="text-[12px] text-[#6b7280] font-normal">Mahasiswa Sistem Informasi | Game Developer & Desain Grafis | Administrasi & Purchasing</span>
                        <p className="text-[12px] text-[#6b7280] font-normal leading-[1.6] text-justify md:max-w-[600px]">Portofolio ini menggambarkan tentang memadukan efisiensi operasional dengan inovasi digital. Berpengalaman kuat di bidang Administrasi & Purchasing, dilengkapi dengan keahlian teknis dalam Desain dan Game Development. Siap menghadirkan solusi yang sistematis, efisien, dan kreatif.</p>
                        <a href="#kontak" className="self-center md:self-start mt-[15px] px-[32px] py-[14px] bg-[#0A192F] text-[#ffffff] text-[18px] font-bold no-underline rounded-[30px] transition-all duration-300 shadow-[0_10px_20px_rgba(10,25,47,0.15)] hover:-translate-y-[3px] hover:shadow-[0_15px_25px_rgba(10,25,47,0.25)] hover:bg-[#112a4a]">Hubungi Saya</a>
                    </div>
                    <div className="flex-[0.8] flex justify-center items-center">
                        <div className="w-full max-w-[190px] md:max-w-[250px] aspect-square rounded-full overflow-hidden flex justify-center items-center">
                            <img src="https://i.ibb.co.com/LXhqZfjh/profile-me-transparant.png" alt="Foto Profil KRISDAFI" className="w-full h-full object-cover object-center scale-[1.2] translate-y-[20px] bg-transparent border-none" />
                        </div>
                    </div>
                </section>

                <section id="tentang-saya" className="w-full max-w-[1050px] bg-gradient-to-br from-[#ffffff] via-[#f3f4f6] to-[#d1d5db] border border-[#e5e7eb] rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.12),0_10px_20px_rgba(0,0,0,0.05)] p-[30px] md:p-[60px] scroll-mt-[140px] flex flex-col gap-[40px] min-h-[auto] md:min-h-[75vh]">
                    <h2 className="text-[26px] md:text-[32px] text-[#111827] font-bold text-center mb-[10px]">Tentang Saya</h2>
                    <div className="flex flex-col gap-[30px]">
                        <div className="flex flex-col gap-[15px]">
                            <h3 className="text-[18px] font-bold text-[#111827] border-b-[2px] border-[#e5e7eb] pb-[8px]">Latar Belakang</h3>
                            <ul className="list-none pl-0 flex flex-col gap-[12px]">
                                <li className="text-[12px] text-[#4b5563] leading-[1.6] text-justify relative pl-[24px]">
                                    <span className="absolute left-0 top-[-1px] text-[#111827] font-bold">○</span>
                                    <strong className="text-[#111827]">Pendidikan:</strong> Lulusan SMK Administrasi Perkantoran dan Mahasiswa S1 Sistem Informasi (Semester 3) yang memadukan logika IT dengan pemahaman bisnis.
                                </li>
                                <li className="text-[12px] text-[#4b5563] leading-[1.6] text-justify relative pl-[24px]">
                                    <span className="absolute left-0 top-[-1px] text-[#111827] font-bold">○</span>
                                    <strong className="text-[#111827]">Pengalaman Operasional:</strong> Memiliki pengalaman praktis dalam Administrasi Perusahaan, Logistik, <em>Purchasing Food & Beverage</em> (F&B), dan Operasional Ritel.
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <h3 className="text-[18px] font-bold text-[#111827] border-b-[2px] border-[#e5e7eb] pb-[8px]">Minat & Keahlian Utama</h3>
                            <ul className="list-none pl-0 flex flex-col gap-[12px]">
                                <li className="text-[12px] text-[#4b5563] leading-[1.6] text-justify relative pl-[24px]">
                                    <span className="absolute left-0 top-[-1px] text-[#111827] font-bold">○</span>
                                    <strong className="text-[#111827]">Administrasi & Pengolahan Data:</strong> Mahir mengoperasikan Microsoft Office. Sangat terbiasa melakukan analisis dan pelaporan data menggunakan fungsi lanjutan Excel/Spreadsheet (Pivot Table, VLOOKUP, XLOOKUP, SUMIF, IF, FILTER, dll).
                                </li>
                                <li className="text-[12px] text-[#4b5563] leading-[1.6] text-justify relative pl-[24px]">
                                    <span className="absolute left-0 top-[-1px] text-[#111827] font-bold">○</span>
                                    <strong className="text-[#111827]">Bahasa:</strong> Fasih berbahasa Inggris (lisan dan tulisan), mendukung komunikasi profesional dan riset teknis.
                                </li>
                                <li className="text-[12px] text-[#4b5563] leading-[1.6] text-justify relative pl-[24px]">
                                    <span className="absolute left-0 top-[-1px] text-[#111827] font-bold">○</span>
                                    <strong className="text-[#111827]">Game Development:</strong> Spesialisasi dalam pembuatan sistem fungsional dan UI kustom menggunakan Roblox Studio (Luau Scripting).
                                </li>
                                <li className="text-[12px] text-[#4b5563] leading-[1.6] text-justify relative pl-[24px]">
                                    <span className="absolute left-0 top-[-1px] text-[#111827] font-bold">○</span>
                                    <strong className="text-[#111827]">Seni Digital & Animasi 3D:</strong> Berpengalaman otodidak dalam pemodelan dan animasi menggunakan Blender, Unity, dan Pivot Animator, Adobe Photoshop.
                                </li>
                                <li className="text-[12px] text-[#4b5563] leading-[1.6] text-justify relative pl-[24px]">
                                    <span className="absolute left-0 top-[-1px] text-[#111827] font-bold">○</span>
                                    <strong className="text-[#111827]">Desain Grafis:</strong> Mampu merancang elemen visual untuk mendukung kebutuhan proyek teknis maupun operasional.
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-[15px]">
                            <h3 className="text-[18px] font-bold text-[#111827] border-b-[2px] border-[#e5e7eb] pb-[8px]">Visi Profesional</h3>
                            <ul className="list-none pl-0 flex flex-col gap-[12px]">
                                <li className="text-[12px] text-[#4b5563] leading-[1.6] text-justify relative pl-[24px]">
                                    <span className="absolute left-0 top-[-1px] text-[#111827] font-bold">○</span>
                                    "Memadukan efisiensi manajerial dengan inovasi teknologi. Saya bertujuan untuk menciptakan solusi digital yang kreatif, sekaligus menggunakan kemampuan analisis data dan pola pikir sistematis untuk mengoptimalkan operasional bisnis secara menyeluruh."
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="portofolio" className="w-full max-w-[1050px] bg-gradient-to-br from-[#ffffff] via-[#f3f4f6] to-[#d1d5db] border border-[#e5e7eb] rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.12),0_10px_20px_rgba(0,0,0,0.05)] p-[30px] md:p-[60px] scroll-mt-[140px] flex flex-col items-start text-left">
                    <div className="w-full text-center mb-[10px]">
                        <h2 className="text-[26px] md:text-[32px] text-[#111827] font-bold mb-[10px]">Portofolio</h2>
                        <p className="text-[12px] text-[#6b7280] mt-[10px]">Kumpulan karya, proyek desain, dan pengalaman profesional yang pernah saya kerjakan. (Klik gambar untuk memperbesar)</p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[20px]">
                        {portfolioData.map((item) => (
                            <div key={item.id} className="flex flex-col gap-[12px]">
                                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[12px] bg-[#d1d5db]">
                                    <div className="flex h-full transition-transform duration-400 ease-in-out" style={{ transform: `translateX(-${(sliderState[item.id] || 0) * 100}%)` }}>
                                        {item.images.map((img, idx) => (
                                            <div key={idx} className="min-w-full h-full flex items-center justify-center">
                                                <img 
                                                    src={img} 
                                                    alt={item.title} 
                                                    className="w-full h-full object-cover object-center cursor-pointer transition-transform duration-300 hover:scale-[1.05]" 
                                                    onClick={() => openLightbox(item.images, idx)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    {item.images.length > 1 && (
                                        <>
                                            <button onClick={() => handlePrevSlide(item.id, item.images.length)} className="absolute top-1/2 -translate-y-1/2 left-[10px] bg-[rgba(10,25,47,0.4)] hover:bg-[rgba(10,25,47,0.8)] text-white border-none w-[32px] h-[32px] rounded-full cursor-pointer flex items-center justify-center z-[2] transition-colors duration-300">
                                                <i className="fa-solid fa-chevron-left"></i>
                                            </button>
                                            <button onClick={() => handleNextSlide(item.id, item.images.length)} className="absolute top-1/2 -translate-y-1/2 right-[10px] bg-[rgba(10,25,47,0.4)] hover:bg-[rgba(10,25,47,0.8)] text-white border-none w-[32px] h-[32px] rounded-full cursor-pointer flex items-center justify-center z-[2] transition-colors duration-300">
                                                <i className="fa-solid fa-chevron-right"></i>
                                            </button>
                                            <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex gap-[6px] z-[2]">
                                                {item.images.map((_, idx) => (
                                                    <span 
                                                        key={idx} 
                                                        onClick={() => setSpecificSlide(item.id, idx)}
                                                        className={`w-[8px] h-[8px] rounded-full cursor-pointer transition-colors duration-300 ${ (sliderState[item.id] || 0) === idx ? 'bg-[#ffffff]' : 'bg-[rgba(255,255,255,0.5)]' }`}
                                                    ></span>
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                                <div className="flex flex-col gap-[8px] px-[4px]">
                                    <a href={item.link} target={item.link !== '#' ? "_blank" : "_self"} className="text-[16px] font-bold text-[#111827] no-underline transition-colors duration-300 inline-block hover:text-[#2563eb] cursor-pointer">
                                        {item.title}
                                    </a>
                                    {item.desc && (
                                        <div className="text-[12px] text-[#6b7280] leading-[1.6] text-justify">
                                            <div className={`whitespace-pre-line ${expandedDesc[item.id] ? '' : 'line-clamp-3'}`}>
                                                {item.desc}
                                            </div>
                                            <span onClick={() => toggleDesc(item.id)} className="text-[#2563eb] text-[12px] font-semibold cursor-pointer inline-block mt-[5px] transition-colors duration-300 hover:underline hover:text-[#1d4ed8]">
                                                {expandedDesc[item.id] ? 'Tutup Kembali' : 'Lihat Selengkapnya'}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="pendidikan" className="w-full max-w-[1050px] bg-gradient-to-br from-[#ffffff] via-[#f3f4f6] to-[#d1d5db] border border-[#e5e7eb] rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.12),0_10px_20px_rgba(0,0,0,0.05)] p-[30px] md:p-[60px] scroll-mt-[140px] flex flex-col items-start text-left">
                    <div className="w-full text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[32px] text-[#111827] font-bold mb-[10px]">Pendidikan</h2>
                        <p className="text-[12px] text-[#6b7280] mt-[10px]">Riwayat pendidikan yang telah saya tempuh.</p>
                    </div>
                    
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                        <div className="flex flex-col items-center gap-[15px] p-[10px] transition-transform duration-300 hover:-translate-y-[5px]">
                            <img src="https://i.ibb.co.com/Ld1kkXt0/logo-markatin.png" alt="Logo SMK TUNAS MARKATIN" className="w-[100px] h-[100px] object-contain bg-transparent mix-blend-multiply" />
                            <h3 className="text-[16px] font-bold text-[#111827] text-center">SMK TUNAS MARKATIN</h3>
                            <table className="w-full text-[12px] text-[#6b7280] leading-[1.6] border-collapse text-left">
                                <tbody>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Jurusan</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Administrasi Perkantoran</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Organisasi</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">MPK</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Angkatan</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">2017 - 2019</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Kota</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Jakarta Timur</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col items-center gap-[15px] p-[10px] transition-transform duration-300 hover:-translate-y-[5px]">
                            <img src="https://i.ibb.co.com/XrjKBGFY/logo-univ.png" alt="Logo Universitas Asa Indo" className="w-[100px] h-[100px] object-contain bg-transparent mix-blend-multiply" />
                            <h3 className="text-[16px] font-bold text-[#111827] text-center">Universitas Asa Indo</h3>
                            <table className="w-full text-[12px] text-[#6b7280] leading-[1.6] border-collapse text-left">
                                <tbody>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Program Studi</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Sistem Informasi (S1)</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Semester</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Tiga (3)</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Kota</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Jakarta Timur</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="flex flex-col items-center gap-[15px] p-[10px] transition-transform duration-300 hover:-translate-y-[5px]">
                            <img src="https://i.ibb.co.com/B27NsVnv/accesses.jpg" alt="Logo ACCESS ES COURSE" className="w-[100px] h-[100px] object-contain bg-transparent mix-blend-multiply" />
                            <h3 className="text-[16px] font-bold text-[#111827] text-center">ACCESS ES COURSE</h3>
                            <table className="w-full text-[12px] text-[#6b7280] leading-[1.6] border-collapse text-left">
                                <tbody>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Program Length</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">1 Month (Full Day)</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Speaking Level</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">2</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Pronounciation Level</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">2</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Extra Class</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Public Speaking, Conversation</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Since</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">2015</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Located</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Pare, Jawa Timur (Kampung Inggris)</td></tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                <section id="pengalaman" className="w-full max-w-[1050px] bg-gradient-to-br from-[#ffffff] via-[#f3f4f6] to-[#d1d5db] border border-[#e5e7eb] rounded-[24px] shadow-[0_30px_60px_rgba(0,0,0,0.12),0_10px_20px_rgba(0,0,0,0.05)] p-[30px] md:p-[60px] scroll-mt-[140px] flex flex-col items-start text-left">
                    <div className="w-full text-center mb-[30px]">
                        <h2 className="text-[26px] md:text-[32px] text-[#111827] font-bold mb-[10px]">Pengalaman</h2>
                        <p className="text-[12px] text-[#6b7280] mt-[10px]">Jejak karir dan pengalaman profesional saya.</p>
                    </div>
                    
                    <div className="w-full flex flex-wrap justify-center gap-[30px]">
                        
                        <div className="flex flex-col items-center gap-[15px] p-[25px] bg-[rgba(255,255,255,0.5)] rounded-[16px] border border-[rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] w-full md:w-[calc(50%-15px)]">
                            <div className="flex justify-center w-full mb-[10px]">
                                <img src="astro.png" alt="Logo Astro" className="h-[60px] w-auto max-w-[250px] object-contain bg-transparent mix-blend-multiply block mx-auto" />
                            </div>
                            <h3 className="text-[18px] font-bold text-[#111827] text-left w-full mt-[10px]">PT Astro Technologies Indonesia</h3>
                            <table className="w-full text-[12px] text-[#6b7280] leading-[1.6] border-collapse text-left">
                                <tbody>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Periode</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">September 2021 – November 2022</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Jabatan</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Warehouse Coordinator / Leader (Inbound & Outbound)</td></tr>
                                </tbody>
                            </table>
                            <div className="w-full mt-[10px] text-[12px] text-[#6b7280] leading-[1.6]">
                                <div className={`${expandedDesc['e1'] ? 'block' : 'hidden'}`}>
                                    <p className="text-justify mb-[8px] font-semibold text-[#111827]">Rincian Tugas & Tanggung Jawab (Jobdesc):</p>
                                    <ul className="pl-[18px] mt-[8px] flex flex-col gap-[8px] text-justify">
                                        <li><strong className="text-[#111827]">Operasional Gudang:</strong> Mengawasi dan memimpin tim operasional gudang untuk memastikan proses penerimaan (<em>inbound</em>) dan pengiriman barang (<em>outbound</em>) berjalan lancar sesuai SOP.</li>
                                        <li><strong className="text-[#111827]">Manajemen Stok:</strong> Bertanggung jawab penuh terhadap keakuratan data inventaris, pencatatan database, serta pelaksanaan <em>stock opname</em> secara berkala.</li>
                                        <li><strong className="text-[#111827]">Pemecahan Masalah:</strong> Menangani dan menyelesaikan kendala operasional harian yang terjadi di lapangan secara cepat dan efektif.</li>
                                        <li><strong className="text-[#111827]">Koordinasi Lintas Departemen:</strong> Bekerja sama dengan divisi lain (seperti <em>purchasing</em> dan logistik) untuk memastikan kelancaran arus barang dan kelengkapan dokumen pendukung.</li>
                                        <li><strong className="text-[#111827]">Administrasi & Pelaporan:</strong> Mengelola dokumentasi logistik menggunakan sistem perusahaan (<em>WMS, Barcode Scanning</em>, serta <em>Microsoft Office/Spreadsheet</em> untuk pelaporan harian).</li>
                                    </ul>
                                </div>
                                <span onClick={() => toggleDesc('e1')} className="text-[#2563eb] text-[12px] font-semibold cursor-pointer inline-block mt-[5px] transition-colors duration-300 hover:underline hover:text-[#1d4ed8]">
                                    {expandedDesc['e1'] ? 'Tutup Kembali' : 'Lihat Selengkapnya'}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-[15px] p-[25px] bg-[rgba(255,255,255,0.5)] rounded-[16px] border border-[rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] w-full md:w-[calc(50%-15px)]">
                            <div className="flex justify-center w-full mb-[10px]">
                                <img src="https://i.ibb.co.com/8DqTnss4/oguri.png" alt="Logo Oguri" className="h-[85px] w-auto max-w-[250px] object-contain bg-transparent mix-blend-multiply block mx-auto" />
                            </div>
                            <h3 className="text-[18px] font-bold text-[#111827] text-left w-full mt-[10px]">PT Ogurindo Sejahtera Selalu (Oguri)</h3>
                            <table className="w-full text-[12px] text-[#6b7280] leading-[1.6] border-collapse text-left">
                                <tbody>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Periode</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Januari 2023 – Januari 2024</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Jabatan</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Purchasing Staff</td></tr>
                                </tbody>
                            </table>
                            <div className="w-full mt-[10px] text-[12px] text-[#6b7280] leading-[1.6]">
                                <div className={`${expandedDesc['e2'] ? 'block' : 'hidden'}`}>
                                    <p className="text-justify mb-[8px] font-semibold text-[#111827]">Rincian Tugas & Tanggung Jawab (Jobdesc):</p>
                                    <ul className="pl-[18px] mt-[8px] flex flex-col gap-[8px] text-justify">
                                        <li><strong className="text-[#111827]">Pengadaan Barang & Jasa:</strong> Mengelola seluruh proses pembelian operasional perusahaan secara efisien sesuai dengan kebutuhan harian dan standar kualitas.</li>
                                        <li><strong className="text-[#111827]">Manajemen Vendor & Supplier:</strong> Melakukan pencarian (<em>sourcing</em>), seleksi, evaluasi, serta negosiasi harga terbaik dengan para <em>supplier</em> untuk efisiensi biaya.</li>
                                        <li><strong className="text-[#111827]">Kontrol Kualitas & Inventaris:</strong> Memastikan barang yang diterima sesuai dengan spesifikasi, melakukan pencatatan inventaris, serta memantau ketersediaan stok agar tidak terjadi kekurangan atau kelebihan.</li>
                                        <li><strong className="text-[#111827]">Koordinasi Internal:</strong> Bekerja sama dengan berbagai departemen operasional (seperti <em>kitchen, bar</em>, dan manajemen toko) untuk memenuhi kebutuhan pengadaan secara tepat waktu.</li>
                                        <li><strong className="text-[#111827]">Administrasi & Pelaporan:</strong> Membuat dokumen pembelian (<em>Purchase Order, invoice</em>, rekapitulasi) serta menyusun laporan rutin terkait transaksi pembelian menggunakan <em>Microsoft Excel/Spreadsheet</em>.</li>
                                    </ul>
                                </div>
                                <span onClick={() => toggleDesc('e2')} className="text-[#2563eb] text-[12px] font-semibold cursor-pointer inline-block mt-[5px] transition-colors duration-300 hover:underline hover:text-[#1d4ed8]">
                                    {expandedDesc['e2'] ? 'Tutup Kembali' : 'Lihat Selengkapnya'}
                                </span>
                            </div>
                        </div>

                        <div className="flex flex-col items-center gap-[15px] p-[25px] bg-[rgba(255,255,255,0.5)] rounded-[16px] border border-[rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] w-full md:w-[calc(50%-15px)] mx-auto md:mx-0">
                            <div className="flex justify-center w-full mb-[10px]">
                                <img src="https://i.ibb.co.com/ycGSkB36/eecoffee.jpg" alt="Logo EE Coffee" className="w-[80px] h-[80px] rounded-full object-cover bg-transparent mix-blend-normal border-none block mx-auto" />
                            </div>
                            <h3 className="text-[18px] font-bold text-[#111827] text-left w-full mt-[10px]">PT Epluse Beautiful Gate</h3>
                            <table className="w-full text-[12px] text-[#6b7280] leading-[1.6] border-collapse text-left">
                                <tbody>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Periode</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Mei 2024 – Juni 2025</td></tr>
                                    <tr><td className="font-semibold text-[#111827] whitespace-nowrap w-[35%] md:w-[1%] py-[4px] align-top">Jabatan</td><td className="w-[1%] text-center font-semibold text-[#111827] px-[8px] py-[4px] align-top">:</td><td className="text-justify w-[60%] md:w-auto py-[4px] align-top">Purchasing Staff</td></tr>
                                </tbody>
                            </table>
                            <div className="w-full mt-[10px] text-[12px] text-[#6b7280] leading-[1.6]">
                                <div className={`${expandedDesc['e3'] ? 'block' : 'hidden'}`}>
                                    <p className="text-justify mb-[8px] font-semibold text-[#111827]">Rincian Tugas & Tanggung Jawab (Jobdesc):</p>
                                    <ul className="pl-[18px] mt-[8px] flex flex-col gap-[8px] text-justify">
                                        <li><strong className="text-[#111827]">Pengadaan Operasional Cabang:</strong> Mengelola dan memproses seluruh kebutuhan pengadaan barang/material untuk mendukung operasional perusahaan (mencakup kebutuhan dari sekitar 10 cabang).</li>
                                        <li><strong className="text-[#111827]">Manajemen Vendor & Negosiasi:</strong> Melakukan pencarian <em>supplier</em> baru, memelihara hubungan baik dengan vendor, serta bernegosiasi terkait harga, kualitas, dan tenggat waktu pengiriman (<em>delivery</em>).</li>
                                        <li><strong className="text-[#111827]">Kontrol Stok & Logistik:</strong> Memonitor pelaksanaan <em>stock opname</em> serta memastikan ketersediaan pasokan barang sesuai dengan standar operasional perusahaan agar tidak terjadi hambatan di setiap cabang.</li>
                                        <li><strong className="text-[#111827]">Pengendalian Kualitas:</strong> Memastikan seluruh barang yang masuk memenuhi spesifikasi, standar kualitas, serta jumlah yang dipesan.</li>
                                        <li><strong className="text-[#111827]">Administrasi & Pelaporan:</strong> Membuat <em>Purchase Order</em> (PO), memproses penagihan, serta menyusun laporan pengadaan secara rutin menggunakan <em>Microsoft Excel/Spreadsheet</em>.</li>
                                    </ul>
                                </div>
                                <span onClick={() => toggleDesc('e3')} className="text-[#2563eb] text-[12px] font-semibold cursor-pointer inline-block mt-[5px] transition-colors duration-300 hover:underline hover:text-[#1d4ed8]">
                                    {expandedDesc['e3'] ? 'Tutup Kembali' : 'Lihat Selengkapnya'}
                                </span>
                            </div>
                        </div>

                    </div>
                </section>
            </main>

            <footer id="kontak" className="w-full max-w-[1050px] bg-[rgba(10,25,47,0.85)] backdrop-blur-[8px] px-[30px] md:px-[60px] py-[40px] md:py-[50px] flex flex-col gap-[30px] rounded-[20px] md:rounded-[24px] mt-[40px] scroll-mt-[140px] text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] md:gap-[20px] w-full text-left">
                    <div className="flex flex-col gap-[15px]">
                        <h2 className="text-[28px] md:text-[32px] font-bold text-white">KRISDAFI</h2>
                        <div className="flex flex-col gap-[5px]">
                            <h3 className="text-[18px] font-semibold text-gray-300">Hubungi Saya</h3>
                            <a href="mailto:krisdafi17@gmail.com" className="text-[14px] text-gray-400 hover:text-white transition-colors duration-300 no-underline">krisdafi17@gmail.com</a>
                            <span className="text-[14px] text-gray-400">Jakarta Timur, Indonesia</span>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[15px]">
                        <h3 className="text-[18px] font-semibold text-white">Keahlian Utama</h3>
                        <ul className="flex flex-col gap-[10px] list-none pl-0 m-0">
                            <li><span className="text-[14px] text-gray-400">Administrasi & Data</span></li>
                            <li><span className="text-[14px] text-gray-400">Game Development</span></li>
                            <li><span className="text-[14px] text-gray-400">Desain Grafis</span></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-[15px]">
                        <h3 className="text-[18px] font-semibold text-white">Tautan</h3>
                        <ul className="flex flex-col gap-[10px] list-none pl-0 m-0">
                            {['Beranda', 'Tentang Saya', 'Portofolio', 'Pendidikan', 'Pengalaman', 'Kontak'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[14px] text-gray-400 hover:text-white transition-colors duration-300 no-underline">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="w-full h-[1px] bg-white/20 my-[10px]"></div>

                <div className="flex flex-col items-center gap-[20px]">
                    <div className="flex gap-[15px] justify-center">
                        <a href="mailto:krisdafi17@gmail.com" className="w-[40px] h-[40px] rounded-full border border-white/50 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all duration-300 hover:-translate-y-[4px] no-underline">
                            <i className="fa-solid fa-envelope text-[18px]"></i>
                        </a>
                        <a href="https://www.instagram.com/krisdave171" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] rounded-full border border-white/50 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all duration-300 hover:-translate-y-[4px] no-underline">
                            <i className="fa-brands fa-instagram text-[18px]"></i>
                        </a>
                    </div>
                    <div className="text-[rgba(255,255,255,0.7)] text-[13px] text-center">
                        Dibuat oleh <span className="text-[#a78bfa] font-semibold">KRISDAFI</span>, menggunakan <span className="text-[#38bdf8] font-semibold">Next.js & Tailwind CSS</span>.
                    </div>
                </div>
            </footer>

            {lightbox.isOpen && (
                <div 
                    className="fixed inset-0 z-[1000] bg-[rgba(0,0,0,0.9)] flex justify-center items-center opacity-100 transition-opacity duration-300"
                    onClick={() => setLightbox({ ...lightbox, isOpen: false })}
                >
                    {lightbox.images.length > 1 && (
                        <button 
                            className="absolute top-1/2 -translate-y-1/2 left-[10px] md:left-[30px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] text-white border-none w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full cursor-pointer flex items-center justify-center text-[16px] md:text-[20px] z-[1001] transition-colors duration-300"
                            onClick={(e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length })); }}
                        >
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                    )}
                    
                    <div className="relative max-w-[90%] max-h-[90vh] flex justify-center items-center" onClick={e => e.stopPropagation()}>
                        <button 
                            className="absolute top-[-35px] md:top-[-40px] right-0 text-white text-[30px] md:text-[35px] font-bold cursor-pointer z-[1001] transition-colors duration-300 bg-none border-none p-0 leading-none hover:text-[#ef4444]"
                            onClick={() => setLightbox({ ...lightbox, isOpen: false })}
                        >
                            &times;
                        </button>
                        <img 
                            src={lightbox.images[lightbox.currentIndex]} 
                            alt="Zoomed" 
                            className="max-w-full max-h-[90vh] object-contain rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.5)] select-none" 
                        />
                    </div>
                    
                    {lightbox.images.length > 1 && (
                        <button 
                            className="absolute top-1/2 -translate-y-1/2 right-[10px] md:right-[30px] bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] text-white border-none w-[40px] md:w-[50px] h-[40px] md:h-[50px] rounded-full cursor-pointer flex items-center justify-center text-[16px] md:text-[20px] z-[1001] transition-colors duration-300"
                            onClick={(e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, currentIndex: (prev.currentIndex + 1) % prev.images.length })); }}
                        >
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                    )}
                </div>
            )}

        </div>
    );
}