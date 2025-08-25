import { Component } from "@angular/core";

import { tablehead } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-table-head-options",
  templateUrl: "./table-head-options.html",
  styleUrls: ["./table-head-options.scss"],
  imports: [],
})
export class TableHeadOptions {
  public headoptionsData = tablehead;
}
