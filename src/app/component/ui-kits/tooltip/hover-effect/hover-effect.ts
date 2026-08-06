import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-hover-effect",
  templateUrl: "./hover-effect.html",
  styleUrls: ["./hover-effect.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbTooltip],
})
export class HoverEffect {}
