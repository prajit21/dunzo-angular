import { Component } from "@angular/core";

import { roundedtouchspin } from "../../../../../shared/data/forms/forms-widgets/touchspin";

@Component({
  selector: "app-rounded-touchspin",
  templateUrl: "./rounded-touchspin.html",
  styleUrls: ["./rounded-touchspin.scss"],
  imports: [],
})
export class RoundedTouchspin {
  public roundedData = roundedtouchspin;

  decrement(i: number) {
    if (this.roundedData[i].value > 0) {
      this.roundedData[i].value -= 1;
    }
  }
  increment(i: number) {
    this.roundedData[i].value += 1;
  }
}
