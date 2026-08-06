import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ApplyForm } from "./apply-form/apply-form";
import { JobFilter } from "../job-filter/job-filter";

@Component({
  selector: "app-apply",
  templateUrl: "./apply.html",
  styleUrls: ["./apply.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [JobFilter, ApplyForm],
})
export class Apply {}
