import { SlicePipe } from "@angular/common";
import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { jobCardsData } from "../../../../shared/data/job-search/job-search";

@Component({
  selector: "app-job-similer",
  templateUrl: "./job-similer.html",
  styleUrls: ["./job-similer.scss"],
  imports: [NgbRating, SlicePipe],
})
export class JobSimiler {
  config = inject(NgbRatingConfig);

  public jobCardsData = jobCardsData;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }
}
