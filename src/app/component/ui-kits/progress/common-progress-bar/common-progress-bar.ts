import { NgStyle } from "@angular/common";
import { Component, input } from "@angular/core";

import { progress } from "../../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-common-progress-bar",
  templateUrl: "./common-progress-bar.html",
  styleUrls: ["./common-progress-bar.scss"],
  imports: [NgStyle],
})
export class CommonProgressBar {
  readonly data = input<progress[]>();
}
