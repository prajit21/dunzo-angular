import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ScrollableList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-scrollable-lists",
  templateUrl: "./scrollable-lists.html",
  styleUrls: ["./scrollable-lists.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class ScrollableLists {
  public scrollableData = ScrollableList;
}
