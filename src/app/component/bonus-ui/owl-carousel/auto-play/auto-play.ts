import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  autoPlayVariant,
  autovariantOption,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-auto-play",
  templateUrl: "./auto-play.html",
  styleUrls: ["./auto-play.scss"],
  imports: [CarouselModule],
})
export class AutoPlay {
  public autovariantoptionsData = autovariantOption;
  public autoVariantData = autoPlayVariant;
}
