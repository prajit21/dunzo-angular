import { Component } from "@angular/core";

import { FontStyles } from "../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-font-style",
  templateUrl: "./font-style.html",
  styleUrls: ["./font-style.scss"],
  imports: [],
})
export class FontStyle {
  public FontstyleData = FontStyles;
}
