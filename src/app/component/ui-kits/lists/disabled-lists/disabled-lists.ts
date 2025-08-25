import { Component } from "@angular/core";

import { DisabledList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-disabled-lists",
  templateUrl: "./disabled-lists.html",
  styleUrls: ["./disabled-lists.scss"],
  imports: [],
})
export class DisabledLists {
  public disableData = DisabledList;
}
