import { Component, ChangeDetectionStrategy } from "@angular/core";

import { UncheckedSwitchs } from "../../../../../shared/data/forms/forms-widgets/switch";

@Component({
  selector: "app-unchecked-switch",
  templateUrl: "./unchecked-switch.html",
  styleUrls: ["./unchecked-switch.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class UncheckedSwitch {
  public unchakedData = UncheckedSwitchs;
}
