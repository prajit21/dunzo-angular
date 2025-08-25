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

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { simpleAccordion } from "../../../../shared/data/ui-kits/accordion/accordion";

@Component({
  selector: "app-simple-accordion",
  templateUrl: "./simple-accordion.html",
  styleUrls: ["./simple-accordion.scss"],
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
