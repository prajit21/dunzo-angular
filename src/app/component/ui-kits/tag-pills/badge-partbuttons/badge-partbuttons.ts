import { Component } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { BadgePartButtons } from "../../../../shared/data/ui-kits/tag-pills/tag-pills";

@Component({
  selector: "app-badge-partbuttons",
  templateUrl: "./badge-partbuttons.html",
  styleUrls: ["./badge-partbuttons.scss"],
  imports: [Feathericon],
})
export class BadgePartbuttons {
  public buttonspartData = BadgePartButtons;
}
