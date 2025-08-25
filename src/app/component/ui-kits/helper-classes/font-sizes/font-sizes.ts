import { Component } from "@angular/core";

import { FontSize } from "../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-font-sizes",
  templateUrl: "./font-sizes.html",
  styleUrls: ["./font-sizes.scss"],
  imports: [],
})
export class FontSizes {
  public fonstSizeData = FontSize;
}
