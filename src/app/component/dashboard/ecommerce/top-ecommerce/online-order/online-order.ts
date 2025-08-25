import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { OnlineOrderChart } from "../../../../../shared/data/dashboard/E-commerce/ecommerce-chart";

@Component({
  selector: "app-online-order",
  templateUrl: "./online-order.html",
  styleUrls: ["./online-order.scss"],
  imports: [NgApexchartsModule],
})
export class OnlineOrder {
  public OnlineOrderData = OnlineOrderChart;
}
