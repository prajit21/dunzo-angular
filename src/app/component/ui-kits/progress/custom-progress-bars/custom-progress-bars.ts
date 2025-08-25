import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

import { CustomProgressbars } from "../../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-custom-progress-bars",
  templateUrl: "./custom-progress-bars.html",
  styleUrls: ["./custom-progress-bars.scss"],
  imports: [NgStyle],
})
export class CustomProgressBars {
  public customprogressData = CustomProgressbars;
}
