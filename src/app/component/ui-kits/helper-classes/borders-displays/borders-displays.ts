import { Component } from "@angular/core";

import { CommonBorderDisplays } from "./common-border-displays/common-border-displays";
import * as borderData from "../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-borders-displays",
  templateUrl: "./borders-displays.html",
  styleUrls: ["./borders-displays.scss"],
  imports: [CommonBorderDisplays],
})
export class BordersDisplays {
  public Additiveborder = borderData.AdditiveBorderData;
  public SubtractiveborderData = borderData.Subtractiveborder;
  public AdditiveRadiusData = borderData.AdditiveRadius;
}
