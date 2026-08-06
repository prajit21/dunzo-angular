import { Component, ChangeDetectionStrategy } from "@angular/core";

import { activeLists } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-active-lists",
  templateUrl: "./active-lists.html",
  styleUrls: ["./active-lists.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class ActiveLists {
  public activeData = activeLists;
}
