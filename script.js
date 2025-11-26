// Form gönderme işlemi
// Form ve başarı mesajı elementlerini seç
const form = document.getElementById('form');
const successMessage = document.getElementById('msg');

// Form gönderildiğinde çalışacak fonksiyon
form.addEventListener('submit', function(e) {
    // Sayfanın yenilenmesini engelle
    e.preventDefault();
    
    // Başarı mesajını göster
    successMessage.classList.add('show');
    
    // Formu temizle
    form.reset();
    
    // 3 saniye sonra mesajı gizle
    setTimeout(function() {
        successMessage.classList.remove('show');
    }, 3000);
});

// Smooth scroll için navigation linklerine tıklanınca
// # ile başlayan tüm nav linklerini seç
const navLinks = document.querySelectorAll('nav a[href^="#"]');

// Her link için tıklama olayı ekle
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Varsayılan davranışı engelle
        e.preventDefault();
        
        // Hedef section'ın ID'sini al
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Hedef section varsa yumuşak kaydırma yap
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animasyonu için (opsiyonel)
// Intersection Observer seçenekleri
const observerOptions = {
    threshold: 0.1, // Elementin %10'u görününce tetikle
    rootMargin: '0px 0px -100px 0px' // Alt kenardan 100px önce tetikle
};

// Observer oluştur
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        // Element görünüme girdiğinde
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // Görünür yap
            entry.target.style.transform = 'translateY(0)'; // Yukarı kaydır
        }
    });
}, observerOptions);

// Tüm section'ları gözlemle
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    // Başlangıç stilleri (görünmez ve aşağıda)
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    // Observer'a ekle
    observer.observe(section);
});

// Sayfa yüklendiğinde hero section'ı görünür yap
window.addEventListener('load', function() {
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        // Hero section'ı hemen görünür yap
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }
});