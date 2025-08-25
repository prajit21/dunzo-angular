import { Component } from "@angular/core";

import {
  NgbNav,
  NgbNavItem,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavContent,
  NgbNavOutlet,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-vertical-tabs",
  templateUrl: "./vertical-tabs.html",
  styleUrls: ["./vertical-tabs.scss"],
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavContent,
    NgbNavOutlet,
  ],
})
export class VerticalTabs {
  public active = 2;
}
