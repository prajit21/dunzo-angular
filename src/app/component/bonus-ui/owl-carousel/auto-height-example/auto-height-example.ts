import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  commonImg,
  autoheigthoptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-auto-height-example",
  templateUrl: "./auto-height-example.html",
  styleUrls: ["./auto-height-example.scss"],
  imports: [CarouselModule],
})
export class AutoHeightExample {
  public heigthData = commonImg;
  public heigthOptionData = autoheigthoptions;
}
