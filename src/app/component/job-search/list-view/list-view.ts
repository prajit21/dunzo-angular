import { SlicePipe } from "@angular/common";
import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { jobCardsData } from "../../../shared/data/job-search/job-search";
import { JobFilter } from "../job-filter/job-filter";

@Component({
  selector: "app-list-view",
  templateUrl: "./list-view.html",
  styleUrls: ["./list-view.scss"],
  imports: [JobFilter, NgbRating, SlicePipe],
})
export class ListView {
  config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;
  public rating = 5;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
