import { Component } from "@angular/core";

import { BarRatingModule } from "ngx-bar-rating";

@Component({
  selector: "app-movie-ratingbar",
  templateUrl: "./movie-ratingbar.html",
  styleUrls: ["./movie-ratingbar.scss"],
  imports: [BarRatingModule],
})
export class MovieRatingbar {
  public movieRate = 2;
}
