/**
 * CHINMAY S SONNAD - ULTRA-MODERN JAVASCRIPT ENGINE
 * Features:
 * 1. Velvet Ribbon Knot Untie & Auto-Draw Silk Curtains (1-Click Theatrical Opening)
 * 2. Fullscreen Menu Drawer with Interactive Live Preview HUD
 * 3. Cyber Matrix Text Scramble / Decryption Animations
 * 4. Magnetic Button Attraction & Click Radiant Shockwaves
 * 5. Real Async Email Delivery to chinmaysonnad06@gmail.com
 */

document.addEventListener('DOMContentLoaded', () => {
  initCurtainsLoader();
  initBackgroundCanvas();
  initFullscreenMenu();
  initScrollAnimations();
  initTextScramble();
  initInteractiveCards();
  initMagneticElements();
  initClickShockwaves();
  initContactForm();
  initEmailCopy();
  initCertificatesRenderer();
});

/* --------------------------------------------------------------------------
   1. VELVET RIBBON KNOT UNTIE & AUTO-DRAW SILK CURTAINS
   -------------------------------------------------------------------------- */
function initCurtainsLoader() {
  const preloader = document.getElementById('curtain-preloader');
  const knot = document.getElementById('curtain-knot');
  const leftCurtain = document.getElementById('curtain-left');
  const rightCurtain = document.getElementById('curtain-right');
  const statusLabel = document.getElementById('curtain-status-label');
  const openBtn = document.getElementById('curtain-open-btn');
  const sparkCanvas = document.getElementById('curtain-sparks');

  if (!preloader || !knot || !leftCurtain || !rightCurtain) return;

  // Stardust Sparks Canvas
  let sparkCtx = null;
  const sparks = [];
  if (sparkCanvas) {
    sparkCanvas.width = window.innerWidth;
    sparkCanvas.height = window.innerHeight;
    sparkCtx = sparkCanvas.getContext('2d');
  }

  function emitCurtainSparks(x, y, count = 15) {
    if (!sparkCtx) return;
    for (let i = 0; i < count; i++) {
      sparks.push({
        x: x + (Math.random() - 0.5) * 50,
        y: y + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 8,
        vy: (Math.random() - 0.7) * 7,
        size: Math.random() * 3.5 + 1.2,
        alpha: 1,
        color: Math.random() > 0.4 ? '#ff3344' : '#ffaa33',
      });
    }
  }

  function animateSparks() {
    if (!sparkCtx || preloader.classList.contains('opened')) return;
    sparkCtx.clearRect(0, 0, sparkCanvas.width, sparkCanvas.height);

    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.vy += 0.15; // gentle gravity
      s.alpha -= 0.025;

      if (s.alpha <= 0) {
        sparks.splice(i, 1);
        continue;
      }

      sparkCtx.beginPath();
      sparkCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      sparkCtx.fillStyle = s.color;
      sparkCtx.globalAlpha = Math.max(0, s.alpha);
      sparkCtx.shadowBlur = 14;
      sparkCtx.shadowColor = s.color;
      sparkCtx.fill();
    }
    sparkCtx.globalAlpha = 1;

    requestAnimationFrame(animateSparks);
  }
  animateSparks();

  let isUntied = false;

  function untieAndOpenCurtains() {
    if (isUntied) return;
    isUntied = true;

    // 1. Untie Knot Ribbon Animation
    knot.classList.add('untying');
    if (statusLabel) {
      statusLabel.textContent = '✨ UNTYING KNOT & UNVEILING STAGE...';
    }

    emitCurtainSparks(window.innerWidth / 2, window.innerHeight / 2, 50);

    // 2. Smoothly Auto-Draw Curtains Apart
    setTimeout(() => {
      leftCurtain.style.transition = 'transform 1.25s cubic-bezier(0.22, 1, 0.36, 1)';
      rightCurtain.style.transition = 'transform 1.25s cubic-bezier(0.22, 1, 0.36, 1)';

      leftCurtain.style.transform = 'translateX(-105%) scaleX(0.08)';
      rightCurtain.style.transform = 'translateX(105%) scaleX(0.08)';

      emitCurtainSparks(window.innerWidth / 2, window.innerHeight / 2, 35);
    }, 150);

    // 3. Complete Stage Reveal & Shockwave
    setTimeout(() => {
      preloader.classList.add('opened');
      triggerCelebratoryShockwave(window.innerWidth / 2, window.innerHeight / 2);
    }, 850);
  }

  // 1-Click Handlers on Knot, Button, and Stage
  knot.addEventListener('click', untieAndOpenCurtains);
  if (openBtn) {
    openBtn.addEventListener('click', untieAndOpenCurtains);
  }

  preloader.addEventListener('click', (e) => {
    if (!isUntied) {
      untieAndOpenCurtains();
    }
  });
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
   3. CYBER / MATRIX TEXT SCRAMBLE DECRYPTION ANIMATION
   -------------------------------------------------------------------------- */
function initTextScramble() {
  const chars = '!<>-_\\/[]{}—=+*^?#________';
  const scrambleElements = document.querySelectorAll('.section-title, .section-tag, .philosophy-giant-text');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.scrambled) {
          entry.target.dataset.scrambled = 'true';
          const originalText = entry.target.textContent.trim();
          let iteration = 0;

          const interval = setInterval(() => {
            entry.target.textContent = originalText
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < iteration) {
                  return originalText[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join('');

            if (iteration >= originalText.length) {
              clearInterval(interval);
              entry.target.textContent = originalText;
            }

            iteration += 1 / 2;
          }, 30);
        }
      });
    },
    { threshold: 0.2 }
  );

  scrambleElements.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   4. MAGNETIC BUTTONS & INTERACTIVE ELEMENTS
   -------------------------------------------------------------------------- */
function initMagneticElements() {
  const magnets = document.querySelectorAll('.btn-pill-sm, .btn-menu-trigger, .btn-hero-primary, .btn-hero-secondary, .social-circle-btn');

  magnets.forEach((elem) => {
    elem.addEventListener('mousemove', (e) => {
      const rect = elem.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      elem.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    elem.addEventListener('mouseleave', () => {
      elem.style.transform = '';
    });
  });
}

/* --------------------------------------------------------------------------
   5. INTERACTIVE CLICK SHOCKWAVE RIPPLES
   -------------------------------------------------------------------------- */
function initClickShockwaves() {
  window.addEventListener('click', (e) => {
    // Avoid interfering with modal triggers
    if (e.target.closest('#cert-modal')) return;
    triggerCelebratoryShockwave(e.clientX, e.clientY);
  });
}

function triggerCelebratoryShockwave(x, y) {
  const wave = document.createElement('div');
  wave.className = 'click-shockwave';
  wave.style.left = `${x}px`;
  wave.style.top = `${y}px`;
  document.body.appendChild(wave);

  setTimeout(() => {
    wave.remove();
  }, 600);
}

/* --------------------------------------------------------------------------
   6. ULTRA-PREMIUM FULLSCREEN MENU DRAWER WITH LIVE HUD PREVIEW
   -------------------------------------------------------------------------- */
function initFullscreenMenu() {
  const menuTrigger = document.getElementById('menu-trigger');
  const menuClose = document.getElementById('menu-close');
  const fullscreenMenu = document.getElementById('fullscreen-menu');
  const navItems = document.querySelectorAll('.menu-nav-item');
  const hudBadge = document.getElementById('menu-hud-badge');
  const hudDesc = document.getElementById('menu-hud-desc');

  if (!menuTrigger || !menuClose || !fullscreenMenu) return;

  function openMenu() {
    fullscreenMenu.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    fullscreenMenu.classList.remove('open');
    document.body.style.overflow = '';
  }

  menuTrigger.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);

  navItems.forEach((item) => {
    const link = item.querySelector('a');
    if (link) {
      link.addEventListener('click', closeMenu);
    }

    // Dynamic Live Preview Switcher on Hover
    item.addEventListener('mouseenter', () => {
      const title = item.getAttribute('data-preview-title');
      const desc = item.getAttribute('data-preview-desc');
      const badge = item.getAttribute('data-preview-badge');

      if (hudBadge && badge) hudBadge.textContent = badge;
      if (hudDesc && desc) hudDesc.textContent = `${title} — ${desc}`;
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && fullscreenMenu.classList.contains('open')) {
      closeMenu();
    }
  });
}

/* --------------------------------------------------------------------------
   7. SCROLL INTERSECTION OBSERVER ANIMATIONS
   -------------------------------------------------------------------------- */
function initScrollAnimations() {
  const fadeElems = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  fadeElems.forEach((el) => observer.observe(el));
}

/* --------------------------------------------------------------------------
   8. 3D CARD TILT ON HOVER
   -------------------------------------------------------------------------- */
function initInteractiveCards() {
  const cards = document.querySelectorAll('.bento-card, .cert-card, .timeline-card, .philosophy-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* --------------------------------------------------------------------------
   9. 1-CLICK EMAIL COPY & TOAST NOTIFICATION
   -------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'chinmaysonnad06@gmail.com';
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showToast('✓ Email copied to clipboard: chinmaysonnad06@gmail.com');
      })
      .catch(() => {
        showToast('Email: chinmaysonnad06@gmail.com');
      });
  });
}

function showToast(message) {
  const toast = document.getElementById('toast-notification');
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

/* --------------------------------------------------------------------------
   10. REAL ASYNC EMAIL DELIVERY & DISPATCH (Direct to chinmaysonnad06@gmail.com)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('portfolio-contact-form');
  if (!form) return;

  const submitBtn = form.querySelector('.btn-send-message');
  const originalBtnContent = submitBtn ? submitBtn.innerHTML : 'Send Message';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('form-name').value.trim();
    const email = document.getElementById('form-email').value.trim();
    const message = document.getElementById('form-message').value.trim();

    if (!name || !email || !message) {
      showToast('⚠️ Please complete all fields before sending.');
      return;
    }

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Delivering Message...</span> ⏳';
    }

    try {
      // Direct AJAX delivery to chinmaysonnad06@gmail.com via FormSubmit API
      const response = await fetch('https://formsubmit.co/ajax/chinmaysonnad06@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
          _subject: `⚡ Portfolio Inquiry from ${name} (${email})`,
        }),
      });

      if (response.ok) {
        showToast(`✨ Message delivered! Thanks ${name}, sent to chinmaysonnad06@gmail.com.`);
        form.reset();
      } else {
        openMailClientFallback(name, email, message);
      }
    } catch (err) {
      console.warn('FormSubmit AJAX fallback:', err);
      openMailClientFallback(name, email, message);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;
      }
    }
  });
}

function openMailClientFallback(name, email, message) {
  const mailtoUri = `mailto:chinmaysonnad06@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name}`
  )}&body=${encodeURIComponent(`Hi Chinmay,\n\n${message}\n\nFrom: ${name} (${email})`)}`;

  window.location.href = mailtoUri;
  showToast('✓ Opening your email client to dispatch to chinmaysonnad06@gmail.com...');
}

/* --------------------------------------------------------------------------
   11. CERTIFICATES DATA & MODAL RENDERER
   -------------------------------------------------------------------------- */
const certificatesData = [
  {
    id: 'cert-tcs-techbytes',
    title: 'TCS TechBytes Regional Tech Quiz (2nd Place)',
    issuer: 'Tata Consultancy Services (TCS) & BITES',
    year: '2026',
    badge: '🥈 2nd Place Winner',
    image: 'assets/images/techbytes.jpeg',
    description: 'Awarded 2nd Place in the state-wide TCS TechBytes Inter-College Technical Quiz competition for exceptional knowledge in computer systems, emerging technologies, algorithms, and computational thinking.',
    tags: ['TCS TechBytes', '2nd Place', 'Technical Quiz', 'Algorithms', 'Computer Science'],
  },
  {
    id: 'cert-avalanche-hackathon-2025',
    title: 'Avalanche 2025 Hackathon',
    issuer: 'KLS Gogte Institute of Technology',
    year: '2025',
    badge: 'Hackathon Competitor',
    image: 'assets/images/avalanche hackthaon 2025.jpeg',
    description: 'Certificate of Participation in Avalanche 2025 Annual National-Level Hackathon. Formulated and engineered rapid real-world software prototypes under high-pressure competitive constraints.',
    tags: ['Avalanche 2025', 'Hackathon', 'Web Prototyping', 'Rapid Dev'],
  },
  {
    id: 'cert-secret-signal',
    title: 'Secret Signal Tech Treasure Hunt & Quiz (1st Place)',
    issuer: 'Avalanche 2025 Techfest - KLS GIT',
    year: '2025',
    badge: '🥇 1st Place Winner',
    image: 'assets/images/secret signal.jpeg',
    description: 'Secured 1st Place (Winner) in the Secret Signal Technical Treasure Hunt & Problem Solving competition during Avalanche 2025 Techfest, solving complex riddles, deciphering cryptographic clues, and algorithmic tasks.',
    tags: ['1st Place Winner', 'Treasure Hunt', 'Cryptography', 'Problem Solving'],
  },
  {
    id: 'cert-cpp-skill-lab',
    title: 'C++ Skill Lab Certification 2025',
    issuer: 'KLS Gogte Institute of Technology',
    year: '2025',
    badge: 'Skill Lab Certification',
    image: 'assets/images/skill lab c++.jpeg',
    description: 'Successfully completed the intensive C++ Skill Lab at KLS GIT with hands-on mastery in Object-Oriented Programming (OOP), memory management, pointer manipulation, and Standard Template Library (STL).',
    tags: ['C++', 'Skill Lab', 'OOP', 'STL', 'Memory Management'],
  },
  {
    id: 'cert-iit-madras-dirv',
    title: 'Digital India RISC-V (DIR-V) Symposium 2025',
    issuer: 'IIT Madras & MeitY, Govt. of India',
    year: '2025',
    badge: 'Symposium & Hardware',
    image: 'assets/images/IIT madras.jpg',
    description: 'Participated in the Digital India RISC-V (DIR-V) Symposium 2025 hosted at IIT Madras in collaboration with the Ministry of Electronics and Information Technology (MeitY), exploring open semiconductor architectures.',
    tags: ['DIR-V', 'RISC-V', 'IIT Madras', 'Semiconductors', 'Hardware'],
  },
  {
    id: 'cert-make-in-git',
    title: 'Make In GIT - Innovation of Ideas Event',
    issuer: 'KLS Gogte Institute of Technology',
    year: '2025',
    badge: 'Innovation of Ideas',
    image: 'assets/images/Make_In_GIT.jpeg',
    description: 'Certificate awarded for participating in Make In GIT Innovation Event, designing and pitching creative technical solutions, product architectures, and engineering concepts to an expert jury.',
    tags: ['Make In GIT', 'Innovation', 'Idea Pitching', 'Engineering'],
  },
  {
    id: 'cert-student-leadership',
    title: 'Student Leadership Program',
    issuer: 'IEEE Student Branch Club',
    year: '2026',
    badge: 'IEEE Leadership',
    image: 'assets/images/student leadership program.jpeg',
    description: 'Completed the Student Leadership Program conducted by the IEEE Student Branch Club, mastering team orchestration, project execution, technical event management, and collaborative communication.',
    tags: ['IEEE', 'Leadership', 'Event Management', 'Student Branch'],
  },
  {
    id: 'cert-avalanche-hackathon',
    title: 'Avalanche 2024 Hackathon - Round 3 Finalist',
    issuer: 'KLS Gogte Institute of Technology',
    year: '2024',
    badge: 'Round 3 Finalist',
    image: 'assets/images/avalnche 2024 hackthaon.jpg',
    description: 'Achieved Round 3 Finalist standing in the Avalanche 2024 National Hackathon (Web Development Track), presenting a full-stack solution to an esteemed judging panel.',
    tags: ['Avalanche 2024', 'Hackathon', 'Finalist', 'Web Development'],
  },
  {
    id: 'cert-astronomy-camp',
    title: 'Astronomy Exposure Camp - Model Making',
    issuer: 'Astronomy & Science Association',
    year: '2024',
    badge: 'Model Making',
    image: 'assets/images/Astronomy Exposure camp.jpeg',
    description: 'Participated in the Astronomy Exposure Camp and constructed physical & astronomical models demonstrating astrophysics principles, celestial motion, and space concepts.',
    tags: ['Astronomy', 'Model Making', 'Astrophysics', 'Science'],
  },
];

function initCertificatesRenderer() {
  window.openCertModal = function (certId) {
    const cert = certificatesData.find((c) => c.id === certId);
    if (!cert) return;

    const modal = document.getElementById('cert-modal');
    const modalImg = document.getElementById('cert-modal-img');
    const modalTitle = document.getElementById('cert-modal-title');
    const modalIssuer = document.getElementById('cert-modal-issuer');
    const modalDesc = document.getElementById('cert-modal-desc');
    const modalTags = document.getElementById('cert-modal-tags');

    modalImg.src = cert.image;
    modalImg.alt = cert.title;
    modalTitle.textContent = cert.title;
    modalIssuer.textContent = `🏛️ ${cert.issuer} • ${cert.year} (${cert.badge})`;
    modalDesc.textContent = cert.description;

    modalTags.innerHTML = '';
    cert.tags.forEach((tag) => {
      const span = document.createElement('span');
      span.className = 'cert-tag';
      span.textContent = tag;
      modalTags.appendChild(span);
    });

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  window.closeCertModal = function () {
    const modal = document.getElementById('cert-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
}
