import { Component } from "@angular/core";

import { TextsColors } from "../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-text-colors",
  templateUrl: "./text-colors.html",
  styleUrls: ["./text-colors.scss"],
  imports: [],
})
export class TextColors {
  public TextColorData = TextsColors;
}
