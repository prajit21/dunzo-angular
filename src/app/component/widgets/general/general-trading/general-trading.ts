import { SlicePipe } from "@angular/common";
import { Component } from "@angular/core";

import { tradingData } from "../../../../shared/data/dashboard/default-data";

@Component({
  selector: "app-general-trading",
  templateUrl: "./general-trading.html",
  styleUrls: ["./general-trading.scss"],
  imports: [SlicePipe],
})
export class GeneralTrading {
  public trading = tradingData;
}
