import { Landmark, Factory, Boxes, Store } from "lucide-react";

// Newest project first: add new entries at the TOP of this array, with
// `featured: true`, so they surface first on both the homepage teaser and
// the /projects/ page. `featured: true` projects show in the homepage
// teaser grid; every project (featured or not) shows on the full
// /projects/ page. If the homepage teaser gets too long, flip older
// entries to `featured: false` — they'll still show up on /projects/.
export const projects = [
  {
    slug: "iconiq-nails",
    icon: Store,
    category: "Commercial",
    title: "Iconiq Nails",
    featured: true,
  },
  {
    slug: "thien-hau-temple",
    icon: Landmark,
    category: "Community",
    title: "Thien Hau Temple",
    featured: true,
  },
  {
    slug: "g-style-building",
    icon: Factory,
    category: "Industrial",
    title: "G-Style Building",
    featured: true,
  },
  {
    slug: "nguyen-office-warehouse",
    icon: Boxes,
    category: "Combination",
    title: "Nguyen Office & Warehouse",
    featured: false,
  },
  {
    slug: "hon-tam-plaza",
    icon: Store,
    category: "Commercial",
    title: "Hon Tam Plaza",
    featured: true,
  },
];
