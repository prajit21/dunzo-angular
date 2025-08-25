import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-total-product",
  templateUrl: "./total-product.html",
  styleUrls: ["./total-product.scss"],
  imports: [NgApexchartsModule],
})
export class TotalProduct {
  public TotalPorductChart = widgetchat.TotalProduct;
}
