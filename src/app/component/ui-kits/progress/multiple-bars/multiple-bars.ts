import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

import { Multiplebars } from "../../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-multiple-bars",
  templateUrl: "./multiple-bars.html",
  styleUrls: ["./multiple-bars.scss"],
  imports: [NgStyle],
})
export class MultipleBars {
  public mutiPalbarData = Multiplebars;
}
