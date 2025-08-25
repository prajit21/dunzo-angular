import { Component } from "@angular/core";

import { GallerizeDirective } from "ng-gallery/lightbox";

import * as Data from "../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.html",
  styleUrls: ["./photos.scss"],
  imports: [GallerizeDirective],
})
export class Photos {
  public photosData = Data.photosData;
}
