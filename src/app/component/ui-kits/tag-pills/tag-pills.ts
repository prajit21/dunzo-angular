import { Component } from "@angular/core";

import { BadgeHedingse } from "./badge-hedingse/badge-hedingse";
import { BadgePartbuttons } from "./badge-partbuttons/badge-partbuttons";
import { CommonBedgePills } from "./common-bedge-pills/common-bedge-pills";
import * as data from "../../../shared/data/ui-kits/tag-pills/tag-pills";

@Component({
  selector: "app-tag-pills",
  templateUrl: "./tag-pills.html",
  styleUrls: ["./tag-pills.scss"],
  imports: [CommonBedgePills, BadgeHedingse, BadgePartbuttons],
})
export class TagPills {
  public BadgesData = data.buttons;
  public PillsData = data.pills;
  public NumberBadgeData = data.NumberBadge;
  public NumberPillsData = data.NumberPillstag;
  public IconBadeData = data.iconbadge;
  public IconpillsData = data.iconpills;
}
