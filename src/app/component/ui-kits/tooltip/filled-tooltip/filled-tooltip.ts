import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-filled-tooltip",
  templateUrl: "./filled-tooltip.html",
  styleUrls: ["./filled-tooltip.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbTooltip],
})
export class FilledTooltip {}
