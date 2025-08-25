import { Component, input } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { articlesAndVideos } from "../../../shared/data/faq/faq";

@Component({
  selector: "app-latest-artical-videos",
  templateUrl: "./latest-artical-videos.html",
  styleUrls: ["./latest-artical-videos.scss"],
  imports: [Feathericon],
})
export class LatestArticalVideos {
  readonly data = input<articlesAndVideos[]>();
}
