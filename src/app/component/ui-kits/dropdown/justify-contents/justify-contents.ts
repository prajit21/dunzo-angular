import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  NgbDropdown,
  NgbDropdownToggle,
  NgbDropdownMenu,
  NgbDropdownItem,
} from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../../shared/data/ui-kits/dropdown/dropdown";

@Component({
  selector: "app-justify-contents",
  templateUrl: "./justify-contents.html",
  styleUrls: ["./justify-contents.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem],
})
export class JustifyContents {
  public justifyData = Data.JustifyContents;
}
