import { Component, ChangeDetectionStrategy } from "@angular/core";

import { VerticalAlignments } from "../../../../shared/data/ui-kits/grid/grid-options";

@Component({
  selector: "app-vertical-alignment",
  templateUrl: "./vertical-alignment.html",
  styleUrls: ["./vertical-alignment.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class VerticalAlignment {
  public VerticalAlignmentData = VerticalAlignments;
}
