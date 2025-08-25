import { Component } from "@angular/core";

import { CommonBorderStyle } from "./common-border-style/common-border-style";
import * as borderData from "../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-border-stryle",
  templateUrl: "./border-stryle.html",
  styleUrls: ["./border-stryle.scss"],
  imports: [CommonBorderStyle],
})
export class BorderStryle {
  public customborder = borderData.Customborder;
  public borderColor = borderData.colorBorders;
  public borderWiths = borderData.borderWith;
  public textColors = borderData.TextColor;
}
