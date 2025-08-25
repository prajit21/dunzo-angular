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
import { IconsAccordions } from "../../../../shared/data/ui-kits/accordion/accordion";

@Component({
  selector: "app-icons-accordion",
  templateUrl: "./icons-accordion.html",
  styleUrls: ["./icons-accordion.scss"],
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
export class IconsAccordion {
  public iconaccordionData = IconsAccordions;
}
