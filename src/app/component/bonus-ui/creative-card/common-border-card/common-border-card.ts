import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { commonBorderPositionCardData } from "../../../../shared/data/bonus-ui/creative-cards";

@Component({
  selector: "app-common-border-card",
  templateUrl: "./common-border-card.html",
  styleUrls: ["./common-border-card.scss"],
  imports: [FormsModule],
})
export class CommonBorderCard {
  public Data = commonBorderPositionCardData;
}
