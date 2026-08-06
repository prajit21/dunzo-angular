import { Component, ChangeDetectionStrategy } from "@angular/core";

import { defaultswitch } from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-default-switches",
  templateUrl: "./default-switches.html",
  styleUrls: ["./default-switches.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class DefaultSwitches {
  public switches = defaultswitch;
}
