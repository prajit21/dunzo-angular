import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/ui-kits/dropdown/dropdown";

@Component({
  selector: "app-dropdown-sizing",
  templateUrl: "./dropdown-sizing.html",
  styleUrls: ["./dropdown-sizing.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class DropdownSizing {
  public sizingdropdownData = Data.DropdownSizing;
}
