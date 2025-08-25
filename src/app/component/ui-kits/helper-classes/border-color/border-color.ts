import { Component } from "@angular/core";

import { Bordercolors } from "../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-border-color",
  templateUrl: "./border-color.html",
  styleUrls: ["./border-color.scss"],
  imports: [],
})
export class BorderColor {
  public borderColorData = Bordercolors;
}
