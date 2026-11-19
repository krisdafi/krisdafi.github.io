function renderApp() {
    const brandGroup = document.getElementById("brand-group");
    brandGroup.innerHTML = `
        <img src="${profileData.brand.logoUrl}" alt="Logo" class="nav-logo">
        <span class="logo-text">${profileData.brand.name}</span>
    `;

    const navList = document.getElementById("nav-list");
    navList.innerHTML = profileData.nav.map(item => `
        <li><a href="${item.href}">${item.label}</a></li>
    `).join("");

    const berandaSection = document.getElementById("beranda");
    berandaSection.innerHTML = `
        <div class="hero-text">
            <span class="greeting">${profileData.hero.greeting}</span>
            <h1 class="name">${profileData.hero.name}</h1>
            <span class="role">${profileData.hero.role}</span>
            <p class="desc">${profileData.hero.desc}</p>
            <a href="${profileData.hero.ctaHref}" class="btn-hubungi">${profileData.hero.ctaText}</a>
        </div>
        <div class="hero-image">
            <div class="image-frame">
                <img src="${profileData.hero.photoUrl}" alt="${profileData.hero.photoAlt}">
            </div>
        </div>
    `;

    const aboutSection = document.getElementById("tentang-saya");
    aboutSection.innerHTML = `
        <h2 class="about-header">${aboutData.title}</h2>
        <div class="about-content">
            ${aboutData.groups.map(group => `
                <div class="about-group">
                    <h3 class="about-title">${group.heading}</h3>
                    <ul class="about-list">
                        ${group.items.map(item => `
                            <li>${item.label ? `<strong>${item.label}</strong> ` : ""}${item.text}</li>
                        `).join("")}
                    </ul>
                </div>
            `).join("")}
        </div>
    `;

    const portfolioSection = document.getElementById("portofolio");
    portfolioSection.innerHTML = `
        <div class="portfolio-header-container">
            <h2 class="about-header">${portfolioData.title}</h2>
            <p style="font-size: 12px; color: #6b7280; margin-top: 10px;">${portfolioData.subtitle}</p>
        </div>
        <div class="portfolio-grid">
            ${portfolioData.items.map(item => {
                const hasMultiple = item.images.length > 1;
                const linkAttrs = item.isExternal ? `target="_blank" rel="noopener noreferrer"` : `style="cursor: default;"`;
                const descBlock = item.descriptionHtml
                    ? `<div class="desc-content line-clamp">${item.descriptionHtml}</div><span class="read-more-btn">Lihat Selengkapnya</span>`
                    : ``;

                return `
                    <div class="portfolio-item">
                        <div class="slider-wrapper">
                            <div class="slides">
                                ${item.images.map(img => `
                                    <div class="slide"><img src="${img.src}" alt="${img.alt}"></div>
                                `).join("")}
                            </div>
                            ${hasMultiple ? `
                                <button class="slider-btn prev"><i class="fa-solid fa-chevron-left"></i></button>
                                <button class="slider-btn next"><i class="fa-solid fa-chevron-right"></i></button>
                                <div class="dots">
                                    ${item.images.map((_, idx) => `<span class="dot ${idx === 0 ? "active" : ""}"></span>`).join("")}
                                </div>
                            ` : ""}
                        </div>
                        <div class="portfolio-info">
                            <a href="${item.url}" ${linkAttrs} class="portfolio-title">${item.title}</a>
                            <div class="portfolio-desc">
                                ${descBlock}
                            </div>
                        </div>
                    </div>
                `;
            }).join("")}
        </div>
    `;

    const educationSection = document.getElementById("pendidikan");
    educationSection.innerHTML = `
        <div class="education-header-container">
            <h2 class="about-header">${educationData.title}</h2>
            <p style="font-size: 12px; color: #6b7280; margin-top: 10px;">${educationData.subtitle}</p>
        </div>
        <div class="education-grid">
            ${educationData.items.map(edu => `
                <div class="education-item">
                    <img src="${edu.logoUrl}" alt="${edu.logoAlt}" class="education-icon">
                    <h3 class="education-title">${edu.institution}</h3>
                    <table class="edu-table">
                        ${edu.details.map(d => `
                            <tr>
                                <td>${d.key}</td>
                                <td>:</td>
                                <td>${d.value}</td>
                            </tr>
                        `).join("")}
                    </table>
                </div>
            `).join("")}
        </div>
    `;

    const experienceSection = document.getElementById("pengalaman");
    experienceSection.innerHTML = `
        <div class="education-header-container">
            <h2 class="about-header">${experienceData.title}</h2>
            <p style="font-size: 12px; color: #6b7280; margin-top: 10px;">${experienceData.subtitle}</p>
        </div>
        <div class="experience-grid">
            ${experienceData.items.map(exp => `
                <div class="experience-item">
                    <div style="display: flex; justify-content: center; width: 100%; margin-bottom: 10px;">
                        <img src="${exp.logoUrl}" alt="${exp.logoAlt}" class="${exp.logoClass}" ${exp.logoStyle ? `style="${exp.logoStyle}"` : ""}>
                    </div>
                    <h3 class="experience-title">${exp.company}</h3>
                    <table class="edu-table">
                        <tr>
                            <td>Periode</td>
                            <td>:</td>
                            <td>${exp.period}</td>
                        </tr>
                        <tr>
                            <td>Jabatan</td>
                            <td>:</td>
                            <td>${exp.role}</td>
                        </tr>
                    </table>
                    <div class="portfolio-desc" style="width: 100%; margin-top: 10px;">
                        <div class="desc-content collapse-content">
                            <p style="text-align: justify; margin-bottom: 8px; font-weight: 600; color: #111827;">Rincian Tugas & Tanggung Jawab (Jobdesc):</p>
                            <ul class="experience-list">
                                ${exp.jobdescs.map(job => `
                                    <li><strong>${job.title}</strong> ${job.desc}</li>
                                `).join("")}
                            </ul>
                        </div>
                        <span class="read-more-btn" style="display: inline-block;">Lihat Selengkapnya</span>
                    </div>
                </div>
            `).join("")}
        </div>
    `;

    const footerSection = document.getElementById("kontak");
    footerSection.innerHTML = `
        <div class="social-icons">
            ${profileData.contacts.map(c => {
                const isExternal = c.href.startsWith("http");
                return `<a href="${c.href}" title="${c.title}"${isExternal ? ` target="_blank" rel="noopener noreferrer"` : ""}><i class="${c.iconClass}"></i></a>`;
            }).join("")}
        </div>
        <div class="footer-credit">
            ${profileData.footer.creditPrefix} <a href="${profileData.footer.authorHref}" class="author-btn">${profileData.footer.authorName}</a>
        </div>
    `;
}

function initInteractions() {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        const slidesContainer = item.querySelector('.slides');
        if (!slidesContainer) return;

        const slides = item.querySelectorAll('.slide');
        const prevBtn = item.querySelector('.prev');
        const nextBtn = item.querySelector('.next');
        const dotsContainer = item.querySelector('.dots');
        const dots = item.querySelectorAll('.dot');

        if (slides.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
            if (dotsContainer) dotsContainer.style.display = 'none';
            return;
        }

        let currentIndex = 0;

        function updateSlider() {
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % slides.length;
                updateSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + slides.length) % slides.length;
                updateSlider();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                updateSlider();
            });
        });
    });

    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const parent = this.parentElement;
            const content = parent.querySelector('.desc-content');
            
            if (!content) return;

            const isExpanded = content.classList.contains('expanded');

            document.querySelectorAll('.desc-content.expanded').forEach(expandedContent => {
                if (expandedContent !== content) {
                    expandedContent.classList.remove('expanded');
                    const otherBtn = expandedContent.parentElement.querySelector('.read-more-btn');
                    if (otherBtn) otherBtn.textContent = 'Lihat Selengkapnya';
                }
            });

            if (isExpanded) {
                content.classList.remove('expanded');
                this.textContent = 'Lihat Selengkapnya';
            } else {
                content.classList.add('expanded');
                this.textContent = 'Tutup Kembali';
            }
        });
    });

    document.querySelectorAll('.portfolio-desc').forEach(desc => {
        const content = desc.querySelector('.desc-content');
        const btn = desc.querySelector('.read-more-btn');
        if (content && content.textContent.trim() === '') {
            if (btn) btn.style.display = 'none';
        }
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lbClose = document.getElementById('lb-close');
    const lbPrev = document.getElementById('lb-prev');
    const lbNext = document.getElementById('lb-next');
    
    let currentGroupImages = [];
    let currentImageIndex = 0;

    document.querySelectorAll('.portfolio-item').forEach(item => {
        const images = Array.from(item.querySelectorAll('.slide img'));
        
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                currentGroupImages = images.map(i => i.src);
                currentImageIndex = index;
                updateLightboxContent();
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
    });

    function updateLightboxContent() {
        if (currentGroupImages.length > 0) {
            lightboxImg.src = currentGroupImages[currentImageIndex];
            
            if (currentGroupImages.length <= 1) {
                lbPrev.style.display = 'none';
                lbNext.style.display = 'none';
            } else {
                lbPrev.style.display = 'flex';
                lbNext.style.display = 'flex';
            }
        }
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

    lbClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    lbNext.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % currentGroupImages.length;
        updateLightboxContent();
    });

    lbPrev.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + currentGroupImages.length) % currentGroupImages.length;
        updateLightboxContent();
    });
    
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight' && currentGroupImages.length > 1) {
            currentImageIndex = (currentImageIndex + 1) % currentGroupImages.length;
            updateLightboxContent();
        }
        if (e.key === 'ArrowLeft' && currentGroupImages.length > 1) {
            currentImageIndex = (currentImageIndex - 1 + currentGroupImages.length) % currentGroupImages.length;
            updateLightboxContent();
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderApp();
    initInteractions();
});
