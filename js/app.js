(function () {
  const page = document.body.dataset.page;
  const $ = (s) => document.querySelector(s);
  const acak = (arr, n) => [...arr].sort(() => Math.random() - 0.5).slice(0, n);
  const param = (k) => new URLSearchParams(location.search).get(k);

  // Gambar dengan fallback: jika file belum ada, tampil kotak placeholder
  function gambar(src, alt, label) {
    const ph = `<div class="ph">${label || "Tempat gambar"}</div>`;
    if (!src) return ph;
    return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.outerHTML=&quot;${ph.replace(/"/g, "'")}&quot;">`;
  }

  // Navbar
  const nav = [["index.html", "Home", "home"], ["explanation.html", "Explanation", "explanation"], ["about.html", "About", "about"]];
  const aktif = page === "kategori" || page === "detail" ? "explanation" : page;
  $("#navbar").innerHTML = `<nav class="nav" aria-label="Navigasi utama"><div class="wrap">
    <a class="brand" href="index.html">Perjuangan Kemerdekaan</a>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu">Menu</button>
    <ul id="menu">${nav.map(([h, t, k]) => `<li><a class="link ${k === aktif ? "active" : ""}" href="${h}">${t}</a></li>`).join("")}</ul>
  </div></nav>`;
  const btn = $(".menu-btn");
  btn.addEventListener("click", () => {
    const buka = $(".nav").classList.toggle("open");
    btn.setAttribute("aria-expanded", buka);
  });

  // Footer (diisi dari js/config.js)
  const S = window.SITE;
  const daftar = (a) => a.map((x) => `<li><a href="${x.href}">${x.teks}</a></li>`).join("");
  $("#footer").innerHTML = `<div class="wrap"><div class="foot-grid">
    <div><h4>${S.nama}</h4><p>${S.deskripsi}</p></div>
    <div><h4>Tautan</h4><ul>${daftar(S.tautan)}</ul></div>
    <div><h4>Kontak</h4><ul>${S.kontak.map((k) => `<li>${k}</li>`).join("")}</ul></div>
    <div><h4>Ikuti Kami</h4><ul>${daftar(S.sosial)}</ul></div>
  </div><p class="copy">${S.copyright}</p></div>`;

  const kartu = (m, extra = "") => `<a class="card ${m.kategori} ${extra}" href="detail.html?id=${m.id}">
    <div class="thumb">${gambar(m.gambar, m.judul, "Gambar " + m.judul)}</div>
    <div class="body"><h3>${m.judul}</h3><p>${m.ringkasan}</p><span class="more">Baca materi</span></div></a>`;

  // Thumbnail kategori statis (halaman Explanation)
  document.querySelectorAll(".thumb[data-src]").forEach((el) => {
    el.innerHTML = gambar(el.dataset.src, el.dataset.label, el.dataset.label);
  });

  // HOME: 2 materi acak per kategori
  if (page === "home") {
    ["fisik", "diplomasi"].forEach((k) => {
      const dari = MATERI_LIST.filter((m) => m.kategori === k);
      $("#list-" + k).innerHTML = acak(dari, 2).map((m) => kartu(m)).join("");
    });
  }

  // KATEGORI: daftar sub-materi
  if (page === "kategori") {
    const k = KATEGORI[param("k")] ? param("k") : "fisik";
    document.title = KATEGORI[k].judul + " | Perjuangan Kemerdekaan";
    $("#judul").textContent = KATEGORI[k].judul;
    $("#deskripsi").textContent = KATEGORI[k].deskripsi;
    $("#list").innerHTML = MATERI_LIST.filter((m) => m.kategori === k).map((m) => kartu(m)).join("");
  }

  // DETAIL: isi materi dimuat dari file JS masing-masing
  if (page === "detail") {
    const meta = MATERI_LIST.find((m) => m.id === param("id"));
    const out = $("#konten");
    if (!meta) { out.innerHTML = `<p>Materi tidak ditemukan. <a href="explanation.html">Kembali ke Explanation</a>.</p>`; return; }
    const s = document.createElement("script");
    s.src = "js/materi/" + meta.file;
    s.onerror = () => (out.innerHTML = "<p>File materi gagal dimuat.</p>");
    s.onload = () => {
      const d = MATERI_DATA[meta.id];
      const kat = KATEGORI[meta.kategori];
      document.title = d.judul + " | Perjuangan Kemerdekaan";
      const w = [["Apa", d.apa], ["Siapa", d.siapa], ["Kapan", d.kapan], ["Di mana", d.dimana], ["Mengapa", d.mengapa], ["Bagaimana", d.bagaimana]];
      const figs = (arr, alt) => arr.map((x) => `<figure>${gambar(x.gambar, x.nama, "Tempat gambar " + alt)}<figcaption><b>${x.nama}</b>${x.peran || ""}</figcaption></figure>`).join("");
      out.innerHTML = `
        <p class="crumb"><a href="explanation.html">Explanation</a> / <a href="kategori.html?k=${meta.kategori}">${kat.judul}</a></p>
        <h1>${d.judul}</h1><p class="lead">${d.ringkasan}</p>
        <div class="cover">${gambar(meta.gambar, d.judul, "Gambar utama " + d.judul)}</div>
        <dl class="w5">${w.map(([l, v]) => `<dt>${l}</dt><dd>${v}</dd>`).join("")}</dl>
        <div class="gal"><h2>Tokoh</h2><div class="figs">${figs(d.tokoh, "tokoh")}</div>
        <h2>Tempat</h2><div class="figs">${figs(d.tempat, "tempat")}</div></div>`;
    };
    document.head.appendChild(s);
  }
})();
