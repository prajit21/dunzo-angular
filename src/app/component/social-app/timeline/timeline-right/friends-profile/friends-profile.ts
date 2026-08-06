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
  selector: "app-friends-profile",
  templateUrl: "./friends-profile.html",
  styleUrls: ["./friends-profile.scss"],
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
export class FriendsProfile {
  public friednsData = data.Friends;
}
