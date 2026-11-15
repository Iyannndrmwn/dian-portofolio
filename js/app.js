// ============================================================
// 🚀 APP.JS — Main Application Logic
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initIcons();
  renderProfile();
  initNavbar();
  initScrollAnimations();
  initChatbot();
});

// --- Inisialisasi Lucide Icons ---
function initIcons() {
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// ==================== RENDER PROFIL ====================

function renderProfile() {
  const p = PROFILE;

  // Hero
  setText("heroName", p.name);
  setText("heroTagline", p.tagline);
  setText("heroUniversity", `${p.program} — ${p.university}`);
  const heroPhoto = document.getElementById("heroPhoto");
  if (heroPhoto && p.photo) heroPhoto.src = p.photo;

  // Hero Social Icons
  const heroSocial = document.getElementById("heroSocial");
  if (heroSocial) {
    heroSocial.innerHTML = buildSocialIcons(p.social);
    lucide.createIcons({ nameAttr: "data-lucide" });
  }

  // About
  const aboutText = document.getElementById("aboutText");
  if (aboutText) {
    const paragraphs = p.bio.split("\n").filter(line => line.trim());
    aboutText.innerHTML = paragraphs.map(para => `<p>${para.trim()}</p>`).join("");
  }
  setText("infoUniversity", p.university);
  setText("infoProgram", p.program);
  setText("infoSemester", p.semester);
  setText("infoExpCount", `${p.experiences.length} Posisi`);
  setText("infoSkillCount", `${p.skills.length} Keahlian`);

  // Experience Timeline
  const timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.innerHTML = p.experiences.map(exp => `
      <div class="timeline-item ${exp.current ? "current" : ""}">
        <div class="timeline-dot"></div>
        ${exp.current ? '<span class="timeline-badge">Saat Ini</span>' : ""}
        <h3 class="timeline-title">${exp.title}</h3>
        <p class="timeline-org">${exp.organization}</p>
        <p class="timeline-period">${exp.period}</p>
        <p class="timeline-desc">${exp.description}</p>
      </div>
    `).join("");
  }

  // Skills
  const skillsGrid = document.getElementById("skillsGrid");
  if (skillsGrid) {
    skillsGrid.innerHTML = p.skills.map(skill => {
      const levelClass = skill.level.toLowerCase();
      return `
        <div class="skill-card">
          <span class="skill-icon">${skill.icon}</span>
          <div>
            <div class="skill-name">${skill.name}</div>
            <span class="skill-level-badge ${levelClass}">${skill.level}</span>
          </div>
        </div>
      `;
    }).join("");
  }

  // Projects
  const projectsGrid = document.getElementById("projectsGrid");
  if (projectsGrid) {
    projectsGrid.innerHTML = p.projects.map(proj => `
      <div class="project-card">
        <div class="project-icon"><i data-lucide="folder-open"></i></div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-desc">${proj.description}</p>
        <div class="project-tags">
          ${proj.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
        </div>
        ${proj.link ? `
          <a href="${proj.link}" class="project-link" target="_blank" rel="noopener">
            ${proj.linkText || "Lihat Detail"} <i data-lucide="external-link"></i>
          </a>` : ""}
      </div>
    `).join("");
    lucide.createIcons({ nameAttr: "data-lucide" });
  }

  // Contact
  const contactGrid = document.getElementById("contactGrid");
  if (contactGrid) {
    const contacts = [];
    if (p.social.email) {
      contacts.push({
        href: `mailto:${p.social.email}`,
        icon: "mail",
        label: "Email",
        value: p.social.email
      });
    }
    if (p.social.instagram) {
      contacts.push({
        href: p.social.instagram,
        icon: "instagram",
        label: "Instagram",
        value: "@drmwn_iyan.db"
      });
    }
    if (p.social.tiktok) {
      contacts.push({
        href: p.social.tiktok,
        icon: "music",
        label: "TikTok",
        value: "@drmwn_iyan"
      });
    }
    if (p.social.linkedin && p.social.linkedin !== "#") {
      contacts.push({
        href: p.social.linkedin,
        icon: "linkedin",
        label: "LinkedIn",
        value: "Dian Bagus D."
      });
    } else {
      contacts.push({
        href: "#",
        icon: "linkedin",
        label: "LinkedIn",
        value: "Segera hadir"
      });
    }

    contactGrid.innerHTML = contacts.map(c => `
      <a href="${c.href}" class="contact-card" target="_blank" rel="noopener">
        <div class="contact-icon"><i data-lucide="${c.icon}"></i></div>
        <span class="contact-label">${c.label}</span>
        <span class="contact-value">${c.value}</span>
      </a>
    `).join("");
    lucide.createIcons({ nameAttr: "data-lucide" });
  }

  // Footer year
  setText("footerYear", new Date().getFullYear().toString());
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

function buildSocialIcons(social) {
  const icons = [];
  if (social.instagram) icons.push(`<a href="${social.instagram}" target="_blank" rel="noopener" title="Instagram"><i data-lucide="instagram"></i></a>`);
  if (social.tiktok) icons.push(`<a href="${social.tiktok}" target="_blank" rel="noopener" title="TikTok"><i data-lucide="music"></i></a>`);
  if (social.linkedin) icons.push(`<a href="${social.linkedin}" target="_blank" rel="noopener" title="LinkedIn"><i data-lucide="linkedin"></i></a>`);
  if (social.email) icons.push(`<a href="mailto:${social.email}" title="Email"><i data-lucide="mail"></i></a>`);
  return icons.join("");
}

// ==================== NAVBAR ====================

function initNavbar() {
  const navbar = document.getElementById("navbar");
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("navMenu");
  const links = document.querySelectorAll(".nav-link");

  // Scroll effect
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
    updateActiveLink();
  });

  // Mobile toggle
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("open");
  });

  // Close menu on link click
  links.forEach(link => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      menu.classList.remove("open");
    });
  });
}

function updateActiveLink() {
  const sections = document.querySelectorAll(".section, .hero");
  const links = document.querySelectorAll(".nav-link");
  let current = "";

  sections.forEach(sec => {
    const top = sec.offsetTop - 100;
    if (window.scrollY >= top) {
      current = sec.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

// ==================== SCROLL ANIMATIONS ====================

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));
}

// ==================== GEMINI AI CHATBOT ====================

function initChatbot() {
  const toggleBtn = document.getElementById("chatbotToggle");
  const closeBtn = document.getElementById("chatbotClose");
  const window_ = document.getElementById("chatbotWindow");
  const input = document.getElementById("chatbotInput");
  const sendBtn = document.getElementById("chatbotSend");
  const messages = document.getElementById("chatbotMessages");

  let isOpen = false;
  let conversationHistory = [];

  // Toggle chat window
  toggleBtn.addEventListener("click", () => {
    isOpen = !isOpen;
    toggleBtn.classList.toggle("active", isOpen);
    window_.classList.toggle("open", isOpen);
    if (isOpen && messages.children.length === 0) {
      addMessage("bot", PROFILE.gemini.welcomeMessage);
    }
    if (isOpen) input.focus();
  });

  closeBtn.addEventListener("click", () => {
    isOpen = false;
    toggleBtn.classList.remove("active");
    window_.classList.remove("open");
  });

  // Send message
  async function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    addMessage("user", text);
    input.value = "";

    conversationHistory.push({ role: "user", text });

    if (!PROFILE.gemini.apiKey) {
      addMessage("error",
        "⚠️ API Key belum diatur. Buka file js/config.js dan masukkan GEMINI_API_KEY kamu dari aistudio.google.com/apikey"
      );
      return;
    }

    const typingEl = showTyping();

    try {
      const response = await callGeminiAPI(text);
      removeTyping(typingEl);
      addMessage("bot", response);
      conversationHistory.push({ role: "assistant", text: response });
    } catch (err) {
      removeTyping(typingEl);
      addMessage("error", `❌ Error: ${err.message}`);
    }
  }

  sendBtn.addEventListener("click", handleSend);
  input.addEventListener("keydown", e => {
    if (e.key === "Enter") handleSend();
  });

  function addMessage(type, text) {
    const div = document.createElement("div");
    div.className = `chat-msg ${type}`;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function showTyping() {
    const div = document.createElement("div");
    div.className = "chat-typing";
    div.innerHTML = "<span></span><span></span><span></span>";
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  function removeTyping(el) {
    if (el && el.parentNode) el.parentNode.removeChild(el);
  }
}

// --- Gemini API Call ---
async function callGeminiAPI(userMessage) {
  const systemPrompt = buildSystemPrompt();
  const apiKey = PROFILE.gemini.apiKey;
  const model = PROFILE.gemini.model || "gemini-4-hydrogen";

  const url = `https://generativelanguage.googleapis.com/v1/interactions?key=${apiKey}`;

  const body = {
    model: model,
    system_instruction: systemPrompt,
    input: userMessage,
    store: false
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    const errData = await res.json().catch(() => ({}));
    throw new Error(errData?.error?.message || `HTTP ${res.status}`);
  }

  const data = await res.json();

  // Extract output text from the interaction response
  if (data.output_text) return data.output_text;

  // Fallback: search steps for model_output
  if (data.steps) {
    for (const step of data.steps) {
      if (step.type === "model_output" && step.content) {
        for (const content of step.content) {
          if (content.type === "text") return content.text;
        }
      }
    }
  }

  return "Maaf, saya tidak bisa menjawab saat ini.";
}

function buildSystemPrompt() {
  const p = PROFILE;
  return `Kamu adalah asisten AI personal milik ${p.name} (dipanggil ${p.nickname}). 
Jawablah dalam Bahasa Indonesia dengan ramah dan informatif.

Berikut informasi tentang ${p.nickname}:
- Nama: ${p.name}
- Kampus: ${p.university}, ${p.faculty}
- Program Studi: ${p.program}, Semester ${p.semester}
- Minat: Engineering (perkeretaapian, mekanikal) dan Fashion
- Bio: ${p.bio}

Pengalaman Organisasi:
${p.experiences.map(e => `- ${e.title} di ${e.organization} (${e.period}): ${e.description}`).join("\n")}

Skills: ${p.skills.map(s => `${s.name} (${s.level})`).join(", ")}

Proyek:
${p.projects.map(pr => `- ${pr.title}: ${pr.description}`).join("\n")}

Kontak: Email ${p.social.email}, Instagram @drmwn_iyan.db

Instruksi:
- Jawab pertanyaan tentang ${p.nickname} berdasarkan data di atas.
- Jika ditanya hal di luar konteks ${p.nickname}, jawab dengan sopan bahwa kamu hanya bisa menjawab tentang ${p.nickname}.
- Jaga jawaban tetap singkat dan relevan (2-4 kalimat).
- Gunakan emoji sesekali agar lebih ramah.`;
}
