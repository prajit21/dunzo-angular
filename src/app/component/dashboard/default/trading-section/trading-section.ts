import { Component, ChangeDetectionStrategy } from "@angular/core";

import { tradingData } from "../../../../shared/data/dashboard/default-data";

@Component({
  selector: "app-trading-section",
  templateUrl: "./trading-section.html",
  styleUrls: ["./trading-section.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class TradingSection {
  public trading = tradingData;
}
