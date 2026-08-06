import { Component, ChangeDetectionStrategy } from "@angular/core";

import { LeftRibbons } from "../../../../shared/data/bonus-ui/ribbons";

@Component({
  selector: "app-variations-left-ribbons",
  templateUrl: "./variations-left-ribbons.html",
  styleUrls: ["./variations-left-ribbons.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class VariationsLeftRibbons {
  public leftRibbonsData = LeftRibbons;
}
