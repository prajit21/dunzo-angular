import { Component } from "@angular/core";

import { BackgroundColors } from "./background-colors/background-colors";
import { BorderColor } from "./border-color/border-color";
import { BorderStryle } from "./border-stryle/border-stryle";
import { BordersDisplays } from "./borders-displays/borders-displays";
import { FontSizes } from "./font-sizes/font-sizes";
import { FontStyle } from "./font-style/font-style";
import { FontWieghts } from "./font-wieghts/font-wieghts";
import { ImagesSizes } from "./images-sizes/images-sizes";
import { TextColors } from "./text-colors/text-colors";

@Component({
  selector: "app-helper-classes",
  templateUrl: "./helper-classes.html",
  styleUrls: ["./helper-classes.scss"],
  imports: [
    BorderStryle,
    BordersDisplays,
    BackgroundColors,
    BorderColor,
    ImagesSizes,
    FontStyle,
    FontWieghts,
    TextColors,
    FontSizes,
  ],
})
export class HelperClasses {}
