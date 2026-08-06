import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbPopover } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-popover-offset",
  templateUrl: "./popover-offset.html",
  styleUrls: ["./popover-offset.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbPopover],
})
export class PopoverOffset {}
