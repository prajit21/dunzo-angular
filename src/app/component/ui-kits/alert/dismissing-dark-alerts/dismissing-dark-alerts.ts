import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-dismissing-dark-alerts",
  templateUrl: "./dismissing-dark-alerts.html",
  styleUrls: ["./dismissing-dark-alerts.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass, Feathericon],
})
export class DismissingDarkAlerts {
  public alerts: boolean = true;

  close() {
    this.alerts = false;
  }
}
