const profileData = {
    brand: {
        name: "KRISDAFI",
        logoUrl: "https://i.ibb.co.com/qFXzr85s/vector2dme.png"
    },
    nav: [
        { label: "Beranda", href: "#beranda" },
        { label: "Tentang Saya", href: "#tentang-saya" },
        { label: "Portofolio", href: "#portofolio" },
        { label: "Pendidikan", href: "#pendidikan" },
        { label: "Pengalaman", href: "#pengalaman" },
        { label: "Kontak", href: "#kontak" }
    ],
    hero: {
        greeting: "Hi! Semua.. Pagi pagi makan ayam krispi, kenalin saya,",
        name: "KRISDAFI",
        role: "Mahasiswa Sistem Informasi | Game Developer & Desain Grafis | Administrasi & Purchasing",
        desc: "Portofolio ini menggambarkan tentang memadukan efisiensi operasional dengan inovasi digital. Berpengalaman kuat di bidang Administrasi & Purchasing, dilengkapi dengan keahlian teknis dalam Desain dan Game Development. Siap menghadirkan solusi yang sistematis, efisien, dan kreatif.",
        ctaText: "Hubungi Saya",
        ctaHref: "#kontak",
        photoUrl: "https://i.ibb.co.com/gMn7cvDZ/profile-me-transparant.png",
        photoAlt: "Foto Profil KRISDAFI"
    },
    contacts: [
        { title: "Gmail", href: "mailto:krisdafi17@gmail.com", iconClass: "fa-solid fa-envelope" },
        { title: "GitHub", href: "https://github.com/krisdafi/krisdafi.github.io", iconClass: "fa-brands fa-github" },
        { title: "Instagram", href: "https://instagram.com/krisdave171", iconClass: "fa-brands fa-instagram" }
    ],
    footer: {
        creditPrefix: "dibuat oleh",
        authorName: "KRISDAFI",
        authorHref: "#"
    }
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = profileData;
}
