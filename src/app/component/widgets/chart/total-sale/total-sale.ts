import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-total-sale",
  templateUrl: "./total-sale.html",
  styleUrls: ["./total-sale.scss"],
  imports: [NgApexchartsModule],
})
export class TotalSale {
  public TotalSaleChart = widgetchat.TotalSale;
}
