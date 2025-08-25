import { Routes } from "@angular/router";

import { GalleryGrid } from "./gallery-grid/gallery-grid";
import { GalleryGridDesc } from "./gallery-grid-desc/gallery-grid-desc";
import { HoverEffects } from "./hover-effects/hover-effects";
import { MasonryGallery } from "./masonry-gallery/masonry-gallery";
import { MasonryWithDes } from "./masonry-with-des/masonry-with-des";

export default [
  {
    path: "gallary-grid",
    component: GalleryGrid,
    data: {
      title: "Gallery",
      breadcrumb: "Gallery",
    },
  },
  {
    path: "gallery-grid-desc",
    component: GalleryGridDesc,
    data: {
      title: "Gallery Grid With Description",
      breadcrumb: "Gallery Grid With Description",
    },
  },
  {
    path: "masonry-gallery",
    component: MasonryGallery,
    data: {
      title: "Masonry Gallery",
      breadcrumb: "Masonry Gallery",
    },
  },
  {
    path: "masonry-with-desc",
    component: MasonryWithDes,
    data: {
      title: "Masonry Gallery With Description",
      breadcrumb: "Masonry Gallery With Description",
    },
  },
  {
    path: "hover-effects",
    component: HoverEffects,
    data: {
      title: "Image Hover Effects",
      breadcrumb: "Image Hover Effects",
    },
  },
] as Routes;
