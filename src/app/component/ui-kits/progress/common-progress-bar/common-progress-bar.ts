import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { progress } from "../../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-common-progress-bar",
  templateUrl: "./common-progress-bar.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["./common-progress-bar.scss"],
})
export class CommonProgressBar {
  readonly data = input<progress[]>();
}
