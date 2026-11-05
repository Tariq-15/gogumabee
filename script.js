// Gallery: [file in img/ (no .webp), categories, description, thumb width, thumb height]
// Categories: sketch, color, ship, chibi, extra. Add new art here after running make_images.py.
const ART = [
  ["Untitled125", "color", "Digital portrait of a boy with sunglasses on his head and a black star on his cheek", 720, 931],
  ["Untitled246_20261019174810", "color ship", "Two friends cheek to cheek in teal and coral sweaters, with little bunny doodles", 720, 1002],
  ["IMG20251030143317", "sketch", "Pencil portrait of a boy with fluffy hair pointing at a star on his cheek", 720, 899],
  ["Untitled204_20260810191215", "color extra", "Boy in a Spider-Man suit framing the viewer with his hands", 720, 889],
  ["Untitled233_20261004171909", "chibi", "Blond boy with cat ears in a pink maid dress, surrounded by hearts", 720, 997],
  ["Untitled242_20261012171956", "color ship", "Two young men sharing one blue-grey blanket, ink with soft colour", 720, 903],
  ["Untitled256_20261101153435", "sketch", "Pencil portrait of a young man with tousled light hair in a dark suit and tie", 720, 873],
  ["Untitled165_20260606183746", "color", "Boy in a green shirt holding his phone with a leaf in his mouth: 'Bunny alert!'", 720, 960],
  ["IMG_20260326_213330", "color", "Blond boy winking with a peace sign in a sequined black jacket", 720, 870],
  ["Untitled215_20260902145316", "color ship", "Two young men taking a mirror selfie in matching red sweaters, reference photo taped above", 679, 1100],
  ["Untitled230_20261003191534", "sketch", "Side profile of a young man with long dark hair in a teal jacket", 720, 1089],
  ["Untitled251_20261027144922", "chibi", "Chibi of a blond boy with cat ears in a grey hoodie, saying 'nyan'", 720, 911],

  ["Untitled256_20261101154539", "extra", "Pencil sketch of a dancer in a frilly maid-style outfit, one arm raised", 720, 960],
  ["Untitled252_20261027152921", "sketch", "Pencil sketch of a boy with an earring and a popped collar", 720, 649],
  ["Untitled245_20261016153906", "sketch", "Pencil drawing of a young man in an open shirt with a pendant necklace", 720, 1057],
  ["Untitled243_20261014150909", "chibi", "Comic chibi of two bears and two boys crying rivers of tears", 720, 984],
  ["Untitled240_20261012204520", "chibi", "Doodle of a round orange fish asking 'Deficiency?'", 720, 743],
  ["Untitled236_20261006193549", "chibi", "Comic strip of a pink dragon and a cat-hooded tiger holding a trident", 636, 1100],
  ["Untitled231_20261003192501", "sketch", "Pencil portrait of a boy squishing his cheeks, with a pink bow in his hair", 715, 1100],
  ["Untitled217_20260904173649", "sketch", "Pencil sketch of a boy with cat ears and fluffy hair", 711, 1100],
  ["Untitled217_20260904173340", "sketch", "Pencil sketch of a boy in glasses wearing a hood with a peach on top", 704, 1100],
  ["Untitled217_20260904173018", "sketch", "Pencil sketch of a boy with swept-back hair and rimless glasses", 714, 1100],
  ["Untitled212_Restored_20261105000658", "color", "Boy with fox ears in a lime green suit: 'it's called a hustle, sweetheart'", 720, 931],
  ["Untitled209_20260818191532", "color extra", "Dancer in black wrapped in pink ribbons, arms above his head", 630, 1100],
  ["Untitled203_20260810164820", "ship", "Pencil sketch of a couple in flowing fantasy outfits with large wings", 619, 1100],
  ["Untitled201_20260807165032", "color ship", "Two boys cuddling, one in cat ears and glasses, the other in a red hood", 720, 602],
  ["Untitled197_20260729164354", "ship", "Black-and-white drawing of two friends on a road at night, one with arms flung wide", 720, 464],
  ["Untitled178_20260706104553", "sketch", "Pencil portrait of a light-haired boy in a spiral sketchbook", 720, 1018],
  ["Untitled176_20260704170400", "sketch", "Pencil drawing of a girl with long straight hair and stars around her head", 699, 1100],
  ["Untitled168_20260610172919", "extra", "Pencil sketch of a performer in a skirt singing into a microphone", 720, 964],
  ["Untitled167_20260608185930", "sketch", "Ink and pencil drawing of a boy lying down, hand in his dark hair", 720, 540],
  ["Untitled159_20260525152837", "ship", "Pencil drawing of two boys in dark shirts lying side by side", 720, 540],
  ["Untitled155_20260516131647", "extra", "Boy in a cropped black hoodie with his arms over his head", 720, 960],
  ["Untitled147", "color", "Pencil portrait with a coloured navy jacket and a gold star on his cheek", 720, 960],
  ["Untitled139_20260401165709", "color", "Boy with spiky hair and tinted glasses in grey tones with a comic burst", 720, 960],
  ["Untitled128", "color", "Girl with glasses resting her chin on her hand, with a jellyfish doodle", 720, 433],
  ["IMG_20260713_023518", "ship", "Pencil drawing of a boy resting his head on another boy's shoulder", 720, 512],
  ["IMG_20260503_162639", "color ship", "Painted close-up of a boy kissing another boy's cheek", 720, 503],
  ["IMG_20260414_171847", "sketch", "Pencil portrait of a girl in glasses and a black collared top", 720, 771],
  ["IMG20261008135704", "ship", "Pencil sketch of two friends sitting on the floor in a stripe of sunlight", 720, 720],
  ["IMG20260406154150", "sketch", "Pencil sketch of a boy taking a selfie with a plaster on his cheek", 720, 891],
  ["IMG20260322120844", "sketch", "Pencil sketch of a smiling boy in a scarf with Korean speech bubbles", 720, 967],
  ["IMG20260322120528", "ship", "Pencil sketch of two boys in denim, one leaning on the other", 720, 900],
  ["IMG20260127144959", "sketch", "Pencil sketch of a boy with a heart-shaped hair tie and Korean text", 720, 862],
  ["IMG202601091442271", "ship", "Sketchbook page of two boys in a bandana and a cap, with tiny doodles and 'Hawaii'", 720, 900],
  ["IMG20251218161840", "sketch", "Pencil portrait of a boy in headphones with a red bow and tiny cartoon friends", 720, 899],
  ["IMG20251216142626", "ship", "Pencil sketch of two boys posing together, labelled 'nico' and 'joo'", 720, 899],
  ["IMG20251213155617", "sketch", "Pencil portrait of a boy with a headset microphone and doodled stars", 720, 901],
  ["IMG20251209121454", "ship", "Pencil sketch of two friends wrapped in one jacket, in photo-booth panels", 720, 900],
  ["IMG20251201151217", "sketch", "Pencil portrait of a smiling boy with a lollipop and a name sign", 720, 901],
  ["IMG_20251112_150310", "sketch", "Pencil portrait with green ivy drawn around the ear", 720, 900],
  ["IMG20251107123752", "extra", "Pencil sketch of an elf girl holding a red staff", 720, 901],
  ["IMG20251016145918", "sketch", "Two pencil studies of a young man in glasses surrounded by stars", 720, 900],
  ["IMG20250814123532", "sketch", "Pencil sketch of a smiling girl with a Korean caption", 720, 720],
  ["IMG20250803140104", "ship", "Sketchbook spread: a boy with a vintage camera above a smiling girl", 720, 900],
  ["IMG20250803131634", "sketch", "Pencil drawing of a boy smiling behind a vintage camera", 720, 740],
  ["IMG20250628103152", "sketch", "Pencil portrait of a girl with a red-ink knife and handwritten Spanish lyrics", 720, 720],
];

const LIMIT = 12;
const grid = document.getElementById("grid");
const more = document.getElementById("more");
let filter = "all", expanded = false;

grid.innerHTML = ART.map(([slug, cats, alt, w, h], i) =>
  `<button class="polaroid" data-slug="${slug}" data-cats="${cats}" style="--r:${((i * 37) % 7 - 3) * 0.8}deg">
     <img src="img/t/${slug}.webp" width="${w}" height="${h}" alt="${alt}" loading="lazy" decoding="async">
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
  lbImg.src = `img/${el.dataset.slug}.webp`;
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
