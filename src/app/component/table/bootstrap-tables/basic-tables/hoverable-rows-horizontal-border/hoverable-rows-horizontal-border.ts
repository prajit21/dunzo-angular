import { Component } from "@angular/core";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";
import { hoverbleData } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-hoverable-rows-horizontal-border",
  templateUrl: "./hoverable-rows-horizontal-border.html",
  styleUrls: ["./hoverable-rows-horizontal-border.scss"],
  imports: [Feathericon],
})
export class HoverableRowsHorizontalBorder {
  public hoverble = hoverbleData;
}
