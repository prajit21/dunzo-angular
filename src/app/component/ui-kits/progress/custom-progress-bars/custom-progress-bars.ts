import { Component } from "@angular/core";

import { CustomProgressbars } from "../../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-custom-progress-bars",
  templateUrl: "./custom-progress-bars.html",
  styleUrls: ["./custom-progress-bars.scss"],
})
export class CustomProgressBars {
  public customprogressData = CustomProgressbars;
}
