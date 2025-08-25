import { Component } from "@angular/core";

import { CarouselModule } from "ngx-owl-carousel-o";

import {
  reviewData,
  reviewOptions,
} from "../../../../shared/data/dashboard/default-data";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-review",
  templateUrl: "./review.html",
  styleUrls: ["./review.scss"],
  imports: [ClickOutsideDirective, CarouselModule],
})
export class Review {
  public review = reviewData;
  public reviewOptionsData = reviewOptions;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
