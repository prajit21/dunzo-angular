import { Component, ChangeDetectionStrategy } from "@angular/core";

import { StatusIndicators } from "../../../../shared/data/ui-kits/avatar/avavtar";

@Component({
  selector: "app-status-indicator",
  templateUrl: "./status-indicator.html",
  styleUrls: ["./status-indicator.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class StatusIndicator {
  public statusindicatorData = StatusIndicators;
}
