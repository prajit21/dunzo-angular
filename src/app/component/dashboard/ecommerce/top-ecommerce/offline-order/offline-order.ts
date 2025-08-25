import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { OfflineOrderChart } from "../../../../../shared/data/dashboard/E-commerce/ecommerce-chart";

@Component({
  selector: "app-offline-order",
  templateUrl: "./offline-order.html",
  styleUrls: ["./offline-order.scss"],
  imports: [NgApexchartsModule],
})
export class OfflineOrder {
  public OfflineOrderData = OfflineOrderChart;
}
