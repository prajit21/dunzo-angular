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
  selector: "app-simple-tabs",
  templateUrl: "./simple-tabs.html",
  styleUrls: ["./simple-tabs.scss"],
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
export class SimpleTabs {
  public active = 2;
}
