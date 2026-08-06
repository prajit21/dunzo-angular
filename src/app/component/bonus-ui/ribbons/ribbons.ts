import { Component, ChangeDetectionStrategy } from "@angular/core";

import { VariationsLeftRibbons } from "./variations-left-ribbons/variations-left-ribbons";
import { VariationsRightRibbons } from "./variations-right-ribbons/variations-right-ribbons";

@Component({
  selector: "app-ribbons",
  templateUrl: "./ribbons.html",
  styleUrls: ["./ribbons.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [VariationsLeftRibbons, VariationsRightRibbons],
})
export class Ribbons {}
