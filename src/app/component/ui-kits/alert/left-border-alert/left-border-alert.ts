import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-left-border-alert",
  templateUrl: "./left-border-alert.html",
  styleUrls: ["./left-border-alert.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass, Feathericon],
})
export class LeftBorderAlert {
  public alerts3: boolean = true;

  close3() {
    this.alerts3 = false;
  }
}
