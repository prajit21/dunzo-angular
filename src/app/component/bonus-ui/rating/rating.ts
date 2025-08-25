import { Component } from "@angular/core";

import { CurrentRatingbar } from "./current-ratingbar/current-ratingbar";
import { HorizontalRatingbar } from "./horizontal-ratingbar/horizontal-ratingbar";
import { MovieRatingbar } from "./movie-ratingbar/movie-ratingbar";
import { OneToTenRatingbar } from "./one-to-ten-ratingbar/one-to-ten-ratingbar";
import { SquareRatingbar } from "./square-ratingbar/square-ratingbar";
import { StarRatingbar } from "./star-ratingbar/star-ratingbar";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.html",
  styleUrls: ["./rating.scss"],
  imports: [
    OneToTenRatingbar,
    MovieRatingbar,
    SquareRatingbar,
    StarRatingbar,
    HorizontalRatingbar,
    CurrentRatingbar,
  ],
})
export class Rating {}
