import { Routes } from "@angular/router";

import { ComingSimple } from "./coming-simple/coming-simple";
import { ComingWithBgImage } from "./coming-with-bg-image/coming-with-bg-image";
import { ComingWithBgVideo } from "./coming-with-bg-video/coming-with-bg-video";

export default [
  {
    path: "coming-soon-simple",
    component: ComingSimple,
  },
  {
    path: "coming-soon-video",
    component: ComingWithBgVideo,
  },
  {
    path: "coming-soon-image",
    component: ComingWithBgImage,
  },
] as Routes;
