import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  center,
  owlcarousel1ptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-center-example",
  templateUrl: "./center-example.html",
  styleUrls: ["./center-example.scss"],
  imports: [CarouselModule],
})
export class CenterExample {
  public centerData = center;
  public centeroptions = owlcarousel1ptions;
}
