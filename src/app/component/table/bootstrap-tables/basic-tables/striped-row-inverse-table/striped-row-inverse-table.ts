import { Component } from "@angular/core";

import { StripedData } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-striped-row-inverse-table",
  templateUrl: "./striped-row-inverse-table.html",
  styleUrls: ["./striped-row-inverse-table.scss"],
  imports: [],
})
export class StripedRowInverseTable {
  public striped = StripedData;
}
