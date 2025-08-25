import { Component } from "@angular/core";

import { DashedBorders } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-dashed-border",
  templateUrl: "./dashed-border.html",
  styleUrls: ["./dashed-border.scss"],
  imports: [],
})
export class DashedBorder {
  public dashborderData = DashedBorders;
}
