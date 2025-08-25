import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { NgApexchartsModule } from "ng-apexcharts";

import { budget } from "../../../../shared/data/dashboard/project/project";
import { budgetChart } from "../../../../shared/data/dashboard/project/project-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-budget",
  templateUrl: "./budget.html",
  styleUrls: ["./budget.scss"],
  imports: [ClickOutsideDirective, RouterLink, NgApexchartsModule],
})
export class Budget {
  public budgetData = budget;
  public budgetChartData = budgetChart;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
