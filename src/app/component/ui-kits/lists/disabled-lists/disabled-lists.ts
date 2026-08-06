import { Component, ChangeDetectionStrategy } from "@angular/core";

import { DisabledList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-disabled-lists",
  templateUrl: "./disabled-lists.html",
  styleUrls: ["./disabled-lists.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class DisabledLists {
  public disableData = DisabledList;
}
