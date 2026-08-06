import { SlicePipe } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { JobSimiler } from "./job-similer/job-similer";
import { jobDetail } from "../../../shared/data/job-search/job-search";
import { JobFilter } from "../job-filter/job-filter";

@Component({
  selector: "app-job-details",
  templateUrl: "./job-details.html",
  styleUrls: ["./job-details.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [JobFilter, JobSimiler, SlicePipe],
})
export class JobDetails {
  public jobDetail = jobDetail;
}
