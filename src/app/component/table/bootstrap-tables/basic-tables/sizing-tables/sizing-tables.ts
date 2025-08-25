import { Component } from "@angular/core";

import { sizingTable } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-sizing-tables",
  templateUrl: "./sizing-tables.html",
  styleUrls: ["./sizing-tables.scss"],
  imports: [],
})
export class SizingTables {
  public sizingData = sizingTable;
}
