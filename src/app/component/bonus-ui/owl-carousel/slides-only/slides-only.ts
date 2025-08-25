import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  sildesOnly,
  sildesOptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-slides-only",
  templateUrl: "./slides-only.html",
  styleUrls: ["./slides-only.scss"],
  imports: [CarouselModule],
})
export class SlidesOnly {
  public sildesData = sildesOnly;
  public slidesopdtionData = sildesOptions;
}
