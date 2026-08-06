import { Component, ChangeDetectionStrategy } from "@angular/core";

import { FlushList } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-flush-lists",
  templateUrl: "./flush-lists.html",
  styleUrls: ["./flush-lists.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class FlushLists {
  public flushListData = FlushList;
}
