import { Component } from "@angular/core";

import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: "app-square-ratingbar",
  templateUrl: "./square-ratingbar.html",
  styleUrls: ["./square-ratingbar.scss"],
  imports: [BarRatingModule],
})
export class SquareRatingbar {
  public squareRate = 1;
}
