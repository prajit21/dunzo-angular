import { Component } from "@angular/core";

import { StatusIndicators } from "../../../../shared/data/ui-kits/avatar/avavtar";

@Component({
  selector: "app-status-indicator",
  templateUrl: "./status-indicator.html",
  styleUrls: ["./status-indicator.scss"],
  imports: [],
})
export class StatusIndicator {
  public statusindicatorData = StatusIndicators;
}
