import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-stock-market",
  templateUrl: "./stock-market.html",
  styleUrls: ["./stock-market.scss"],
  imports: [NgApexchartsModule],
})
export class StockMarket {
  public StockMarketChart = widgetchat.StockMarketChart;
}
