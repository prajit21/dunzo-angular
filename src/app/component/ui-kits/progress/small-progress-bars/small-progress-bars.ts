import { Component, ChangeDetectionStrategy } from "@angular/core";

import { SmallProgressbars } from "../../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-small-progress-bars",
  templateUrl: "./small-progress-bars.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./small-progress-bars.scss"],
})
export class SmallProgressBars {
  public smallProgressData = SmallProgressbars;
}
