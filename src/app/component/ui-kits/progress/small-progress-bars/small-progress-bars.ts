import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

import { SmallProgressbars } from "../../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-small-progress-bars",
  templateUrl: "./small-progress-bars.html",
  styleUrls: ["./small-progress-bars.scss"],
  imports: [NgStyle],
})
export class SmallProgressBars {
  public smallProgressData = SmallProgressbars;
}
