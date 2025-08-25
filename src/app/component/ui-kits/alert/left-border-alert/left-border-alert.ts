import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-left-border-alert",
  templateUrl: "./left-border-alert.html",
  styleUrls: ["./left-border-alert.scss"],
  imports: [NgClass, Feathericon],
})
export class LeftBorderAlert {
  public alerts3: boolean = true;

  close3() {
    this.alerts3 = false;
  }
}
