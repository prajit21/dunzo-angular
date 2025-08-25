import { Component } from "@angular/core";

import { checkbox } from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-default-checkbox",
  templateUrl: "./default-checkbox.html",
  styleUrls: ["./default-checkbox.scss"],
  imports: [],
})
export class DefaultCheckbox {
  public checkboxData = checkbox;
}
