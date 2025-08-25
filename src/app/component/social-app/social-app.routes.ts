import { Routes } from "@angular/router";

import { SocialApp } from "./social-app";

export default [
  {
    path: "",
    component: SocialApp,
    data: {
      title: "Soical App",
      breadcrumb: "Soical App",
    },
  },
] as Routes;
