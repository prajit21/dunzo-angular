import { Component, ChangeDetectionStrategy } from "@angular/core";

import { customHover } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-custom-table-color-hover-stripped",
  templateUrl: "./custom-table-color-hover-stripped.html",
  styleUrls: ["./custom-table-color-hover-stripped.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class CustomTableColorHoverStripped {
  public customhoverData = customHover;
}
