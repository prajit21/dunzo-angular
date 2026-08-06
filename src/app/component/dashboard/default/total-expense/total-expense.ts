import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { TotalExpenseChart } from "../../../../shared/data/dashboard/default-chart";

@Component({
  selector: "app-total-expense",
  templateUrl: "./total-expense.html",
  styleUrls: ["./total-expense.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgApexchartsModule],
})
export class TotalExpense {
  public expenseChart = TotalExpenseChart;
}
