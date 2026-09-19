/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Menyuruh Next.js membuat file statis HTML
  images: {
    unoptimized: true, // Mematikan optimasi gambar server karena GitHub Pages tidak mendukungnya
  },
};

export default nextConfig;