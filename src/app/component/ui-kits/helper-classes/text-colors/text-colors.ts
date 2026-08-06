import { Component, ChangeDetectionStrategy } from "@angular/core";

import { TextsColors } from "../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-text-colors",
  templateUrl: "./text-colors.html",
  styleUrls: ["./text-colors.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class TextColors {
  public TextColorData = TextsColors;
}
