import { Component, ChangeDetectionStrategy } from "@angular/core";

import {
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionHeader,
  NgbAccordionToggle,
  NgbAccordionButton,
  NgbCollapse,
  NgbAccordionCollapse,
  NgbAccordionBody,
} from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-mutual-friends",
  templateUrl: "./mutual-friends.html",
  styleUrls: ["./mutual-friends.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionButton,
    NgbCollapse,
    NgbAccordionCollapse,
    NgbAccordionBody,
  ],
})
export class MutualFriends {
  public isCollapsed = false;
  public mautalFriendsData = data.mutualFriendsData;
}
