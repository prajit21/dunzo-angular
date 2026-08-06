import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { faqTopPart } from "../../../shared/data/faq/faq";

@Component({
  selector: "app-top-common-faq",
  templateUrl: "./top-common-faq.html",
  styleUrls: ["./top-common-faq.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Feathericon],
})
export class TopCommonFaq {
  readonly data = input<faqTopPart[]>();
}
