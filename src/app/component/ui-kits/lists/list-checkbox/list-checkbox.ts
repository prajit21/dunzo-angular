import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Listcheckbox } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-list-checkbox",
  templateUrl: "./list-checkbox.html",
  styleUrls: ["./list-checkbox.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class ListCheckbox {
  public listsCheckboxData = Listcheckbox;
}
