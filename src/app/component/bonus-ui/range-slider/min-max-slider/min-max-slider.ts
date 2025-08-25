import { Component } from "@angular/core";

import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-min-max-slider",
  templateUrl: "./min-max-slider.html",
  styleUrls: ["./min-max-slider.scss"],
  imports: [NgxSliderModule],
})
export class MinMaxSlider {
  public value2: number = 550;
  public maxvalue: number = 100;

  options: Options = {
    floor: 100,
    ceil: 1000,
  };
}
