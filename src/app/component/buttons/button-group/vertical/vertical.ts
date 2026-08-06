import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-vertical",
  templateUrl: "./vertical.html",
  styleUrls: ["./vertical.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class Vertical {}
