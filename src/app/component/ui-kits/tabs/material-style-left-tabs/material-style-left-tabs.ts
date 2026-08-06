import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  NgbNav,
  NgbNavItem,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavContent,
  NgbNavOutlet,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-material-style-left-tabs",
  templateUrl: "./material-style-left-tabs.html",
  styleUrls: ["./material-style-left-tabs.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavContent,
    NgbNavOutlet,
  ],
})
export class MaterialStyleLeftTabs {
  public active = 1;
}
