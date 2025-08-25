import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-total-project",
  templateUrl: "./total-project.html",
  styleUrls: ["./total-project.scss"],
  imports: [NgApexchartsModule],
})
export class TotalProject {
  public TotalProjectChart = widgetchat.TotalProject;
}
