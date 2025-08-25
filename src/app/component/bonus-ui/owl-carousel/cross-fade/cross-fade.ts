import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  fadeOptions,
  crossFade,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-cross-fade",
  templateUrl: "./cross-fade.html",
  styleUrls: ["./cross-fade.scss"],
  imports: [CarouselModule],
})
export class CrossFade {
  public crossfadeData = crossFade;
  public fadeoptionsData = fadeOptions;
}
