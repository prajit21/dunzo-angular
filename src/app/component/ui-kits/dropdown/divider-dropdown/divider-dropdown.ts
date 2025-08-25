import { Component } from "@angular/core";

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/ui-kits/dropdown/dropdown";

@Component({
  selector: "app-divider-dropdown",
  templateUrl: "./divider-dropdown.html",
  styleUrls: ["./divider-dropdown.scss"],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class DividerDropdown {
  public dividerdropdownData = Data.DividerDropdown;
}
