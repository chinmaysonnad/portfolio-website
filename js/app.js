/**
 * Application Engine & Interactive Logic
 */

document.addEventListener("DOMContentLoaded", () => {
  initPortfolio();
});

function initPortfolio() {
  renderProfileData();
  renderFlashcards();
  renderSkills();
  renderProjects(PORTFOLIO_CONFIG.projects);
  renderCertificates();
  renderExperience();
  initProjectFilters();
  initInteractiveTerminal();
  initContactForm();
  initThemeSwitcher();
  initScrollAnimations();
  initFeatherIcons();
}

/**
 * Render Header & Hero Profile Details from CONFIG
 */
function renderProfileData() {
  const p = PORTFOLIO_CONFIG.profile;
  
  // Hero texts
  document.getElementById("hero-name").textContent = p.name;
  document.getElementById("hero-tagline").textContent = p.tagline;
  document.getElementById("hero-status-text").textContent = p.statusText;
  document.getElementById("hero-avatar").src = p.avatar;
  document.getElementById("hero-location").textContent = p.location;
  document.getElementById("hero-role-badge").textContent = p.roleTitle;

  // Metrics
  document.getElementById("metric-years").textContent = p.yearsExperience + "+";
  document.getElementById("metric-projects").textContent = p.completedProjects + "+";
  document.getElementById("metric-commits").textContent = p.codeCommitsMonth + "+";

  // Typewriter effect
  initTypewriter(p.roleTitle);
}

/**
 * Typewriter effect for Hero Role
 */
function initTypewriter(text) {
  const target = document.getElementById("typewriter-role");
  if (!target) return;

  const roles = [
    text,
    "AI Systems Integrator",
    "Full-Stack Architect",
    "Creative Tech Enthusiast"
  ];
  let roleIdx = 0;
  let charIdx = 0;
  let isDeleting = false;

  function type() {
    const currentRole = roles[roleIdx];
    
    if (isDeleting) {
      target.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
    } else {
      target.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIdx === currentRole.length) {
      typeSpeed = 2200; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      typeSpeed = 400;
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/**
 * Render Tech Flashcards
 */
function renderFlashcards() {
  const container = document.getElementById("flashcard-skills-grid");
  if (!container || !PORTFOLIO_CONFIG.techFlashcards) return;

  container.className = "skill-brand-grid";
  container.innerHTML = PORTFOLIO_CONFIG.techFlashcards
    .map(
      (card) => `
      <a href="${card.url}" target="_blank" class="skill-brand-card" title="Open ${card.name} Official Documentation">
        <img src="${card.logo}" alt="${card.name} Logo" loading="lazy" style="width: 26px; height: 26px; object-fit: contain;" />
        <h4>${card.name}</h4>
        <p>${card.description}</p>
      </a>
    `
    )
    .join("");

  initFeatherIcons();
}

/**
 * Render Skills Matrix
 */
function renderSkills() {
  const container = document.getElementById("skills-grid");
  if (!container) return;

  container.innerHTML = PORTFOLIO_CONFIG.skillsCategories
    .map(
      (cat) => `
      <div class="skill-category-card">
        <div class="skill-card-header">
          <div class="skill-icon">
            <i data-feather="${cat.icon || 'code'}"></i>
          </div>
          <h3>${cat.title}</h3>
        </div>
        <div class="skill-list">
          ${cat.skills
            .map(
              (s) => `
            <div class="skill-item">
              <div class="skill-info">
                <span>${s.name}</span>
                <span class="skill-badge">${s.badge}</span>
              </div>
              <div class="progress-bar-bg">
                <div class="progress-bar-fill" style="width: ${s.level}%;"></div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `
    )
    .join("");
}

/**
 * Render Project Cards
 */
function renderProjects(projectsList) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  if (projectsList.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem; color: var(--text-muted);">
        <i data-feather="folder-off" style="width: 48px; height: 48px; margin-bottom: 1rem; color: var(--accent-cyan);"></i>
        <h3>No projects match your filter.</h3>
        <p>Try searching for another keyword or selecting 'All'.</p>
      </div>
    `;
    initFeatherIcons();
    return;
  }

  grid.innerHTML = projectsList
    .map(
      (proj) => `
      <article class="project-card">
        <div class="project-thumb">
          <img src="${proj.image}" alt="${proj.title}" loading="lazy" />
          <span class="project-cat-badge">${proj.categoryName}</span>
        </div>
        <div class="project-content">
          <h3 class="project-title">${proj.title}</h3>
          <p class="project-desc">${proj.description}</p>
          <div class="tech-tags">
            ${proj.techStack.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-actions">
            <button class="project-link-btn" onclick="openProjectModal('${proj.id}')">
              <span>View Details</span> <i data-feather="arrow-right"></i>
            </button>
            <div style="display: flex; gap: 0.5rem;">
              <a href="${proj.github}" target="_blank" class="btn-icon" title="Source Code">
                <i data-feather="github"></i>
              </a>
              <a href="${proj.liveDemo}" target="_blank" class="btn-icon" title="Live Preview">
                <i data-feather="external-link"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  initFeatherIcons();
}

/**
 * Filter and Search Handlers
 */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const searchInput = document.getElementById("project-search");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.getAttribute("data-filter");
      filterProjectsList(category, searchInput ? searchInput.value : "");
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const activeCategory =
        document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "all";
      filterProjectsList(activeCategory, e.target.value);
    });
  }
}

function filterProjectsList(category, query) {
  let filtered = PORTFOLIO_CONFIG.projects;

  if (category !== "all") {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (query.trim() !== "") {
    const q = query.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.techStack.some((t) => t.toLowerCase().includes(q))
    );
  }

  renderProjects(filtered);
}

/**
 * Project Modal Viewer
 */
window.openProjectModal = function (projectId) {
  const proj = PORTFOLIO_CONFIG.projects.find((p) => p.id === projectId);
  if (!proj) return;

  const modalContainer = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body-content");

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="section-tag">${proj.categoryName}</span>
      <h2 style="font-family: var(--font-heading); font-size: 2.2rem; margin-top: 0.5rem;">${proj.title}</h2>
    </div>
    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem;">
      <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: 320px; object-fit: cover;" />
    </div>
    <p style="color: var(--text-muted); font-size: 1.1rem; line-height: 1.7; margin-bottom: 1.5rem;">
      ${proj.longDescription}
    </p>

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; background: rgba(255, 255, 255, 0.04); padding: 1.25rem; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
      ${Object.entries(proj.stats || {})
        .map(
          ([key, val]) => `
        <div>
          <div style="font-size: 0.8rem; color: var(--text-dim); text-transform: uppercase;">${key}</div>
          <div style="font-size: 1.2rem; font-weight: 700; color: var(--accent-cyan);">${val}</div>
        </div>
      `
        )
        .join("")}
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="margin-bottom: 0.75rem;">Technologies Used</h4>
      <div class="tech-tags">
        ${proj.techStack.map((t) => `<span class="tech-tag" style="font-size: 0.85rem; padding: 0.35rem 0.85rem;">${t}</span>`).join("")}
      </div>
    </div>

    <div style="display: flex; gap: 1rem;">
      <a href="${proj.liveDemo}" target="_blank" class="btn-primary">
        <span>Launch Live Demo</span> <i data-feather="external-link"></i>
      </a>
      <a href="${proj.github}" target="_blank" class="btn-secondary">
        <span>View Source</span> <i data-feather="github"></i>
      </a>
    </div>
  `;

  modalContainer.classList.add("active");
  initFeatherIcons();
};

window.closeModal = function () {
  document.getElementById("modal-overlay").classList.remove("active");
};

/**
 * Render Experience Timeline
 */
function renderExperience() {
  const container = document.getElementById("timeline-container");
  if (!container) return;

  container.innerHTML = PORTFOLIO_CONFIG.experience
    .map(
      (exp) => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-period">${exp.period}</div>
          <h3 class="timeline-role">${exp.role}</h3>
          <div class="timeline-company">${exp.company}</div>
          <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1rem;">${exp.description}</p>
          <ul class="timeline-highlights">
            ${exp.highlights.map((h) => `<li>${h}</li>`).join("")}
          </ul>
        </div>
      </div>
    `
    )
    .join("");
}

/**
 * Dev CLI Terminal Handler
 */
function initInteractiveTerminal() {
  const termBody = document.getElementById("terminal-body");
  const termInput = document.getElementById("terminal-input");
  if (!termBody || !termInput) return;

  // Print welcome
  appendTerminalLine(PORTFOLIO_CONFIG.terminal.welcomeMessage, "welcome");

  termInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const cmd = termInput.value.trim().toLowerCase();
      if (cmd === "") return;

      appendTerminalLine(`$ ${cmd}`, "input");
      termInput.value = "";

      executeCommand(cmd);
    }
  });
}

window.runShortcutCmd = function (cmd) {
  const termInput = document.getElementById("terminal-input");
  if (termInput) {
    termInput.value = "";
  }
  appendTerminalLine(`$ ${cmd}`, "input");
  executeCommand(cmd);
};

function executeCommand(cmd) {
  const cleanCmd = cmd.trim().toLowerCase();
  if (cleanCmd === "clear") {
    document.getElementById("terminal-body").innerHTML = "";
    return;
  }

  const output = PORTFOLIO_CONFIG.terminal.commands[cleanCmd];
  if (output) {
    appendTerminalLine(output, "output");

    // Smoothly navigate to corresponding section on webpage
    const sectionMap = {
      bio: "about",
      skills: "skills",
      projects: "projects",
      certs: "certificates",
      certificates: "certificates",
      education: "experience",
      contact: "contact",
      links: "contact"
    };

    const targetId = sectionMap[cleanCmd];
    if (targetId) {
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        const offsetTop = targetElem.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({
          top: Math.max(0, offsetTop),
          behavior: "smooth"
        });
      }
    }
  } else {
    appendTerminalLine(
      `Command not found: '${cleanCmd}'. Type 'help' to see valid options.`,
      "error"
    );
  }
}

function appendTerminalLine(text, type = "output") {
  const termBody = document.getElementById("terminal-body");
  const line = document.createElement("div");
  line.className = `terminal-line ${type}`;
  line.textContent = text;
  termBody.appendChild(line);
  termBody.scrollTop = termBody.scrollHeight;
}

/**
 * Contact Form Submission Simulator
 */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("form-name").value;
    const email = document.getElementById("form-email").value;

    showToast(`Thanks ${name}! Your message has been sent successfully.`);
    form.reset();
  });
}

function showToast(message) {
  let toastBox = document.querySelector(".toast-container");
  if (!toastBox) {
    toastBox = document.createElement("div");
    toastBox.className = "toast-container";
    document.body.appendChild(toastBox);
  }

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<i data-feather="check-circle" style="color: var(--accent-cyan)"></i> <span>${message}</span>`;
  toastBox.appendChild(toast);
  initFeatherIcons();

  setTimeout(() => {
    toast.remove();
  }, 4000);
}

/**
 * Theme Switcher
 */
function initThemeSwitcher() {
  const themeBtn = document.getElementById("theme-toggle-btn");
  if (!themeBtn) return;

  const themes = ["dark", "neon", "aurora", "light"];
  let currentThemeIdx = 0;

  themeBtn.addEventListener("click", () => {
    currentThemeIdx = (currentThemeIdx + 1) % themes.length;
    const nextTheme = themes[currentThemeIdx];
    document.documentElement.setAttribute("data-theme", nextTheme);
    showToast(`Switched theme to: ${nextTheme.toUpperCase()}`);
  });
}

/**
 * Scroll Animations & Header State
 */
function initScrollAnimations() {
  const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.top = "0.75rem";
    } else {
      header.style.top = "1.5rem";
    }
  });
}

function initFeatherIcons() {
  if (window.feather) {
    window.feather.replace();
  }
}

/**
 * Render Certificates & Credentials
 */
function renderCertificates() {
  const container = document.getElementById("certificates-grid");
  if (!container || !PORTFOLIO_CONFIG.certificates) return;

  container.innerHTML = PORTFOLIO_CONFIG.certificates
    .map(
      (cert) => `
      <article class="project-card cert-card">
        <div class="project-thumb" style="height: 220px; background: #0c0517; display: flex; align-items: center; justify-content: center;">
          <img src="${cert.image}" alt="${cert.title}" loading="lazy" style="width: 100%; height: 100%; object-fit: contain; padding: 0.5rem;" />
          <span class="project-cat-badge" style="background: rgba(168, 85, 247, 0.9); color: #fff;">${cert.date}</span>
        </div>
        <div class="project-content">
          <div style="font-size: 0.8rem; color: var(--accent-cyan); font-family: var(--font-mono); margin-bottom: 0.4rem;">
            ID: ${cert.credentialId}
          </div>
          <h3 class="project-title">${cert.title}</h3>
          <div style="font-size: 0.9rem; color: var(--text-dim); margin-bottom: 0.75rem; font-weight: 600;">
            <i data-feather="award" style="width: 14px; height: 14px; vertical-align: middle;"></i> ${cert.issuer}
          </div>
          <p class="project-desc">${cert.description}</p>
          <div class="tech-tags">
            ${cert.skills.map((s) => `<span class="tech-tag">${s}</span>`).join("")}
          </div>
          <div class="project-actions">
            <button class="project-link-btn" onclick="openCertModal('${cert.id}')">
              <span>View Credential</span> <i data-feather="external-link"></i>
            </button>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  initFeatherIcons();
}

/**
 * Certificate Modal Viewer
 */
window.openCertModal = function (certId) {
  const cert = PORTFOLIO_CONFIG.certificates.find((c) => c.id === certId);
  if (!cert) return;

  const modalContainer = document.getElementById("modal-overlay");
  const modalBody = document.getElementById("modal-body-content");

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.5rem;">
      <span class="section-tag">${cert.issuer}</span>
      <h2 style="font-family: var(--font-heading); font-size: 2rem; margin-top: 0.5rem;">${cert.title}</h2>
      <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--accent-cyan); margin-top: 0.25rem;">Credential ID: ${cert.credentialId} | Issued: ${cert.date}</div>
    </div>
    <div style="border-radius: var(--radius-md); overflow: hidden; margin-bottom: 1.5rem; border: 1px solid var(--border-glow);">
      <img src="${cert.image}" alt="${cert.title}" style="width: 100%; height: auto; max-height: 420px; object-fit: contain; background: #000;" />
    </div>
    <p style="color: var(--text-muted); font-size: 1.05rem; line-height: 1.6; margin-bottom: 1.5rem;">
      ${cert.description}
    </p>
    <div style="margin-bottom: 1.5rem;">
      <h4 style="margin-bottom: 0.5rem;">Skills & Verification</h4>
      <div class="tech-tags">
        ${cert.skills.map((s) => `<span class="tech-tag" style="font-size: 0.85rem; padding: 0.35rem 0.85rem;">${s}</span>`).join("")}
      </div>
    </div>
    <div style="display: flex; gap: 1rem;">
      <a href="${cert.link}" target="_blank" class="btn-primary">
        <span>Open Certificate Image</span> <i data-feather="external-link"></i>
      </a>
      <button class="btn-secondary" onclick="closeModal()">Close</button>
    </div>
  `;

  modalContainer.classList.add("active");
  initFeatherIcons();
};
