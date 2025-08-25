import { Component } from "@angular/core";

import { responsiveTable } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-responsive-tables-light-background",
  templateUrl: "./responsive-tables-light-background.html",
  styleUrls: ["./responsive-tables-light-background.scss"],
  imports: [],
})
export class ResponsiveTablesLightBackground {
  public responiveData = responsiveTable;
}
