import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-unique-dropdown",
  templateUrl: "./unique-dropdown.html",
  styleUrls: ["./unique-dropdown.scss"],
  imports: [
    NgbDropdown,
    NgbDropdownToggle,
    FormsModule,
    NgbDropdownMenu,
    NgbDropdownItem,
  ],
})
export class UniqueDropdown {}
