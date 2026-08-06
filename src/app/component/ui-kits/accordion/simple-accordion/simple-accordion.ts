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

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { simpleAccordion } from "../../../../shared/data/ui-kits/accordion/accordion";

@Component({
  selector: "app-simple-accordion",
  templateUrl: "./simple-accordion.html",
  styleUrls: ["./simple-accordion.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionHeader,
    NgbAccordionToggle,
    NgbAccordionButton,
    Feathericon,
    NgbCollapse,
    NgbAccordionCollapse,
    NgbAccordionBody,
  ],
})
export class SimpleAccordion {
  public simpleAccordionData = simpleAccordion;
}
