import { Component } from "@angular/core";

import { BrowseArticalCategories } from "./browse-artical-categories/browse-artical-categories";
import { KnowledgebaseFooterData } from "./knowledgebase-footer-data/knowledgebase-footer-data";
import { KnowledgebaseTopData } from "./knowledgebase-top-data/knowledgebase-top-data";

@Component({
  selector: "app-knowledgebase",
  templateUrl: "./knowledgebase.html",
  styleUrls: ["./knowledgebase.scss"],
  imports: [
    KnowledgebaseTopData,
    BrowseArticalCategories,
    KnowledgebaseFooterData,
  ],
})
export class Knowledgebase {}
