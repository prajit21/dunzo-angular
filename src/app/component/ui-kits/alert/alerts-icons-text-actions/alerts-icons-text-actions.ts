import { Component } from "@angular/core";

import * as data from "../../../../shared/data/ui-kits/alert/alert";

@Component({
  selector: "app-alerts-icons-text-actions",
  templateUrl: "./alerts-icons-text-actions.html",
  styleUrls: ["./alerts-icons-text-actions.scss"],
  imports: [],
})
export class AlertsIconsTextActions {
  public icontextData = data.IconandTextAlert;

  close(icontextitem: data.Icons) {
    this.icontextData.splice(this.icontextData.indexOf(icontextitem), 1);
  }
}
