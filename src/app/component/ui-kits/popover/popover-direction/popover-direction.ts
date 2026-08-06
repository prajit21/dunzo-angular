import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbPopover } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-popover-direction",
  templateUrl: "./popover-direction.html",
  styleUrls: ["./popover-direction.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbPopover],
})
export class PopoverDirection {}
