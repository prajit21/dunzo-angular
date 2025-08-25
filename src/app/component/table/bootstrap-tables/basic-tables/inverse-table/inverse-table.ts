import { Component } from "@angular/core";

import { InverseTables } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-inverse-table",
  templateUrl: "./inverse-table.html",
  styleUrls: ["./inverse-table.scss"],
  imports: [],
})
export class InverseTable {
  public inversetableData = InverseTables;
}
