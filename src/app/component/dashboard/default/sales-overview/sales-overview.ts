import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { SalesOverviwe } from "../../../../shared/data/dashboard/default-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-sales-overview",
  templateUrl: "./sales-overview.html",
  styleUrls: ["./sales-overview.scss"],
  imports: [ClickOutsideDirective, NgApexchartsModule],
})
export class SalesOverview {
  public SalesoverViwechart = SalesOverviwe;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
