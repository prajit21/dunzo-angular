import { Component } from "@angular/core";

import { commonInfoColorCardData } from "../../../../shared/data/bonus-ui/basic-card";

@Component({
  selector: "app-common-info-card",
  templateUrl: "./common-info-card.html",
  styleUrls: ["./common-info-card.scss"],
  imports: [],
})
export class CommonInfoCard {
  public basicData = commonInfoColorCardData;
}
