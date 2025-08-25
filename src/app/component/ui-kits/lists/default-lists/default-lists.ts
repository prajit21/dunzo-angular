import { Component } from "@angular/core";

import { DefaultList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-default-lists",
  templateUrl: "./default-lists.html",
  styleUrls: ["./default-lists.scss"],
  imports: [],
})
export class DefaultLists {
  public defaultListData = DefaultList;
}
