import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  NgbNav,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavContent,
  NgbNavOutlet,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-icons-tabs",
  templateUrl: "./icons-tabs.html",
  styleUrls: ["./icons-tabs.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavContent,
    NgbNavOutlet,
  ],
})
export class IconsTabs {
  public active = 1;
}
