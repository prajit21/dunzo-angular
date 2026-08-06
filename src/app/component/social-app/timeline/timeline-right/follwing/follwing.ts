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
  selector: "app-follwing",
  templateUrl: "./follwing.html",
  styleUrls: ["./follwing.scss"],
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
export class Follwing {
  public followingData = data.Following;
}
