import { Component, ChangeDetectionStrategy } from "@angular/core";

import { IconSwitch } from "../../../../../shared/data/forms/forms-widgets/switch";

@Component({
  selector: "app-icons-switch",
  templateUrl: "./icons-switch.html",
  styleUrls: ["./icons-switch.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class IconsSwitch {
  public iconsData = IconSwitch;
}
