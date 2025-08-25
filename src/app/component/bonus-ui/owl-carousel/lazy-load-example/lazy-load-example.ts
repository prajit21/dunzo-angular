import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  commonImg,
  Lazyload0ptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-lazy-load-example",
  templateUrl: "./lazy-load-example.html",
  styleUrls: ["./lazy-load-example.scss"],
  imports: [CarouselModule],
})
export class LazyLoadExample {
  public lazyloadData = commonImg;
  public lazyLoadOptions = Lazyload0ptions;
}
