import { Component } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { browseArticlesData } from "../../../shared/data/knowledgebase/knowledgebase";

@Component({
  selector: "app-browse-artical-categories",
  templateUrl: "./browse-artical-categories.html",
  styleUrls: ["./browse-artical-categories.scss"],
  imports: [Feathericon],
})
export class BrowseArticalCategories {
  public browseArticlesData = browseArticlesData;
}
