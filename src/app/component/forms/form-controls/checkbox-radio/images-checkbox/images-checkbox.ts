import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { imageChekbox } from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-images-checkbox",
  templateUrl: "./images-checkbox.html",
  styleUrls: ["./images-checkbox.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class ImagesCheckbox {
  public imgcheckboxData = imageChekbox;
}
