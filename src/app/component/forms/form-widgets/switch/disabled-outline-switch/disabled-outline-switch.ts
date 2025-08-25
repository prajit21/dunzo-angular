import { Component } from "@angular/core";

import { Disabledoutlineswitch } from "../../../../../shared/data/forms/forms-widgets/switch";

@Component({
  selector: "app-disabled-outline-switch",
  templateUrl: "./disabled-outline-switch.html",
  styleUrls: ["./disabled-outline-switch.scss"],
  imports: [],
})
export class DisabledOutlineSwitch {
  public disableoutline = Disabledoutlineswitch;
}
