import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import * as widgetchat from "../../../../shared/data/widget/chart/chart";

@Component({
  selector: "app-crypto-annotations",
  templateUrl: "./crypto-annotations.html",
  styleUrls: ["./crypto-annotations.scss"],
  imports: [NgApexchartsModule],
})
export class CryptoAnnotations {
  public CryptoAnnotationsChart = widgetchat.CryptoAnnotationsChart;
}
