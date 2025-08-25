import { Component } from "@angular/core";

import { CommonProgressBar } from "./common-progress-bar/common-progress-bar";
import { CustomHeightProgressbars } from "./custom-height-progressbars/custom-height-progressbars";
import { CustomProgressBars } from "./custom-progress-bars/custom-progress-bars";
import { LargeProgressBars } from "./large-progress-bars/large-progress-bars";
import { MultipleBars } from "./multiple-bars/multiple-bars";
import { ProgressNumberSteps } from "./progress-number-steps/progress-number-steps";
import { SmallProgressBars } from "./small-progress-bars/small-progress-bars";
import * as data from "../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.html",
  styleUrls: ["./progress.scss"],
  imports: [
    CommonProgressBar,
    MultipleBars,
    ProgressNumberSteps,
    CustomProgressBars,
    SmallProgressBars,
    LargeProgressBars,
    CustomHeightProgressbars,
  ],
})
export class Progress {
  public basicData = data.basicProgress;
  public progressStripedData = data.ProgressBarsStriped;
  public progressAnimatedData = data.ProgressBarsAnimated;
}
