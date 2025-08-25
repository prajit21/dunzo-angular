import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-cryptocurrency-prices",
  templateUrl: "./cryptocurrency-prices.html",
  styleUrls: ["./cryptocurrency-prices.scss"],
  imports: [NgApexchartsModule],
})
export class CryptocurrencyPrices {
  public CryptocurrencyPricesChart = widgetchat.CryptocurrencyPricesChart;
}
