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
  descriptionData,
  reviewData,
  userDetailsData,
} from "../../../../shared/data/ui-kits/tabs/tab";

@Component({
  selector: "app-material-style-tabs",
  templateUrl: "./material-style-tabs.html",
  styleUrls: ["./material-style-tabs.scss"],
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
export class MaterialStyleTabs {
  public active = 1;
  public userDetailsData = userDetailsData;
  public descriptionData = descriptionData;
  public reviewData = reviewData;
}
