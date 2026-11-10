(function () {
  const P = window.PORTFOLIO || {};
  const ADS = (window.ADS || []).filter((a) => a && a.title);
  const $ = (id) => document.getElementById(id);

  // Gradient placeholders for ads that don't have a video/poster yet
  const GRADS = [
    ["#ff6b3d", "#7a1fff"], ["#14b8a6", "#1e3a8a"], ["#f43f5e", "#fbbf24"],
    ["#a3e635", "#0f766e"], ["#8b5cf6", "#ec4899"], ["#0ea5e9", "#22d3ee"],
  ];
  const grad = (i) => `linear-gradient(160deg, ${GRADS[i % GRADS.length][0]}, ${GRADS[i % GRADS.length][1]})`;
  const ratio = (f) => (f || "9:16").replace(":", "/");
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  /* ---------- profile ---------- */
  document.title = `${P.name || "Portfolio"} — ${P.role || "AI Ads"}`;
  $("brand").textContent = P.name || "";
  $("footName").textContent = P.name || "";
  $("role").textContent = P.role || "";
  $("headline").textContent = P.headline || "";
  $("intro").textContent = P.intro || "";
  $("availDot").hidden = !P.available;
  $("year").textContent = new Date().getFullYear();
  if (P.email) { $("emailBtn").href = `mailto:${P.email}`; $("emailBtn").textContent = P.email; }
  if (P.whatsapp) { $("waBtn").href = P.whatsapp; $("waBtn").hidden = false; }
  const socials = [["Instagram", P.instagram], ["LinkedIn", P.linkedin]].filter(([, u]) => u);
  $("socials").innerHTML = socials.map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${n} ↗</a>`).join("");

  // Signature ads get their own section; everything else goes in "Selected work"
  // Ads with a `section` go in that section instead.
  const SECTIONS = (window.SECTIONS || []).filter((s) => s && s.id);
  const sectionIds = new Set(SECTIONS.map((s) => s.id));
  const inSection = (a) => a.section && sectionIds.has(a.section);
  const REST = ADS.filter((a) => !a.signature && !inSection(a));

  /* ---------- stats ---------- */
  const cats = [...new Set(ADS.map((a) => a.category).filter(Boolean))];
  const restCats = [...new Set(REST.map((a) => a.category).filter(Boolean))];
  const tools = [...new Set(ADS.flatMap((a) => a.tools || []))];
  countUp($("statAds"), ADS.length);
  countUp($("statStyles"), cats.length);
  countUp($("statTools"), tools.length);
  function countUp(el, n) {
    let i = 0; const step = () => { el.textContent = i; if (i++ < n) setTimeout(step, 600 / Math.max(n, 1)); }; step();
  }

  /* ---------- marquee ---------- */
  const words = (cats.length ? cats : ["AI Ads"]).concat(tools.slice(0, 6));
  $("marquee").innerHTML = [...words, ...words].map((w) => `<span>${esc(w)}</span>`).join("");

  /* ---------- media helper ---------- */
  function media(ad, i, { autoplay = false, controls = false } = {}) {
    // Short silent preview clip: shown on cards and the hero reel instead of the full video
    if (ad.preview && !controls) {
      return `<video src="${esc(ad.preview)}"${ad.poster ? ` poster="${esc(ad.poster)}"` : ""} playsinline muted loop preload="${
        autoplay ? "auto" : "none"}"${autoplay ? " autoplay" : ""}></video>`;
    }
    if (ad.video) {
      return `<video src="${esc(ad.video)}"${ad.poster ? ` poster="${esc(ad.poster)}"` : ""} playsinline preload="metadata"${
        autoplay ? " autoplay loop muted" : ""}${controls ? " controls" : " muted loop"}></video>`;
    }
    if (ad.poster) return `<img src="${esc(ad.poster)}" alt="${esc(ad.title)}" loading="lazy">`;
    return `<div class="placeholder" style="background:${grad(i)}"><span>Video coming</span></div>`;
  }

  /* ---------- hero reel ---------- */
  const reelSrc = ADS.length ? ADS : [{ title: "" }, { title: "" }, { title: "" }];
  $("heroReel").innerHTML = [0, 1, 2].map((c) => {
    const items = [];
    for (let k = 0; k < 4; k++) items.push((c + k * 3) % reelSrc.length);
    const tiles = items.map((idx) => `<div class="reel-tile">${media(reelSrc[idx], idx, { autoplay: true })}</div>`).join("");
    return `<div class="reel-col">${tiles}${tiles}</div>`;
  }).join("");

  /* ---------- filters ---------- */
  let active = "All";
  function renderFilters() {
    const list = ["All", ...restCats];
    $("filters").innerHTML = list.map((c) => {
      const n = c === "All" ? REST.length : REST.filter((a) => a.category === c).length;
      return `<button class="chip" role="tab" aria-selected="${c === active}" data-cat="${esc(c)}">${esc(c)}<small>${n}</small></button>`;
    }).join("");
  }

  /* ---------- grid ---------- */
  function renderGrid() {
    const list = ADS.map((a, i) => [a, i]).filter(([a]) => !a.signature && !inSection(a) && (active === "All" || a.category === active));
    $("empty").hidden = list.length > 0;
    $("grid").innerHTML = list.map(([a, i], k) => `
      <article class="card${a.featured && active === "All" ? " featured" : ""}" tabindex="0" data-i="${i}"
        style="--ratio:${ratio(a.format)};animation-delay:${k * 60}ms" aria-label="Play ${esc(a.title)}">
        ${media(a, i)}
        <div class="play">▶</div>
        <div class="card-info">
          ${a.category ? `<span class="cat">${esc(a.category)}</span>` : ""}
          <h3>${esc(a.title)}</h3>
          <p>${esc([a.client, a.year].filter(Boolean).join(" · "))}</p>
        </div>
      </article>`).join("");
  }

  /* ---------- signature work ---------- */
  function renderSignature() {
    const list = ADS.map((a, i) => [a, i]).filter(([a]) => a.signature);
    $("sigEmpty").hidden = list.length > 0;
    $("sigGrid").innerHTML = list.map(([a, i], k) => `
      <article class="card sig-card" tabindex="0" data-i="${i}"
        style="--ratio:${ratio(a.format)};animation-delay:${k * 80}ms" aria-label="Play ${esc(a.title)}">
        ${media(a, i)}
        <span class="sig-badge">★ Signature Work</span>
        <div class="play">▶</div>
        <div class="card-info">
          ${a.category ? `<span class="cat">${esc(a.category)}</span>` : ""}
          <h3>${esc(a.title)}</h3>
          <p>${esc([a.client, a.year].filter(Boolean).join(" · "))}</p>
          ${a.description ? `<p class="sig-desc">${esc(a.description)}</p>` : ""}
        </div>
      </article>`).join("");
  }

  /* ---------- extra sections (e.g. Singing Ads) ---------- */
  function renderSections() {
    $("extraSections").innerHTML = SECTIONS.map((s) => {
      const list = ADS.map((a, i) => [a, i]).filter(([a]) => !a.signature && a.section === s.id);
      return `
      <section id="${esc(s.id)}" class="section">
        <div class="section-head">
          <div>
            ${s.eyebrow ? `<p class="eyebrow">${esc(s.eyebrow)}</p>` : ""}
            <h2>${esc(s.title)}</h2>
            ${s.intro ? `<p class="section-intro">${esc(s.intro)}</p>` : ""}
          </div>
        </div>
        <div class="grid">${list.map(([a, i], k) => `
          <article class="card" tabindex="0" data-i="${i}"
            style="--ratio:${ratio(a.format)};animation-delay:${k * 60}ms" aria-label="Play ${esc(a.title)}">
            ${media(a, i)}
            <div class="play">▶</div>
            <div class="card-info">
              ${a.length ? `<span class="cat">${esc(a.length)}</span>` : ""}
              <h3>${esc(a.title)}</h3>
              <p>${esc([a.client, a.year].filter(Boolean).join(" · "))}</p>
            </div>
          </article>`).join("")}</div>
        ${list.length ? "" : `<p class="empty">Coming soon.</p>`}
      </section>`;
    }).join("");
    // nav links for each section, placed before "Process"
    SECTIONS.forEach((s) => {
      const a = document.createElement("a");
      a.href = `#${s.id}`; a.textContent = s.nav || s.title;
      $("navProcess").before(a);
    });
    document.querySelectorAll("#extraSections .grid").forEach(bindCards);
  }

  bindCards($("sigGrid"));
  function bindCards(grid) {
  grid.addEventListener("mouseover", (e) => { const v = e.target.closest(".card")?.querySelector("video"); if (v) v.play().catch(() => {}); });
  grid.addEventListener("mouseout", (e) => {
    const card = e.target.closest(".card"); if (!card || card.contains(e.relatedTarget)) return;
    const v = card.querySelector("video"); if (v) { v.pause(); v.currentTime = 0; }
  });
  grid.addEventListener("click", (e) => { const c = e.target.closest(".card"); if (c) open(+c.dataset.i); });
  grid.addEventListener("keydown", (e) => {
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("card")) { e.preventDefault(); open(+e.target.dataset.i); }
  });
  }

  /* ---------- modal ---------- */
  const modal = $("modal");
  function embedUrl(u) {
    const yt = u.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
    if (yt) return `https://www.youtube.com/embed/${yt[1]}?autoplay=1&rel=0`;
    const vm = u.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}?autoplay=1`;
    return u;
  }
  function open(i) {
    const a = ADS[i];
    const m = $("modalMedia");
    m.style.setProperty("--ratio", ratio(a.format));
    m.innerHTML = a.embed
      ? `<iframe src="${esc(embedUrl(a.embed))}" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(a.title)}"></iframe>`
      : a.video ? `<video src="${esc(a.video)}" controls autoplay playsinline${a.poster ? ` poster="${esc(a.poster)}"` : ""}></video>`
      : media(a, i);
    $("mCat").textContent = a.category || "";
    $("mTitle").textContent = a.title;
    $("mClient").textContent = [a.client, a.year, a.format].filter(Boolean).join(" · ");
    $("mDesc").textContent = a.description || "";
    $("mTools").innerHTML = (a.tools || []).map((t) => `<span>${esc(t)}</span>`).join("");
    modal.showModal();
  }
  const close = () => modal.close();
  $("modalClose").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  modal.addEventListener("close", () => { $("modalMedia").innerHTML = ""; });

  renderSignature();
  renderSections();
})();
