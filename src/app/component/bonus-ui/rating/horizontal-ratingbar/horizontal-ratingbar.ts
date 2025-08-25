import { Component } from "@angular/core";

import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: "app-horizontal-ratingbar",
  templateUrl: "./horizontal-ratingbar.html",
  styleUrls: ["./horizontal-ratingbar.scss"],
  imports: [BarRatingModule],
})
export class HorizontalRatingbar {
  verticalRate = 1;
}
