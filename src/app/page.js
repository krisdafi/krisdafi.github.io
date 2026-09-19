// src/app/page.js
"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  // State untuk Slider Portfolio
  const [currentSlide, setCurrentSlide] = useState({});
  // State untuk Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState("");

  const openLightbox = (src) => {
    setLightboxImg(src);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* HEADER Tipe Glassmorphism */}
      <header className="w-full max-w-5xl flex justify-between items-center px-8 py-4 sticky top-5 z-50 bg-white/85 backdrop-blur-md rounded-3xl border border-black/5 shadow-lg mx-auto">
        <a href="#beranda" className="flex items-center gap-3">
          <img src="https://i.ibb.co.com/qFXzr85s/vector2dme.png" alt="Logo" className="w-7 h-7 mix-blend-multiply" />
          <span className="text-xl font-bold text-slate-900 tracking-wide">KRISDAFI</span>
        </a>
        <nav>
          <ul className="flex flex-wrap gap-8 list-none">
            {['Beranda', 'Tentang Saya', 'Portofolio', 'Pendidikan', 'Pengalaman', 'Kontak'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-gray-600 hover:text-slate-900 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main className="w-full max-w-5xl flex flex-col gap-10 mt-10 mx-auto">
        
        {/* SECTION BERANDA */}
        <section id="beranda" className="w-full bg-gradient-to-br from-white via-gray-100 to-gray-300 border border-gray-200 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col-reverse md:flex-row items-center gap-10 min-h-[75vh]">
          <div className="flex-1 flex flex-col gap-4 text-center md:text-left">
            <span className="text-sm text-gray-500">Hi! Semua.. Pagi pagi makan ayam krispi, kenalin saya,</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">KRISDAFI</h1>
            <span className="text-sm text-gray-500">Mahasiswa Sistem Informasi | Game Developer & Desain Grafis | Administrasi & Purchasing</span>
            <p className="text-sm text-gray-500 leading-relaxed text-justify">
              Portofolio ini menggambarkan tentang memadukan efisiensi operasional dengan inovasi digital...
            </p>
            <a href="#kontak" className="mt-4 px-8 py-3 bg-[#0A192F] text-white text-lg font-bold rounded-full shadow-lg hover:-translate-y-1 hover:bg-[#112a4a] hover:shadow-xl transition-all self-center md:self-start">
              Hubungi Saya
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden flex justify-center items-center">
              <img src="https://i.ibb.co.com/LXhqZfjh/profile-me-transparant.png" alt="Krisdafi" className="w-full h-full object-cover scale-125 translate-y-5" />
            </div>
          </div>
        </section>

        {/* Tambahkan Section Lainnya (Tentang Saya, Portofolio, dll) mengikuti pola Tailwind di atas */}
        
      </main>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[1000] bg-black/90 flex justify-center items-center" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-10 right-10 text-white text-4xl font-bold hover:text-red-500">&times;</button>
          <img src={lightboxImg} alt="Zoomed" className="max-w-[90%] max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
      )}
    </>
  );
}