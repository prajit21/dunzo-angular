import { Component } from "@angular/core";

import { outlinedtouchspin } from "../../../../../shared/data/forms/forms-widgets/touchspin";

@Component({
  selector: "app-outlined-touchspin",
  templateUrl: "./outlined-touchspin.html",
  styleUrls: ["./outlined-touchspin.scss"],
  imports: [],
})
export class OutlinedTouchspin {
  public OutlinedData = outlinedtouchspin;

  decrement(i: number) {
    if (this.OutlinedData[i].value > 0) {
      this.OutlinedData[i].value -= 1;
    }
  }
  increment(i: number) {
    this.OutlinedData[i].value += 1;
  }
}
