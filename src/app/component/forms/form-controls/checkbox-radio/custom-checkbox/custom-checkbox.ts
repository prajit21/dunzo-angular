import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {
  BorderCheckbox,
  IconsCheckbox,
  FilledCheckbox,
} from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-custom-checkbox",
  templateUrl: "./custom-checkbox.html",
  styleUrls: ["./custom-checkbox.scss"],
  imports: [FormsModule],
})
export class CustomCheckbox {
  public borders = BorderCheckbox;
  public icons = IconsCheckbox;
  public filled = FilledCheckbox;
}
