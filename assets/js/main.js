/* ==========================================================================
   Vipul Negi — Portfolio scripts
   - SITE: edit your name, email, links and navigation here (used on every page)
   - The header, footer and contact band are built from SITE, so change them once.
   ========================================================================== */

const SITE = {
  name: "Vipul Negi",
  initials: "VN",
  email: "vipul1negi@gmail.com",
  resume: "https://drive.google.com/file/d/1iauAGseeMoaIC74NTz6H7hw4zyhPWUAh/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/vipul-negi19/",
  instagram: "https://www.instagram.com/",
  ticker: [
    "WELCOME TO VIPUL'S HOMEPAGE",
    "PRODUCT & UX DESIGNER SINCE 2016",
    "CURRENTLY UX DESIGNER @ ONENGINE.AI, IRELAND",
    "AI · COMPLIANCE · B2B SAAS",
    "BEST VIEWED IN ANY BROWSER, AT ANY RESOLUTION",
    "THANKS FOR STOPPING BY",
  ],
  nav: [
    { label: "Work", href: "index.html#work" },
    { label: "About", href: "about.html" },
    { label: "Contact", href: "contact.html" },
  ],
};

/* Pages inside sub-folders (e.g. work/lisha.html) set <body data-root="../"> so links resolve. */
const ROOT = document.body.dataset.root || "";
const PAGE = document.body.dataset.page || "";

const icons = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.1c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V21h-4z"/></svg>',
  file: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/></svg>',
};

/* ---------- Header: scrolling ticker + Win95 menu bar ---------- */
const LOGO = '<svg class="logo-mark" viewBox="0 0 32 32" aria-hidden="true"><rect x="2" y="2" width="13" height="13" fill="#e53935"/><rect x="17" y="2" width="13" height="13" fill="#43a047"/><rect x="2" y="17" width="13" height="13" fill="#1e88e5"/><rect x="17" y="17" width="13" height="13" fill="#fdd835"/></svg>';

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const links = SITE.nav
    .map((n) => {
      const current = !n.href.includes("#") && n.href === PAGE ? ' aria-current="page"' : "";
      return `<a href="${ROOT}${n.href}"${current}>${n.label}</a>`;
    })
    .join("");
  el.className = "site-header";
  el.innerHTML = `
    <div class="ticker" aria-hidden="true"><div class="ticker-track">${SITE.ticker.join(" &nbsp;★&nbsp; ")} &nbsp;★</div></div>
    <div class="menu-wrap">
      <div class="container">
        <a class="logo" href="${ROOT}index.html" aria-label="${SITE.name}, home">${LOGO}<span>VIPUL.EXE</span></a>
        <div class="header-actions">
          <nav class="nav" id="site-nav" aria-label="Main">
            ${links}
            <a class="btn btn--primary" href="${SITE.resume}" target="_blank" rel="noopener">Resume ${icons.arrow}</a>
          </nav>
          <button class="icon-btn" id="theme-toggle" type="button" aria-label="Switch colour theme"></button>
          <button class="icon-btn menu-toggle" id="menu-toggle" type="button" aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">${icons.menu}</button>
        </div>
      </div>
    </div>`;

  const toggle = el.querySelector("#menu-toggle");
  const nav = el.querySelector("#site-nav");
  const setOpen = (open) => {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.innerHTML = open ? icons.close : icons.menu;
  };
  toggle.addEventListener("click", () => setOpen(!nav.classList.contains("is-open")));
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
}

/* ---------- Every page except home sits inside a window ----------
   The title bar reads like a file path, e.g. C:\VIPUL\ABOUT.HTM.
   Turn it off for a page with <body data-window="off">. */
function wrapInWindow() {
  const main = document.getElementById("main");
  if (!main || document.body.dataset.window === "off") return;
  const file = (PAGE || "index.html").replace(/\//g, "\\").replace(/\.html$/, ".HTM").toUpperCase();
  main.classList.add("win", "page-window");
  main.insertAdjacentHTML("afterbegin", `
    <div class="titlebar"><span>C:\\VIPUL\\${file}</span><span class="ctls" aria-hidden="true"><span class="ctl">_</span><span class="ctl">□</span><a class="ctl" href="${ROOT}index.html" tabindex="-1">×</a></span></div>
    <div class="menubar" aria-hidden="true"><span><u>F</u>ile</span><span><u>E</u>dit</span><span><u>V</u>iew</span><span><u>H</u>elp</span></div>`);
}

/* ---------- Theme (light / dark, remembered per visitor) ---------- */
function initTheme() {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) document.documentElement.dataset.theme = saved;
  const isDark = () =>
    document.documentElement.dataset.theme === "dark" ||
    (!document.documentElement.dataset.theme && matchMedia("(prefers-color-scheme: dark)").matches);
  const paint = () => { btn.innerHTML = isDark() ? icons.sun : icons.moon; };
  paint();
  btn.addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    paint();
  });
}

/* ---------- Footer: "Let's talk!" + 88x31 badges + taskbar with Start menu ---------- */
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const showBand = document.body.dataset.ctaBand !== "off";
  const band = showBand ? `
      <p class="foot-prompt">&gt; Let’s turn your “What ifs” into “Let’s dos”<span class="blink">_</span></p>
      <h2 class="foot-big">Let’s<br><span>talk!</span></h2>
      <p class="foot-sub">Have a product that needs untangling? I reply within a day or two.</p>
      <div class="foot-links">
        <a class="btn" href="${ROOT}contact.html">Start a conversation <span aria-hidden="true">▸</span></a>
        <a class="btn" href="mailto:${SITE.email}">Email me <span aria-hidden="true">▸</span></a>
        <a class="btn" href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn <span aria-hidden="true">▸</span></a>
      </div>` : "";
  const title = (PAGE || "index.html").split("/").pop().replace(/\.html$/, "").toUpperCase();
  el.innerHTML = `
    <footer class="site-foot">
      <div class="tape" aria-hidden="true"></div>
      <div class="container foot-inner">
        ${band}
        <div class="foot-row">
          <span class="badge88" style="background:#000080;color:#fff">MADE WITH<br>NOTEPAD</span>
          <span class="badge88" style="background:#39ff14;color:#000">Y2K<br>COMPLIANT</span>
          <span class="badge88" style="background:#c2185b;color:#fff">HUMAN<br>CENTRED</span>
          <span class="badge88" style="background:#fff;color:#000">BEST VIEWED<br>ON ANY SCREEN</span>
          <span class="spacer"></span>
          <a class="btn" href="#main">▲ Back to top</a>
        </div>
        <p class="foot-legal">© ${new Date().getFullYear()} ${SITE.name} · Product &amp; UX Designer · Ireland ·
          <a href="${SITE.instagram}" target="_blank" rel="noopener" style="text-decoration:underline">Instagram</a> ·
          <a href="${SITE.resume}" target="_blank" rel="noopener" style="text-decoration:underline">Resume</a></p>
      </div>
      <div class="taskbar">
        <div class="start-menu" id="start-menu" hidden>
          <div class="start-side" aria-hidden="true"><span>VIPUL 95</span></div>
          <ul class="start-items" aria-label="Start menu">
            <li><a href="${ROOT}index.html#work">My Work</a></li>
            <li><a href="${ROOT}work/lisha.html">Lisha.ai</a></li>
            <li><a href="${ROOT}work/aita.html">AITA</a></li>
            <li><a href="${ROOT}work/cox-smb.html">COX SMB</a></li>
            <li><a href="${ROOT}about.html">About Me</a></li>
            <li><a href="${ROOT}contact.html">Contact</a></li>
            <li><a href="${SITE.resume}" target="_blank" rel="noopener">Resume</a></li>
            <li><hr></li>
            <li><a href="#main">Shut Down…</a></li>
          </ul>
        </div>
        <button class="btn start-btn" id="start-btn" type="button" aria-expanded="false" aria-controls="start-menu">${LOGO} Start</button>
        <span class="task">${title}.EXE</span>
        <span class="spacer"></span>
        <span class="tray" id="clock" aria-label="Current time"></span>
      </div>
    </footer>`;

  // Start menu
  const btn = el.querySelector("#start-btn");
  const menu = el.querySelector("#start-menu");
  const setOpen = (open) => { menu.hidden = !open; btn.setAttribute("aria-expanded", open); if (open) menu.querySelector("a").focus(); };
  btn.addEventListener("click", (e) => { e.stopPropagation(); setOpen(menu.hidden); });
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("click", (e) => { if (!menu.hidden && !menu.contains(e.target)) setOpen(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !menu.hidden) { setOpen(false); btn.focus(); } });

  // Clock in the tray
  const clock = el.querySelector("#clock");
  const tick = () => { clock.textContent = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }); };
  tick();
  setInterval(tick, 15000);
}

/* ---------- "What I bring": rotating phrases ---------- */
function initRotators() {
  document.querySelectorAll("[data-rotate]").forEach((el, i) => {
    const words = el.dataset.rotate.split("|").map((s) => s.trim());
    let n = 0;
    el.textContent = words[0];
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setTimeout(() => {
      setInterval(() => {
        el.classList.add("is-out");
        setTimeout(() => {
          n = (n + 1) % words.length;
          el.textContent = words[n];
          el.classList.remove("is-out");
        }, 350);
      }, 2800);
    }, i * 500);
  });
}

/* ---------- Testimonials: tabs ---------- */
function initTabs() {
  document.querySelectorAll("[data-tabs]").forEach((group) => {
    const tabs = [...group.querySelectorAll('[role="tab"]')];
    const select = (tab) => {
      tabs.forEach((t) => {
        const on = t === tab;
        t.setAttribute("aria-selected", on);
        t.tabIndex = on ? 0 : -1;
        document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
      });
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", (e) => {
        const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
        if (!dir) return;
        e.preventDefault();
        const next = tabs[(i + dir + tabs.length) % tabs.length];
        select(next);
        next.focus();
      });
    });
  });
}

/* ---------- Case studies: table of contents highlight ---------- */
function initToc() {
  const links = [...document.querySelectorAll(".toc a")];
  if (!links.length || !("IntersectionObserver" in window)) return;
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((a) => a.classList.remove("is-active"));
      map.get(e.target.id)?.classList.add("is-active");
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
}

/* ---------- Image lightbox (any .gallery img) ---------- */
function initLightbox() {
  const imgs = document.querySelectorAll(".gallery img, .cs-cover img, .identity img");
  if (!imgs.length) return;
  const box = document.createElement("div");
  box.className = "lightbox";
  box.hidden = true;
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-label", "Image preview");
  box.innerHTML = "<img alt=''>";
  document.body.appendChild(box);
  const big = box.querySelector("img");
  const close = () => { box.hidden = true; document.body.style.overflow = ""; };
  imgs.forEach((img) => img.addEventListener("click", () => {
    big.src = img.dataset.full || img.currentSrc || img.src;
    big.alt = img.alt;
    box.hidden = false;
    document.body.style.overflow = "hidden";
  }));
  box.addEventListener("click", close);
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) close(); });
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-visible")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

/* ---------- Brands marquee: duplicate the row so it loops seamlessly ---------- */
function initMarquee() {
  document.querySelectorAll(".marquee-track").forEach((t) => {
    t.innerHTML += t.innerHTML;
    [...t.children].slice(t.children.length / 2).forEach((c) => c.setAttribute("aria-hidden", "true"));
  });
}

/* ---------- Contact form ----------
   No server needed: the form opens the visitor's email app with the message filled in.
   To receive messages without email apps, set data-endpoint on the <form> to a
   Formspree (or similar) URL — see README.md. */
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;
  const status = form.querySelector("[data-status]");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    const endpoint = form.dataset.endpoint;
    if (endpoint) {
      status.textContent = "Sending…";
      try {
        const res = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
        if (!res.ok) throw new Error();
        form.reset();
        status.textContent = "Thanks! Your message is on its way. I’ll get back to you soon.";
      } catch {
        status.textContent = `Something went wrong. Please email me at ${SITE.email}.`;
      }
      return;
    }
    const subject = encodeURIComponent(`Hello from ${data.name}`);
    const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    status.textContent = "Your email app should open with the message ready to send.";
  });
}

renderHeader();
wrapInWindow();
initTheme();
renderFooter();
initRotators();
initTabs();
initToc();
initLightbox();
initMarquee();
initContactForm();
initReveal();
