import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Ratios } from "../../../../shared/data/ui-kits/avatar/avavtar";

@Component({
  selector: "app-ratio",
  templateUrl: "./ratio.html",
  styleUrls: ["./ratio.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class Ratio {
  public ratioData = Ratios;
}
