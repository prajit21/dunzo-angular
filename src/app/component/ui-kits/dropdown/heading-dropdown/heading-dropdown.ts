import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-heading-dropdown",
  templateUrl: "./heading-dropdown.html",
  styleUrls: ["./heading-dropdown.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class HeadingDropdown {}
