import { Component } from "@angular/core";

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-input-type-dropdown",
  templateUrl: "./input-type-dropdown.html",
  styleUrls: ["./input-type-dropdown.scss"],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class InputTypeDropdown {}
