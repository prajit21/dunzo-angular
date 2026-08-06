import { Component, ChangeDetectionStrategy } from "@angular/core";

import { gridColumn } from "../../../../shared/data/ui-kits/grid/grid-options";

@Component({
  selector: "app-grid-column",
  templateUrl: "./grid-column.html",
  styleUrls: ["./grid-column.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class GridColumn {
  public gridColumnData = gridColumn;
}
