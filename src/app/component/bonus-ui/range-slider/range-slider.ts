import { Component } from "@angular/core";

import { CustomValues } from "./custom-values/custom-values";
import { DefaultRangeSlider } from "./default-range-slider/default-range-slider";
import { Disabled } from "./disabled/disabled";
import { MinMaxSlider } from "./min-max-slider/min-max-slider";
import { PrettifyNumber } from "./prettify-number/prettify-number";

@Component({
  selector: "app-range-slider",
  templateUrl: "./range-slider.html",
  styleUrls: ["./range-slider.scss"],
  imports: [
    DefaultRangeSlider,
    MinMaxSlider,
    CustomValues,
    PrettifyNumber,
    Disabled,
  ],
})
export class RangeSlider {}
