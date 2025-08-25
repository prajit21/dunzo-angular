import { Component } from "@angular/core";

import { CommonInfoCard } from "./common-info-card/common-info-card";
import { DarkCard } from "./dark-card/dark-card";
import { FlatCard } from "./flat-card/flat-card";
import { IconHeading } from "./icon-heading/icon-heading";
import { SimpleCard } from "./simple-card/simple-card";
import { WithoutShadowCard } from "./without-shadow-card/without-shadow-card";

@Component({
  selector: "app-basic-card",
  templateUrl: "./basic-card.html",
  styleUrls: ["./basic-card.scss"],
  imports: [
    SimpleCard,
    FlatCard,
    WithoutShadowCard,
    IconHeading,
    DarkCard,
    CommonInfoCard,
  ],
})
export class BasicCard {}
