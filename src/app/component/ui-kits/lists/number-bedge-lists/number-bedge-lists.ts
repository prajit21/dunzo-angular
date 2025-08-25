import { Component } from "@angular/core";

import { NumberedBadgeLists } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-number-bedge-lists",
  templateUrl: "./number-bedge-lists.html",
  styleUrls: ["./number-bedge-lists.scss"],
  imports: [],
})
export class NumberBedgeLists {
  public NumberedBadgeData = NumberedBadgeLists;
}
