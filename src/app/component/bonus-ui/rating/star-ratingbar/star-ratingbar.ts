import { Component, ChangeDetectionStrategy } from "@angular/core";

import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: "app-star-ratingbar",
  templateUrl: "./star-ratingbar.html",
  styleUrls: ["./star-ratingbar.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [BarRatingModule],
})
export class StarRatingbar {
  public cssRate = 1;
}
