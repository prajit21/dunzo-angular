import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {
  checkBox,
  themeSales,
} from "../../../../../shared/data/forms/form-controls/mega-options";

@Component({
  selector: "app-variation-checkbox",
  templateUrl: "./variation-checkbox.html",
  styleUrls: ["./variation-checkbox.scss"],
  imports: [FormsModule],
})
export class VariationCheckbox {
  public checkboxData = checkBox;
  public themeData = themeSales;
}
