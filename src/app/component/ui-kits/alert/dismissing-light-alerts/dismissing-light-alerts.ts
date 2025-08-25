import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-dismissing-light-alerts",
  templateUrl: "./dismissing-light-alerts.html",
  styleUrls: ["./dismissing-light-alerts.scss"],
  imports: [NgClass, Feathericon],
})
export class DismissingLightAlerts {
  public alerts2: boolean = true;

  close2() {
    this.alerts2 = false;
  }
}
