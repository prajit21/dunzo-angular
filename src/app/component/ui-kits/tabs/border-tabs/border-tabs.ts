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
  selector: "app-border-tabs",
  templateUrl: "./border-tabs.html",
  styleUrls: ["./border-tabs.scss"],
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
export class BorderTabs {
  public active = 2;
}
