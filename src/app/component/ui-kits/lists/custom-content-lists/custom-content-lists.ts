import { Component } from "@angular/core";

import { CustomContentList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-custom-content-lists",
  templateUrl: "./custom-content-lists.html",
  styleUrls: ["./custom-content-lists.scss"],
  imports: [],
})
export class CustomContentLists {
  public customcontentData = CustomContentList;
}
