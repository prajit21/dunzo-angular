import { Component } from "@angular/core";

import { Groupings } from "../../../../shared/data/ui-kits/avatar/avavtar";

@Component({
  selector: "app-grouping",
  templateUrl: "./grouping.html",
  styleUrls: ["./grouping.scss"],
  imports: [],
})
export class Grouping {
  public groupingdata = Groupings;
}
