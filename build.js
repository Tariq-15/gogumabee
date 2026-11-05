// Vercel runs this on every deploy: merges content/art/*.json (one file per artwork, edited in the CMS) into content/gallery.json, newest first.
const fs = require("fs");
const items = fs.readdirSync("content/art").filter(f => f.endsWith(".json"))
  .map(f => JSON.parse(fs.readFileSync(`content/art/${f}`, "utf8")))
  .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
  .map(({ category, also = [], date, ...rest }) => ({ ...rest, cats: [category, ...also] }));
fs.writeFileSync("content/gallery.json", JSON.stringify({ items }));
console.log(`gallery.json: ${items.length} artworks`);
