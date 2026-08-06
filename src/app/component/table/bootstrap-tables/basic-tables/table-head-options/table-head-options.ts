import { Component, ChangeDetectionStrategy } from "@angular/core";

import { tablehead } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-table-head-options",
  templateUrl: "./table-head-options.html",
  styleUrls: ["./table-head-options.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class TableHeadOptions {
  public headoptionsData = tablehead;
}
