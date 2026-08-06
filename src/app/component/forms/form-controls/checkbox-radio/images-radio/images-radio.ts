import { Component, ChangeDetectionStrategy } from "@angular/core";

import { imageRadio } from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-images-radio",
  templateUrl: "./images-radio.html",
  styleUrls: ["./images-radio.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class ImagesRadio {
  public imgradioData = imageRadio;
}
