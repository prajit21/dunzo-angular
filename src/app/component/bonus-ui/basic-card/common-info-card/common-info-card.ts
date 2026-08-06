import { Component, ChangeDetectionStrategy } from "@angular/core";

import { commonInfoColorCardData } from "../../../../shared/data/bonus-ui/basic-card";

@Component({
  selector: "app-common-info-card",
  templateUrl: "./common-info-card.html",
  styleUrls: ["./common-info-card.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class CommonInfoCard {
  public basicData = commonInfoColorCardData;
}
