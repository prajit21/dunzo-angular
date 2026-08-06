import { Component, ChangeDetectionStrategy } from "@angular/core";

import { DefaultList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-default-lists",
  templateUrl: "./default-lists.html",
  styleUrls: ["./default-lists.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class DefaultLists {
  public defaultListData = DefaultList;
}
