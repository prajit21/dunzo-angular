import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-order-status",
  templateUrl: "./order-status.html",
  styleUrls: ["./order-status.scss"],
  imports: [NgApexchartsModule],
})
export class OrderStatus {
  public OrderStatusChart = widgetchat.OrderStatusChart;
}
