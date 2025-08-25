import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-dismissing-dark-alerts",
  templateUrl: "./dismissing-dark-alerts.html",
  styleUrls: ["./dismissing-dark-alerts.scss"],
  imports: [NgClass, Feathericon],
})
export class DismissingDarkAlerts {
  public alerts: boolean = true;

  close() {
    this.alerts = false;
  }
}
