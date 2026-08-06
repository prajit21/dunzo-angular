import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CustomContentList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-custom-content-lists",
  templateUrl: "./custom-content-lists.html",
  styleUrls: ["./custom-content-lists.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class CustomContentLists {
  public customcontentData = CustomContentList;
}
