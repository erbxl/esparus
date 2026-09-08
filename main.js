(function () {
  "use strict";

  const data = window.__BRAND__ || {};
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fineHover = matchMedia("(hover: hover) and (pointer: fine)").matches;

  const $ = (sel, scope) => (scope || document).querySelector(sel);
  const $$ = (sel, scope) => Array.from((scope || document).querySelectorAll(sel));
  const escHTML = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  function getLang() {
    const stored = localStorage.getItem("esparus_lang");
    if (stored && data.langs && data.langs.includes(stored)) return stored;
    return data.defaultLang || "ru";
  }

  function initials(name) {
    return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  }

  function render(lang) {
    document.documentElement.lang = lang;

    // Nav
    const nav = data.nav && data.nav[lang];
    if (nav) {
      $$("[data-nav]").forEach(el => {
        const key = el.getAttribute("data-nav");
        if (nav[key] != null) el.textContent = nav[key];
      });
    }

    // Hero
    const hero = data.hero && data.hero[lang];
    if (hero) {
      $("[data-hero-kicker]") && ($("[data-hero-kicker]").textContent = hero.kicker);
      $("[data-hero-title]") && ($("[data-hero-title]").innerHTML = hero.title);
      $("[data-hero-sub]") && ($("[data-hero-sub]").textContent = hero.sub);
      $("[data-hero-cta1]") && ($("[data-hero-cta1]").textContent = hero.cta1);
      $("[data-hero-cta2]") && ($("[data-hero-cta2]").textContent = hero.cta2);
    }

    // Trust bar
    const trust = data.trust && data.trust[lang];
    const trustTarget = $("[data-trust]");
    if (trust && trustTarget) {
      trustTarget.innerHTML = trust.map(t => `
        <div>
          <div class="trust-num"><span data-count-to="${escHTML(t.num)}">0</span>${escHTML(t.suffix || "")}</div>
          <div class="trust-label">${escHTML(t.label)}</div>
        </div>
      `).join("");
      safe(bindCountUp, "bindCountUp(trust)");
    }

    // Marquee
    const marquee = data.marquee && data.marquee[lang];
    const marqueeTrack = $("[data-marquee]");
    if (marquee && marqueeTrack) {
      marqueeTrack.innerHTML = marquee.map(c => `<span>${escHTML(c)}</span><span>·</span>`).join("");
      safe(initMarquee, "initMarquee");
    }

    // Founder story
    const founder = data.founder && data.founder[lang];
    if (founder) {
      $("[data-founder-kicker]") && ($("[data-founder-kicker]").textContent = founder.kicker);
      $("[data-founder-year]") && ($("[data-founder-year]").textContent = founder.year);
      $("[data-founder-title]") && ($("[data-founder-title]").textContent = founder.title);
      const pTarget = $("[data-founder-paragraphs]");
      if (pTarget && founder.paragraphs) {
        pTarget.innerHTML = founder.paragraphs.map(p => `<p class="lede" style="max-width:none">${escHTML(p)}</p>`).join("");
      }
      $("[data-founder-quote]") && ($("[data-founder-quote]").textContent = "«" + founder.quote + "»");
      $("[data-founder-quote-caption]") && ($("[data-founder-quote-caption]").textContent = founder.quoteCaption);
    }

    // Why us
    const whyUs = data.whyUs && data.whyUs[lang];
    if (whyUs) {
      $("[data-why-kicker]") && ($("[data-why-kicker]").textContent = whyUs.kicker);
      const target = $("[data-why-items]");
      if (target && whyUs.items) {
        target.innerHTML = whyUs.items.map(i => `
          <article class="card reveal">
            <h3>${escHTML(i.t)}</h3>
            <p class="lede" style="margin-top:.75rem">${escHTML(i.d)}</p>
          </article>
        `).join("");
      }
    }

    // Process
    const process = data.process && data.process[lang];
    if (process) {
      $("[data-process-title]") && ($("[data-process-title]").textContent = process.title);
      $("[data-process-sub]") && ($("[data-process-sub]").textContent = process.sub);
      const target = $("[data-process-steps]");
      if (target) {
        target.innerHTML = process.steps.map(s => `
          <div class="process-step reveal">
            <span class="step-n">${escHTML(s.n)}</span>
            <div>
              <h3>${escHTML(s.t)}</h3>
              <p class="lede" style="margin-top:.4rem">${escHTML(s.d)}</p>
            </div>
          </div>
        `).join("");
      }
    }

    // Documents checklist
    const documents = data.documents && data.documents[lang];
    if (documents) {
      $("[data-documents-kicker]") && ($("[data-documents-kicker]").textContent = documents.kicker);
      $("[data-documents-title]") && ($("[data-documents-title]").textContent = documents.title);
      $("[data-documents-sub]") && ($("[data-documents-sub]").textContent = documents.sub);
      const target = $("[data-documents-items]");
      if (target && documents.items) {
        target.innerHTML = documents.items.map(d => `<li class="reveal">${escHTML(d)}</li>`).join("");
      }
    }

    // Services
    const services = data.services && data.services[lang];
    if (services) {
      $("[data-services-title]") && ($("[data-services-title]").textContent = services.title);
      const target = $("[data-services-items]");
      if (target) {
        target.innerHTML = services.items.map(s => `
          <article class="card reveal">
            <h3>${escHTML(s.name)}</h3>
            <span class="service-price">${escHTML(s.price)}</span>
            <p class="lede" style="margin-top:.75rem">${escHTML(s.d)}</p>
          </article>
        `).join("");
      }
    }

    // Myths vs reality
    const myths = data.myths && data.myths[lang];
    if (myths) {
      $("[data-myths-kicker]") && ($("[data-myths-kicker]").textContent = myths.kicker);
      $("[data-myths-title]") && ($("[data-myths-title]").textContent = myths.title);
      const target = $("[data-myths-items]");
      if (target && myths.items) {
        target.innerHTML = myths.items.map(m => `
          <article class="card myth-card reveal">
            <p class="myth-label">${escHTML(m.myth)}</p>
            <p class="fact-label">${escHTML(m.fact)}</p>
          </article>
        `).join("");
      }
      if (myths.diy) {
        $("[data-diy-title]") && ($("[data-diy-title]").textContent = myths.diy.title);
        $("[data-diy-body]") && ($("[data-diy-body]").textContent = myths.diy.body);
        $("[data-diy-cta]") && ($("[data-diy-cta]").textContent = myths.diy.cta);
      }
    }

    // Testimonials
    const testi = data.testimonials && data.testimonials[lang];
    const testiTarget = $("[data-testimonials]");
    if (testi && testiTarget) {
      testiTarget.innerHTML = testi.map(t => `
        <article class="card reveal">
          <p class="testi-quote">&ldquo;${escHTML(t.quote)}&rdquo;</p>
          <p class="testi-name">${escHTML(t.name)}</p>
        </article>
      `).join("");
    }

    // Team
    const team = data.team && data.team[lang];
    if (team) {
      $("[data-team-title]") && ($("[data-team-title]").textContent = team.title);
      $("[data-team-d]") && ($("[data-team-d]").textContent = team.d);
    }

    // CTA
    const cta = data.cta && data.cta[lang];
    if (cta) {
      $("[data-cta-title]") && ($("[data-cta-title]").textContent = cta.title);
      $("[data-cta-sub]") && ($("[data-cta-sub]").textContent = cta.sub);
      $("[data-cta-button]") && ($("[data-cta-button]").textContent = cta.button);
    }

    // Footer
    const footer = data.footer && data.footer[lang];
    if (footer) {
      $("[data-footer-rights]") && ($("[data-footer-rights]").textContent = "Esparus — " + footer.rights);
      $("[data-footer-contact-label]") && ($("[data-footer-contact-label]").textContent = footer.contactLabel);
    }

    // Lang switch state
    $$(".lang-switch button").forEach(btn => {
      btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
    });

    if (window.gsap) {
      safe(initReveals, "initReveals(refresh)");
    } else {
      $$(".reveal").forEach(el => el.classList.add("is-visible"));
    }
    safe(initTilt, "initTilt(refresh)");
  }

  function mountContact() {
    const c = data.contact || {};
    const target = $("[data-contact-block]");
    if (!target || target.children.length > 0) return;
    target.innerHTML = `
      <a href="tel:${escHTML(c.phone1 || "")}">${escHTML(c.phone1 || "")}</a>
      <a href="tel:${escHTML(c.phone2 || "")}">${escHTML(c.phone2 || "")}</a>
      <a href="mailto:${escHTML(c.email1 || "")}">${escHTML(c.email1 || "")}</a>
      <a href="mailto:${escHTML(c.email2 || "")}">${escHTML(c.email2 || "")}</a>
    `;
  }

  function initLangSwitch() {
    $$(".lang-switch button").forEach(btn => {
      btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        localStorage.setItem("esparus_lang", lang);
        render(lang);
      });
    });
  }

  function initNav() {
    const nav = $(".site-nav");
    if (!nav) return;
    window.addEventListener("scroll", () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 12);
    }, { passive: true });
  }

  function initReveals() {
    const items = $$(".reveal");
    if (!items.length) return;

    if (!window.gsap || !window.ScrollTrigger) {
      items.forEach(el => el.classList.add("is-visible"));
      return;
    }

    items.forEach(el => {
      if (el.dataset.revealed === "1") return;
      el.dataset.revealed = "1";
      gsap.to(el, {
        opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      });
    });

    // 6s safety net: reveal anything still hidden (e.g. observer missed it)
    setTimeout(() => items.forEach(el => el.classList.add("is-visible")), 6000);
  }

  function bindCountUp(scope) {
    const els = $$("[data-count-to]", scope || document);
    els.forEach(el => {
      if (el.dataset.countBound === "1") return;
      el.dataset.countBound = "1";
      const target = parseFloat(el.dataset.countTo);
      if (!isFinite(target)) return;

      const trigger = () => {
        if (window.gsap) {
          const obj = { v: 0 };
          gsap.to(obj, {
            v: target, duration: 1.4, ease: "power2.out",
            onUpdate: () => { el.textContent = Math.round(obj.v); }
          });
        } else {
          el.textContent = target;
        }
      };

      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { trigger(); io.unobserve(e.target); }
        });
      }, { threshold: 0.2 });
      io.observe(el);

      // Safety net: if already in view at bind time (e.g. hero on load), fire soon after.
      setTimeout(() => {
        if (el.dataset.countBound === "1" && el.textContent === "0" &&
            el.getBoundingClientRect().top < window.innerHeight) {
          trigger();
        }
      }, 1200);
    });
  }

  function initMarquee() {
    if (!window.gsap) return;
    const track = $("[data-marquee]");
    if (!track || track.dataset.marqueeBound === "1") return;
    track.dataset.marqueeBound = "1";
    const clone = track.cloneNode(true);
    clone.removeAttribute("data-marquee");
    track.parentNode.appendChild(clone);
    const distance = track.scrollWidth;
    if (!distance) return;
    const speed = 45; // px/sec
    gsap.to([track, clone], {
      x: -distance, duration: distance / speed, ease: "none", repeat: -1,
      modifiers: { x: gsap.utils.unitize(x => parseFloat(x) % distance) },
    });
  }

  function initCursor() {
    if (!fineHover || reduced) return;
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);
    let ready = false;
    window.addEventListener("mousemove", e => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      if (!ready) { ready = true; cursor.classList.add("is-ready"); }
    }, { passive: true });
  }

  function initTilt() {
    if (!fineHover || reduced) return;
    $$(".card").forEach(card => {
      if (card.dataset.tiltBound === "1") return;
      card.dataset.tiltBound = "1";
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const rx = ((e.clientY - r.top) / r.height - 0.5) * -4;
        const ry = ((e.clientX - r.left) / r.width - 0.5) * 4;
        card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
      });
      card.addEventListener("mouseleave", () => { card.style.transform = ""; });
    });
  }

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[" + name + "]", e); }
  }

  function boot() {
    safe(mountContact, "mountContact");
    safe(() => render(getLang()), "render");
    safe(initLangSwitch, "initLangSwitch");
    safe(initNav, "initNav");
    safe(initCursor, "initCursor");

    if (window.gsap && window.ScrollTrigger) {
      try { gsap.registerPlugin(ScrollTrigger); } catch (_) {}
      safe(initReveals, "initReveals");
      safe(initTilt, "initTilt");
      safe(initMarquee, "initMarquee");
    } else {
      $$(".reveal").forEach(el => el.classList.add("is-visible"));
    }

    document.documentElement.classList.add("is-ready");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
