import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-widget-sales-overview",
  templateUrl: "./widget-sales-overview.html",
  styleUrls: ["./widget-sales-overview.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgApexchartsModule],
})
export class WidgetSalesOverview {
  public SaleOverViewChart = widgetchat.SaleOverview;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}
