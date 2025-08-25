import { Component } from "@angular/core";

import { VerticalAlignments } from "../../../../shared/data/ui-kits/grid/grid-options";

@Component({
  selector: "app-vertical-alignment",
  templateUrl: "./vertical-alignment.html",
  styleUrls: ["./vertical-alignment.scss"],
  imports: [],
})
export class VerticalAlignment {
  public VerticalAlignmentData = VerticalAlignments;
}
