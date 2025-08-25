import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  commonImg,
  RightToLeftoptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-right-left-example",
  templateUrl: "./right-left-example.html",
  styleUrls: ["./right-left-example.scss"],
  imports: [CarouselModule],
})
export class RightLeftExample {
  public rightLeftData = commonImg;
  public rightleftoptions = RightToLeftoptions;
}
