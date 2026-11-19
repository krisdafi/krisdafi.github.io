const educationData = {
    title: "Pendidikan",
    subtitle: "Riwayat pendidikan yang telah saya tempuh.",
    items: [
        {
            institution: "SMK TUNAS MARKATIN",
            logoUrl: "https://i.ibb.co.com/Ld1kkXt0/logo-markatin.png",
            logoAlt: "Logo SMK TUNAS MARKATIN",
            details: [
                { key: "Jurusan", value: "Administrasi Perkantoran" },
                { key: "Organisasi", value: "MPK" },
                { key: "Angkatan", value: "2017 - 2019" },
                { key: "Kota", value: "Jakarta Timur" }
            ]
        },
        {
            institution: "Universitas Asa Indo",
            logoUrl: "https://i.ibb.co.com/ymYBRYcf/logo-univ.png",
            logoAlt: "Logo Universitas Asa Indo",
            details: [
                { key: "Program Studi", value: "Sistem Informasi (S1)" },
                { key: "Semester", value: "Tiga (3)" },
                { key: "Kota", value: "Jakarta Timur" }
            ]
        },
        {
            institution: "ACCESS ES COURSE",
            logoUrl: "https://i.ibb.co.com/B27NsVnv/accesses.jpg",
            logoAlt: "Logo ACCESS ES COURSE",
            details: [
                { key: "Program Length", value: "1 Month (Full Day)" },
                { key: "Speaking Level", value: "2" },
                { key: "Pronounciation Level", value: "2" },
                { key: "Extra Class", value: "Public Speaking, Conversation" },
                { key: "Since", value: "2015" },
                { key: "Located", value: "Pare, Jawa Timur (Kampung Inggris)" }
            ]
        }
    ]
};

if (typeof module !== "undefined" && module.exports) {
    module.exports = educationData;
}
