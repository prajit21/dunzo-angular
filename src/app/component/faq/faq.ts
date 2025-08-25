import { Component } from "@angular/core";

import { FeaturedTutorials } from "./featured-tutorials/featured-tutorials";
import { LatestArticalVideos } from "./latest-artical-videos/latest-artical-videos";
import { LatestUpdate } from "./latest-update/latest-update";
import { Navigation } from "./navigation/navigation";
import { Questions } from "./questions/questions";
import { SerarchArtical } from "./serarch-artical/serarch-artical";
import { TopCommonFaq } from "./top-common-faq/top-common-faq";
import {
  FaqTopPartData,
  articlesAndVideosData,
  featuredTutorialData,
} from "../../shared/data/faq/faq";

@Component({
  selector: "app-faq",
  templateUrl: "./faq.html",
  styleUrls: ["./faq.scss"],
  imports: [
    TopCommonFaq,
    Questions,
    SerarchArtical,
    Navigation,
    LatestUpdate,
    FeaturedTutorials,
    LatestArticalVideos,
  ],
})
export class Faq {
  public FaqTopPartData = FaqTopPartData;
  public featuredTutorialData = featuredTutorialData;
  public articlesAndVideosData = articlesAndVideosData;
}
