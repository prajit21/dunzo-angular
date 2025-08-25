import { Component } from "@angular/core";

import {
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionToggle,
  NgbAccordionButton,
  NgbCollapse,
  NgbAccordionCollapse,
  NgbAccordionBody,
} from "@ng-bootstrap/ng-bootstrap";

import { FlushAccordions } from "../../../../shared/data/ui-kits/accordion/accordion";

@Component({
  selector: "app-flush-accordion",
  templateUrl: "./flush-accordion.html",
  styleUrls: ["./flush-accordion.scss"],
  imports: [
    NgbAccordionDirective,
    NgbAccordionItem,
    NgbAccordionToggle,
    NgbAccordionButton,
    NgbCollapse,
    NgbAccordionCollapse,
    NgbAccordionBody,
  ],
})
export class FlushAccordion {
  public flushAccordionData = FlushAccordions;
}
