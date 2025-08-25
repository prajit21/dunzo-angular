import { Component } from "@angular/core";

import { switchSizeing } from "../../../../../shared/data/forms/forms-widgets/switch";

@Component({
  selector: "app-switch-sizing",
  templateUrl: "./switch-sizing.html",
  styleUrls: ["./switch-sizing.scss"],
  imports: [],
})
export class SwitchSizing {
  public sizeingData = switchSizeing;
}
