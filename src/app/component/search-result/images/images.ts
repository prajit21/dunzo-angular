import { Component, ChangeDetectionStrategy } from "@angular/core";

import { GallerizeDirective } from "ng-gallery/lightbox";

import * as Data from "../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-images",
  templateUrl: "./images.html",
  styleUrls: ["./images.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [GallerizeDirective],
})
export class Images {
  public photosData = Data.photosData;
}
