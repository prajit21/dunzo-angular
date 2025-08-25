import { Component } from "@angular/core";

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
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class DropdownSizing {
  public sizingdropdownData = Data.DropdownSizing;
}
