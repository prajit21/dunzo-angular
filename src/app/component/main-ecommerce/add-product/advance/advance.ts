import { NgClass } from "@angular/common";
import { Component, output } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AdditionalOptions } from "./additional-options/additional-options";
import { Inventory } from "./inventory/inventory";
import { Shipping } from "./shipping/shipping";

@Component({
  selector: "app-advance",
  templateUrl: "./advance.html",
  styleUrls: ["./advance.scss"],
  imports: [NgClass, FormsModule, Inventory, AdditionalOptions, Shipping],
})
export class Advance {
  readonly activeSteps = output<number>();

  public activeStep: number = 5;
  public validate: boolean;

  public openTab: string = "Inventory";

  public tabbed(val: string) {
    this.openTab = val;
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }
}
