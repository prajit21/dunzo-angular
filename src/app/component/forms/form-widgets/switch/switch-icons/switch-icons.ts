import { Component, ChangeDetectionStrategy } from "@angular/core";

import { iconsiwtchSizing } from "../../../../../shared/data/forms/forms-widgets/switch";

@Component({
  selector: "app-switch-icons",
  templateUrl: "./switch-icons.html",
  styleUrls: ["./switch-icons.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class SwitchIcons {
  public iconsizeingData = iconsiwtchSizing;
}
