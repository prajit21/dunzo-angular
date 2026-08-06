import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-uses",
  templateUrl: "./uses.html",
  styleUrls: ["./uses.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgApexchartsModule],
})
export class Uses {
  public Uses = widgetchat.UsesChart;
}
