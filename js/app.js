/**
 * CHINMAY S SONNAD - ULTRA-MODERN JAVASCRIPT ENGINE
 * Inspired by Cinematic Showcase (Preloader 0->100, Canvas Aura, Bento 3D Tilt, Modal Drawer)
 */

document.addEventListener('DOMContentLoaded', () => {
  initPreloader();
  initBackgroundCanvas();
  initFullscreenMenu();
  initScrollAnimations();
  initInteractiveCards();
  initContactForm();
  initEmailCopy();
  initCertificatesRenderer();
});

/* --------------------------------------------------------------------------
   1. PRELOADER COUNTER (0 to 100)
   -------------------------------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById('preloader');
  const countElem = document.getElementById('preloader-counter');
  const barElem = document.getElementById('preloader-bar');

  if (!preloader || !countElem || !barElem) return;

  let current = 0;
  const duration = 1200; // ms
  const stepTime = 15;
  const increment = 100 / (duration / stepTime);

  const timer = setInterval(() => {
    current += increment;
    if (current >= 100) {
      current = 100;
      clearInterval(timer);
      countElem.textContent = '100';
      barElem.style.width = '100%';

      setTimeout(() => {
        preloader.classList.add('loaded');
      }, 250);
    } else {
      const displayVal = Math.floor(current);
      countElem.textContent = displayVal < 10 ? `0${displayVal}` : `${displayVal}`;
      barElem.style.width = `${displayVal}%`;
    }
  }, stepTime);
}

/* --------------------------------------------------------------------------
   2. AMBIENT BACKGROUND CANVAS & MOUSE AURA
   -------------------------------------------------------------------------- */
function initBackgroundCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = 45;

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.8 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
    });
  }

  let mouseX = width / 2;
  let mouseY = height / 2;

  const aura = document.getElementById('ambient-aura');

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (aura) {
      aura.style.left = `${e.clientX}px`;
      aura.style.top = `${e.clientY}px`;
    }
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Render subtle crimson particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(230, 25, 60, ${p.alpha})`;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  }

  animate();
}

/* --------------------------------------------------------------------------
   3. FULLSCREEN MENU OVERLAY
   -------------------------------------------------------------------------- */
function initFullscreenMenu() {
  const menuTrigger = document.getElementById('menu-trigger');
  const menuClose = document.getElementById('menu-close');
  const menuDrawer = document.getElementById('fullscreen-menu');
  const menuLinks = document.querySelectorAll('.menu-nav-item a');

  if (!menuTrigger || !menuDrawer) return;

  function openMenu() {
    menuDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuDrawer.classList.remove('open');
    document.body.style.overflow = 'auto';
  }

  menuTrigger.addEventListener('click', openMenu);
  if (menuClose) menuClose.addEventListener('click', closeMenu);

  menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuDrawer.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   4. SCROLL-TRIGGERED REVEAL ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   5. 3D CARD TILT & MOUSE HIGHLIGHT
   -------------------------------------------------------------------------- */
function initInteractiveCards() {
  const cards = document.querySelectorAll('.bento-card, .cert-card, .philosophy-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)`;
    });
  });
}

/* --------------------------------------------------------------------------
   6. DYNAMIC CERTIFICATES & MODAL VIEWER
   -------------------------------------------------------------------------- */
function initCertificatesRenderer() {
  if (typeof feather !== 'undefined') {
    feather.replace();
  }
}

function openCertModal(certId) {
  const modal = document.getElementById('cert-modal');
  const modalImg = document.getElementById('cert-modal-img');
  const modalTitle = document.getElementById('cert-modal-title');
  const modalIssuer = document.getElementById('cert-modal-issuer');
  const modalDesc = document.getElementById('cert-modal-desc');
  const modalTags = document.getElementById('cert-modal-tags');

  if (!modal || typeof PORTFOLIO_CONFIG === 'undefined') return;

  const cert = PORTFOLIO_CONFIG.certificates.find((c) => c.id === certId);
  if (!cert) return;

  modalImg.src = cert.image;
  modalImg.alt = cert.title;
  modalTitle.textContent = cert.title;
  modalIssuer.textContent = `${cert.issuer} • (${cert.date})`;
  modalDesc.textContent = cert.description;

  modalTags.innerHTML = cert.skills
    .map((skill) => `<span class="cert-tag">${skill}</span>`)
    .join('');

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (typeof feather !== 'undefined') {
    feather.replace();
  }
}

function closeCertModal() {
  const modal = document.getElementById('cert-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

window.openCertModal = openCertModal;
window.closeCertModal = closeCertModal;

/* --------------------------------------------------------------------------
   7. INSTANT EMAIL COPY
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'chinmaysonnad06@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('📋 Email copied to clipboard: chinmaysonnad06@gmail.com');
    });
  });
}

/* --------------------------------------------------------------------------
   8. CONTACT FORM & TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name')?.value || 'Friend';
    showToast(`🚀 Thank you, ${name}! Your message has been prepared.`);
    form.reset();
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
