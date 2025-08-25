import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  responsiveowl,
  responsiveOptions,
} from "../../../../shared/data/bonus-ui/owl-carousel";

@Component({
  selector: "app-responsive-example",
  templateUrl: "./responsive-example.html",
  styleUrls: ["./responsive-example.scss"],
  imports: [CarouselModule],
})
export class ResponsiveExample {
  public responsiveData = responsiveowl;
  public responsiveOptions = responsiveOptions;
}
