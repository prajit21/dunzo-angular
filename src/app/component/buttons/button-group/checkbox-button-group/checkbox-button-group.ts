import { Component, ChangeDetectionStrategy } from "@angular/core";

import { checkboxData } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-checkbox-button-group",
  templateUrl: "./checkbox-button-group.html",
  styleUrls: ["./checkbox-button-group.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class CheckboxButtonGroup {
  public checkBox = checkboxData;
}
