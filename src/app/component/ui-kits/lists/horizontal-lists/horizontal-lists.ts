import { Component, ChangeDetectionStrategy } from "@angular/core";

import { HorizontalList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-horizontal-lists",
  templateUrl: "./horizontal-lists.html",
  styleUrls: ["./horizontal-lists.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class HorizontalLists {
  public horizontalData = HorizontalList;
}
