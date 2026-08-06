import { Component, ChangeDetectionStrategy } from "@angular/core";

import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: "app-one-to-ten-ratingbar",
  templateUrl: "./one-to-ten-ratingbar.html",
  styleUrls: ["./one-to-ten-ratingbar.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [BarRatingModule],
})
export class OneToTenRatingbar {
  public faRate = 7;
}
