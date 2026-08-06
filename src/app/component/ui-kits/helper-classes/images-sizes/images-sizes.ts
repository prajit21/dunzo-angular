import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ImageSize } from "../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-images-sizes",
  templateUrl: "./images-sizes.html",
  styleUrls: ["./images-sizes.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class ImagesSizes {
  public ImagSizeData = ImageSize;
}
