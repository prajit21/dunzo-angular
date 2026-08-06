import { Component, ChangeDetectionStrategy } from "@angular/core";

import { knowledgebaseData } from "../../../shared/data/knowledgebase/knowledgebase";
import { TopCommonFaq } from "../../faq/top-common-faq/top-common-faq";

@Component({
  selector: "app-knowledgebase-top-data",
  templateUrl: "./knowledgebase-top-data.html",
  styleUrls: ["./knowledgebase-top-data.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [TopCommonFaq],
})
export class KnowledgebaseTopData {
  public knowledgebaseData = knowledgebaseData;
}
