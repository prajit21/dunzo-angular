import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { jobCardsData } from "../../../shared/data/job-search/job-search";
import { JobFilter } from "../job-filter/job-filter";

@Component({
  selector: "app-cards-view",
  templateUrl: "./cards-view.html",
  styleUrls: ["./cards-view.scss"],
  imports: [JobFilter, NgbRating],
})
export class CardsView {
  config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
