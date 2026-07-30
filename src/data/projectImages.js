// Drop image files into src/assets/projects/<slug>/ — every file found is
// picked up automatically, ordered by filename (e.g. 01.jpg, 02.jpg, ...).
const imageModules = import.meta.glob(
  "../assets/projects/*/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" }
);

const imagesBySlug = {};
for (const path in imageModules) {
  const [, slug] = path.match(/projects\/([^/]+)\//);
  (imagesBySlug[slug] ??= []).push({ path, url: imageModules[path] });
}
for (const slug in imagesBySlug) {
  imagesBySlug[slug].sort((a, b) => a.path.localeCompare(b.path));
}

export function getProjectImages(slug) {
  return (imagesBySlug[slug] || []).map((i) => i.url);
}
