import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NumberedBadgeLists } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-number-bedge-lists",
  templateUrl: "./number-bedge-lists.html",
  styleUrls: ["./number-bedge-lists.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class NumberBedgeLists {
  public NumberedBadgeData = NumberedBadgeLists;
}
