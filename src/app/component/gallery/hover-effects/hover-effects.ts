import { Component } from "@angular/core";

import * as Data from "../../../shared/data/gallery/hover";

@Component({
  selector: "app-hover-effects",
  templateUrl: "./hover-effects.html",
  styleUrls: ["./hover-effects.scss"],
  imports: [],
})
export class HoverEffects {
  public imgData = Data.imgData;
  public hoverData = Data.hoverData;
}
