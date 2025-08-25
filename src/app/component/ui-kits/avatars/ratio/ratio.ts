import { Component } from "@angular/core";

import { Ratios } from "../../../../shared/data/ui-kits/avatar/avavtar";

@Component({
  selector: "app-ratio",
  templateUrl: "./ratio.html",
  styleUrls: ["./ratio.scss"],
  imports: [],
})
export class Ratio {
  public ratioData = Ratios;
}
