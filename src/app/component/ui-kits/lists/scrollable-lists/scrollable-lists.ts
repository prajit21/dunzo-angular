import { Component } from "@angular/core";

import { ScrollableList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-scrollable-lists",
  templateUrl: "./scrollable-lists.html",
  styleUrls: ["./scrollable-lists.scss"],
  imports: [],
})
export class ScrollableLists {
  public scrollableData = ScrollableList;
}
