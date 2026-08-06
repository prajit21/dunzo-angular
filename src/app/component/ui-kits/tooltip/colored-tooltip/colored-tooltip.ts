import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-colored-tooltip",
  templateUrl: "./colored-tooltip.html",
  styleUrls: ["./colored-tooltip.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbTooltip],
})
export class ColoredTooltip {}
