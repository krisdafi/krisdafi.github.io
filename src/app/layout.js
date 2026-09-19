// src/app/layout.js
import './globals.css'

export const metadata = {
  title: 'Portofolio - KRISDAFI',
  description: 'Portofolio KRISDAFI - Mahasiswa Sistem Informasi, Game Developer, Desain Grafis, dan Administrasi.',
  keywords: ['Krisdafi', 'Portofolio Krisdafi', 'Game Developer Krisdafi', 'Administrasi Krisdafi'],
  authors: [{ name: 'Krisdafi' }],
  openGraph: {
    title: 'KRISDAFI - Web Portofolio',
    description: 'Mahasiswa Sistem Informasi | Game Developer & Desain Grafis | Administrasi & Purchasing',
    url: 'https://krisdafi17-web.github.io/portofolio-krisdafi', // Ganti dengan domain Anda nanti
    siteName: 'Portofolio Krisdafi',
    images: [
      {
        url: 'https://i.ibb.co.com/LXhqZfjh/profile-me-transparant.png',
        width: 800,
        height: 600,
      },
    ],
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" href="https://i.ibb.co.com/qFXzr85s/vector2dme.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="bg-gray-50 min-h-screen flex flex-col items-center px-4 py-8 overflow-x-hidden font-sans">
        {children}
      </body>
    </html>
  )
}