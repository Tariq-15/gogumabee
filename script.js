// Content lives in content/*.json and is edited through /admin (Sveltia CMS).
const SEGS = ["sketch", "color", "ship", "chibi", "extra"];
const [status, prices, about, faq, ...segs] = await Promise.all(["status", "prices", "about", "faq", ...SEGS.map(k => `gallery-${k}`)].map(n => fetch(`content/${n}.json`).then(r => r.json())));
// Interleave the segments so the first page of "all" shows a bit of everything, newest first in each.
const ART = [];
for (let i = 0; segs.some(g => i < g.items.length); i++)
  segs.forEach((g, k) => g.items[i] && ART.push({ ...g.items[i], cats: [SEGS[k], ...(g.items[i].also || [])] }));

const esc = t => String(t ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" })[c]);

const md = t => esc(t).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); // **bold** is the only markup editors get
document.getElementById("about-text").innerHTML = about.about.map(p => `<p>${md(p)}</p>`).join("");
document.getElementById("faq-list").innerHTML = faq.faq.map(f => `<details class="sketch-box"><summary>${esc(f.q)}</summary><p>${md(f.a)}</p></details>`).join("");

document.querySelector(".sticky b").textContent = status.status;
const mq = document.querySelector(".marquee div");
mq.textContent = mq.textContent.replaceAll("commissions open", `commissions ${status.status.toLowerCase()}`);

document.querySelector(".cards").innerHTML = prices.cards.map(c => `
  <article class="card sketch-box${c.featured ? " featured" : ""}">
    ${c.featured ? '<span class="badge hand">most loved ♡</span>' : ""}
    <img src="${esc(c.image)}" loading="lazy" ${c.pos ? `style="object-position:${esc(c.pos)}"` : ""} alt="${esc(c.alt)}">
    <h3>${esc(c.title)}</h3>
    <p class="price hand">from <b>${esc(c.price)}</b></p>
    <ul>${c.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul>
    <a class="btn${c.featured ? " btn-ink" : ""}" href="#order" data-type="${esc(c.type)}">pick this ✎</a>
  </article>`).join("");

const LIMIT = 12;
const grid = document.getElementById("grid");
const more = document.getElementById("more");
let filter = "all", expanded = false;

grid.innerHTML = ART.map(({ image, thumb, cats, alt, w, h }, i) =>
  `<button class="polaroid" data-full="${esc(image)}" data-cats="${esc(cats.join(" "))}" style="--r:${((i * 37) % 7 - 3) * 0.8}deg">
     <img src="${esc(thumb || image)}" ${w ? `width="${w}" height="${h}"` : ""} alt="${esc(alt)}" loading="lazy" decoding="async">
   </button>`).join("");

function render() {
  let n = 0;
  for (const el of grid.children) {
    el.match = filter === "all" || el.dataset.cats.split(" ").includes(filter);
    if (el.match) n++;
    el.hidden = !el.match || (!expanded && n > LIMIT);
  }
  more.hidden = expanded || n <= LIMIT;
}
render();

document.querySelectorAll(".filters button").forEach(b => b.onclick = () => {
  document.querySelectorAll(".filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  filter = b.dataset.f;
  expanded = false;
  render();
});
more.onclick = () => { expanded = true; render(); };

// Lightbox (native <dialog>: Esc closes for free)
const lb = document.getElementById("lb");
const lbImg = lb.querySelector("img");
let cur = 0;
const matching = () => [...grid.children].filter(el => el.match);
function show(i) {
  const list = matching();
  cur = (i + list.length) % list.length;
  const el = list[cur];
  lbImg.src = el.dataset.full;
  lbImg.alt = el.querySelector("img").alt;
}
grid.onclick = e => {
  const el = e.target.closest(".polaroid");
  if (!el) return;
  show(matching().indexOf(el));
  lb.showModal();
};
lb.querySelector(".prev").onclick = () => show(cur - 1);
lb.querySelector(".next").onclick = () => show(cur + 1);
lb.querySelector(".lb-close").onclick = () => lb.close();
lb.onclick = e => { if (e.target === lb) lb.close(); };
lb.onkeydown = e => {
  if (e.key === "ArrowLeft") show(cur - 1);
  if (e.key === "ArrowRight") show(cur + 1);
};

// Draw the scribbles when they scroll into view
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
}), { threshold: 0.5 });
document.querySelectorAll(".draw").forEach(d => io.observe(d));

// Commission form: no backend, so build the message, copy it, and point to Instagram DMs.
const form = document.getElementById("form");
document.querySelectorAll("[data-type]").forEach(a => a.onclick = () => form.elements.type.value = a.dataset.type);
form.onsubmit = async e => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const msg = `Hi Sarang! Commission request 🐝

Name: ${d.name}
Contact: ${d.contact}
Type: ${d.type}
Characters: ${d.chars}
Idea: ${d.idea}
References: ${d.refs || "-"}`;
  const out = document.getElementById("out"), status = document.getElementById("status");
  out.value = msg;
  document.getElementById("done").hidden = false;
  try {
    await navigator.clipboard.writeText(msg);
    status.textContent = "copied! now paste it into my DMs ♡";
  } catch {
    out.select();
    status.textContent = "copy the message below, then paste it into my DMs ♡";
  }
};

// Glitter trail: colourful sparkles fall off the mouse and twinkle out. Mouse only; off for reduced motion.
if (matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)").matches) {
  const COLORS = ["#ffcf3f", "#fa7e1e", "#f0569a", "#d62976", "#962fbf", "#0a99ff"]; // honey + the Instagram gradient
  const rnd = (a, b) => a + Math.random() * (b - a);
  let last = 0;
  addEventListener("pointermove", e => {
    if (e.timeStamp - last < 22) return; // ~45 sparkles a second at most
    last = e.timeStamp;
    const g = document.createElement("span");
    g.className = Math.random() < .3 ? "glitter dot" : "glitter";
    g.setAttribute("aria-hidden", "true");
    g.style.cssText = `left:${e.clientX + rnd(-6, 6)}px; top:${e.clientY + rnd(-6, 6)}px; --s:${rnd(5, 13)}px;
      --c:${COLORS[Math.random() * COLORS.length | 0]}; --dx:${rnd(-14, 14)}px; --dy:${rnd(12, 34)}px; --r:${rnd(-180, 180)}deg`;
    g.onanimationend = () => g.remove();
    document.body.append(g);
  });
}
