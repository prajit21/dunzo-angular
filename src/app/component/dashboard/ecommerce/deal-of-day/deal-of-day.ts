import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  sildesOptions,
  offer,
} from "../../../../shared/data/dashboard/E-commerce/ecommerce";

@Component({
  selector: "app-deal-of-day",
  templateUrl: "./deal-of-day.html",
  styleUrls: ["./deal-of-day.scss"],
  imports: [CarouselModule],
})
export class DealOfDay {
  public offerData = offer;
  public SildesoptionsData = sildesOptions;
}
