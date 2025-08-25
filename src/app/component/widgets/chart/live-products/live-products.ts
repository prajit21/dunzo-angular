import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-live-products",
  templateUrl: "./live-products.html",
  styleUrls: ["./live-products.scss"],
  imports: [NgApexchartsModule],
})
export class LiveProducts {
  public LiveProduct = widgetchat.LiveProductsChart;
}
