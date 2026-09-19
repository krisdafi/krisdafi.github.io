import './globals.css';

export const metadata = {
  title: 'Portofolio - KRISDAFI',
  description: 'Portofolio KRISDAFI - Mahasiswa Sistem Informasi, Game Developer, Desain Grafis, dan Administrasi.',
  // Keywords ditambahkan di sini agar Google mengenali nama Anda
  keywords: ['Krisdafi', 'Kris Dafi', 'Portofolio Krisdafi', 'Game Developer Krisdafi', 'Desain Grafis', 'Administrasi'],
  openGraph: {
    title: 'KRISDAFI - Web Portofolio',
    description: 'Mahasiswa Sistem Informasi | Game Developer & Desain Grafis',
    url: 'https://krisdafi.github.io', 
    siteName: 'Portofolio Krisdafi',
    type: 'website',
  },
  icons: {
    icon: 'https://i.ibb.co.com/qFXzr85s/vector2dme.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        {/* TEMPEL KODE VERIFIKASI GOOGLE DI SINI */}
        <meta name="google-site-verification" content="PASTE_KODE_ANDA_DI_SINI" />
      </head>
      <body className="bg-[#f9fafb] min-h-screen flex flex-col items-center p-4 md:p-8 overflow-x-hidden font-['Inter']">
        {children}
      </body>
    </html>
  );
}