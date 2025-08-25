import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

import { LargeProgressbars } from "../../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-large-progress-bars",
  templateUrl: "./large-progress-bars.html",
  styleUrls: ["./large-progress-bars.scss"],
  imports: [NgStyle],
})
export class LargeProgressBars {
  public largeProgressData = LargeProgressbars;
}
