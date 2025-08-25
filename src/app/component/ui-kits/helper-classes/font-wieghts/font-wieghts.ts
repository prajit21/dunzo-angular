import { Component } from "@angular/core";

import { FontWight } from "../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-font-wieghts",
  templateUrl: "./font-wieghts.html",
  styleUrls: ["./font-wieghts.scss"],
  imports: [],
})
export class FontWieghts {
  public fontWeightData = FontWight;
}
