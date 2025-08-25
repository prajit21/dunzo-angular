import { Component } from "@angular/core";

import { commongroupButton } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-edge-button-group",
  templateUrl: "./edge-button-group.html",
  styleUrls: ["./edge-button-group.scss"],
  imports: [],
})
export class EdgeButtonGroup {
  public edgegroupData = commongroupButton;
}
