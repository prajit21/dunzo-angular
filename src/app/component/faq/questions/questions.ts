import { Component, inject } from "@angular/core";

import {
  NgbAccordionConfig,
  NgbAccordionDirective,
  NgbAccordionItem,
  NgbAccordionHeader,
  NgbAccordionToggle,
  NgbAccordionButton,
  NgbCollapse,
  NgbAccordionCollapse,
  NgbAccordionBody,
} from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { questionData } from "../../../shared/data/faq/faq";

@Component({
  selector: "app-questions",
  templateUrl: "./questions.html",
  styleUrls: ["./questions.scss"],
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
export class Questions {
  public questionData = questionData;

  constructor() {
    const config = inject(NgbAccordionConfig);

    config.closeOthers = true;
  }
}
