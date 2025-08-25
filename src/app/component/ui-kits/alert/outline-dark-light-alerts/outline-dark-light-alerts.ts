import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import * as data from "../../../../shared/data/ui-kits/alert/alert";

@Component({
  selector: "app-outline-dark-light-alerts",
  templateUrl: "./outline-dark-light-alerts.html",
  styleUrls: ["./outline-dark-light-alerts.scss"],
  imports: [Feathericon],
})
export class OutlineDarkLightAlerts {
  public outlinealertData = data.OutlineDarkAlert;

  close(outlineitem: data.Alert) {
    this.outlinealertData.splice(this.outlinealertData.indexOf(outlineitem), 1);
  }
}
