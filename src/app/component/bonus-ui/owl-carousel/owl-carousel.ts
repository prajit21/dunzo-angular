import { Component } from "@angular/core";

import { AutoHeightExample } from "./auto-height-example/auto-height-example";
import { AutoPlay } from "./auto-play/auto-play";
import { AutoWidthExample } from "./auto-width-example/auto-width-example";
import { CenterExample } from "./center-example/center-example";
import { CrossFade } from "./cross-fade/cross-fade";
import { LazyLoadExample } from "./lazy-load-example/lazy-load-example";
import { ResponsiveExample } from "./responsive-example/responsive-example";
import { RightLeftExample } from "./right-left-example/right-left-example";
import { SlidesOnly } from "./slides-only/slides-only";

@Component({
  selector: "app-owl-carousel",
  templateUrl: "./owl-carousel.html",
  styleUrls: ["./owl-carousel.scss"],
  imports: [
    SlidesOnly,
    CrossFade,
    AutoHeightExample,
    AutoPlay,
    CenterExample,
    LazyLoadExample,
    RightLeftExample,
    AutoWidthExample,
    ResponsiveExample,
  ],
})
export class OwlCarousel {}
