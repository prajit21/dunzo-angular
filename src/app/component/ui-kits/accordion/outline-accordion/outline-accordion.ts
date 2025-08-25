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
import { OutlineAccordions } from "../../../../shared/data/ui-kits/accordion/accordion";

@Component({
  selector: "app-outline-accordion",
  templateUrl: "./outline-accordion.html",
  styleUrls: ["./outline-accordion.scss"],
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
export class OutlineAccordion {
  public OutlineAccordionData = OutlineAccordions;
}
