import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-default-range-slider",
  templateUrl: "./default-range-slider.html",
  styleUrls: ["./default-range-slider.scss"],
  imports: [FormsModule, NgxSliderModule],
})
export class DefaultRangeSlider {
  public value: number = 550;

  options: Options = {
    floor: 100,
    ceil: 1000,
  };
}
