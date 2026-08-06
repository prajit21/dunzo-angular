import { Component, ChangeDetectionStrategy } from "@angular/core";

import { checkbox } from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-default-checkbox",
  templateUrl: "./default-checkbox.html",
  styleUrls: ["./default-checkbox.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class DefaultCheckbox {
  public checkboxData = checkbox;
}
