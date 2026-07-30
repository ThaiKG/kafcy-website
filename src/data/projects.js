import { Landmark, Factory, Boxes, Store } from "lucide-react";

// `featured: true` projects show in the homepage teaser grid; every
// project (featured or not) shows on the full /projects/ page. As the
// project list grows, mark new ones `featured: false` to keep the
// homepage short while they still show up on the dedicated page.
export const projects = [
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
    featured: true,
  },
  {
    slug: "hon-tam-plaza",
    icon: Store,
    category: "Commercial",
    title: "Hon Tam Plaza",
    featured: true,
  },
  {
    slug: "iconiq-nails",
    icon: Store,
    category: "Commercial",
    title: "Iconiq Nails",
    featured: false,
  },
];
