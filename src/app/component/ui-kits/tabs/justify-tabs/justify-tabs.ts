import { Component } from "@angular/core";

import {
  NgbNav,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavContent,
  NgbNavOutlet,
} from "@ng-bootstrap/ng-bootstrap";

import {
  webDesigner,
  UxDesigner,
  IOTdeveloper,
} from "../../../../shared/data/ui-kits/tabs/tab";

@Component({
  selector: "app-justify-tabs",
  templateUrl: "./justify-tabs.html",
  styleUrls: ["./justify-tabs.scss"],
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
export class JustifyTabs {
  public active = 2;
  public webdesignerData = webDesigner;
  public UXdesignerData = UxDesigner;
  public iotDeveloperData = IOTdeveloper;
}
