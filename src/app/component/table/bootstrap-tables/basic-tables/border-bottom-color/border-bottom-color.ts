import { Component, ChangeDetectionStrategy } from "@angular/core";

import { basictable } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-border-bottom-color",
  templateUrl: "./border-bottom-color.html",
  styleUrls: ["./border-bottom-color.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class BorderBottomColor {
  public basicTable = basictable;
}
