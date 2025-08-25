import { Component } from "@angular/core";

import { bordericons } from "../../../../../shared/data/forms/forms-widgets/switch";

@Component({
  selector: "app-borders-with-icons",
  templateUrl: "./borders-with-icons.html",
  styleUrls: ["./borders-with-icons.scss"],
  imports: [],
})
export class BordersWithIcons {
  public borderData = bordericons;
}
