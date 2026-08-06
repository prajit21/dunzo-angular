import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-basic-tooltip",
  templateUrl: "./basic-tooltip.html",
  styleUrls: ["./basic-tooltip.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbTooltip],
})
export class BasicTooltip {}
