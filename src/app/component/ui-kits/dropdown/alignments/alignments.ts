import { Component } from "@angular/core";

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/ui-kits/dropdown/dropdown";

@Component({
  selector: "app-alignments",
  templateUrl: "./alignments.html",
  styleUrls: ["./alignments.scss"],
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class Alignments {
  public alignmentsDropdownData = Data.AlignmentsDropdown;
}
