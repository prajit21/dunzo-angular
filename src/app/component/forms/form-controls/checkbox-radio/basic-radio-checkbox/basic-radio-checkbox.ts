import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import {
  basicCheckbox,
  simpleRadio,
} from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-basic-radio-checkbox",
  templateUrl: "./basic-radio-checkbox.html",
  styleUrls: ["./basic-radio-checkbox.scss"],
  imports: [FormsModule],
})
export class BasicRadioCheckbox {
  public basicItem = basicCheckbox;
  public radioData = simpleRadio;
}
