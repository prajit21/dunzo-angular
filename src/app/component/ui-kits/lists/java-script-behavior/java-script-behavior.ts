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
  selector: "app-java-script-behavior",
  templateUrl: "./java-script-behavior.html",
  styleUrls: ["./java-script-behavior.scss"],
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavContent,
    NgbNavOutlet,
  ],
})
export class JavaScriptBehavior {
  public active = 1;
}
