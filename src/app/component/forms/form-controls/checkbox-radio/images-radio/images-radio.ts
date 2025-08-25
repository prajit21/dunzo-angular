import { Component } from "@angular/core";

import { imageRadio } from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-images-radio",
  templateUrl: "./images-radio.html",
  styleUrls: ["./images-radio.scss"],
  imports: [],
})
export class ImagesRadio {
  public imgradioData = imageRadio;
}
