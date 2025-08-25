import { Component } from "@angular/core";

import { RightRibbons } from "../../../../shared/data/bonus-ui/ribbons";

@Component({
  selector: "app-variations-right-ribbons",
  templateUrl: "./variations-right-ribbons.html",
  styleUrls: ["./variations-right-ribbons.scss"],
  imports: [],
})
export class VariationsRightRibbons {
  public rightRibbonsData = RightRibbons;
}
