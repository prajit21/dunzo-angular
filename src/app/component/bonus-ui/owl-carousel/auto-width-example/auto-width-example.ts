import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  commonImg,
  autoWidthoption,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-auto-width-example",
  templateUrl: "./auto-width-example.html",
  styleUrls: ["./auto-width-example.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CarouselModule],
})
export class AutoWidthExample {
  public widthData = commonImg;
  public autowidhtoptionsData = autoWidthoption;
}
