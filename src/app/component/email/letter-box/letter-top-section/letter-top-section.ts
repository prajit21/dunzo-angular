import { Component } from "@angular/core";

import {
  NgbNav,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
} from "@ng-bootstrap/ng-bootstrap";

import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-letter-top-section",
  templateUrl: "./letter-top-section.html",
  styleUrls: ["./letter-top-section.scss"],
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLink,
    NgbNavLinkBase,
    ClickOutsideDirective,
  ],
})
export class LetterTopSection {
  public active = 1;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
