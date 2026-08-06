import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { OnlineOrderChart } from "../../../../../shared/data/dashboard/E-commerce/ecommerce-chart";

@Component({
  selector: "app-online-order",
  templateUrl: "./online-order.html",
  styleUrls: ["./online-order.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgApexchartsModule],
})
export class OnlineOrder {
  public OnlineOrderData = OnlineOrderChart;
}
