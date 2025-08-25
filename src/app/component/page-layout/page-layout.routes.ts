import { Routes } from "@angular/router";

import { HideNavScroll } from "./hide-nav-scroll/hide-nav-scroll";

export default [
  {
    path: "hide-nav-scroll",
    component: HideNavScroll,
    data: {
      title: "Hide Menu On Scrolll",
      breadcrumb: "Hide Menu On Scrolll",
    },
  },
] as Routes;
