import { Component } from "@angular/core";

import { customSwitch } from "../../../../../shared/data/forms/forms-widgets/switch";

@Component({
  selector: "app-custom-switch",
  templateUrl: "./custom-switch.html",
  styleUrls: ["./custom-switch.scss"],
  imports: [],
})
export class CustomSwitch {
  public customData = customSwitch;
}
