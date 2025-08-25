import { Component } from "@angular/core";

import { NgxSliderModule, Options } from "@angular-slider/ngx-slider";

@Component({
  selector: "app-disabled",
  templateUrl: "./disabled.html",
  styleUrls: ["./disabled.scss"],
  imports: [NgxSliderModule],
})
export class Disabled {
  public value3: number = 550;
  options4: Options = {
    floor: 100,
    ceil: 1000,
    disabled: true,
  };
}
