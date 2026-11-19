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
        { title: "WhatsApp", href: "#", iconClass: "fa-brands fa-whatsapp" },
        { title: "Gmail", href: "#", iconClass: "fa-solid fa-envelope" },
        { title: "Instagram", href: "#", iconClass: "fa-brands fa-instagram" },
        { title: "Github", href: "#", iconClass: "fa-brands fa-github" },
        { title: "Glints", href: "#", iconClass: "fa-solid fa-briefcase" }
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
