import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

import { customheightprogress } from "../../../../shared/data/ui-kits/progressbar/progress";

@Component({
  selector: "app-custom-height-progressbars",
  templateUrl: "./custom-height-progressbars.html",
  styleUrls: ["./custom-height-progressbars.scss"],
  imports: [NgStyle],
})
export class CustomHeightProgressbars {
  public customheightData = customheightprogress;
}
