import { Component } from "@angular/core";

import { commonAbsoluteCardData } from "../../../../shared/data/bonus-ui/creative-cards";

@Component({
  selector: "app-common-absolute-card",
  templateUrl: "./common-absolute-card.html",
  styleUrls: ["./common-absolute-card.scss"],
  imports: [],
})
export class CommonAbsoluteCard {
  public commonData = commonAbsoluteCardData;
}
