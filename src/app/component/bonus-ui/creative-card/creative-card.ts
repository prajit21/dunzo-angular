import { Component } from "@angular/core";

import { BorderPrimaryState } from "./border-primary-state/border-primary-state";
import { BorderSecondaryState } from "./border-secondary-state/border-secondary-state";
import { BorderWarningState } from "./border-warning-state/border-warning-state";
import { CommonAbsoluteCard } from "./common-absolute-card/common-absolute-card";
import { CommonBorderCard } from "./common-border-card/common-border-card";

@Component({
  selector: "app-creative-card",
  templateUrl: "./creative-card.html",
  styleUrls: ["./creative-card.scss"],
  imports: [
    CommonBorderCard,
    BorderPrimaryState,
    BorderWarningState,
    BorderSecondaryState,
    CommonAbsoluteCard,
  ],
})
export class CreativeCard {}
