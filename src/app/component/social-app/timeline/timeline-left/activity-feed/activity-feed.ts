import { Component } from "@angular/core";

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
  selector: "app-activity-feed",
  templateUrl: "./activity-feed.html",
  styleUrls: ["./activity-feed.scss"],
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
export class ActivityFeed {
  public isCollapsed = false;
  public activityFeedData = data.activityFeedData;
}
