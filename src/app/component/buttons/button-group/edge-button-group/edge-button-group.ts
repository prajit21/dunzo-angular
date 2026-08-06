import { Component, ChangeDetectionStrategy } from "@angular/core";

import { commongroupButton } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-edge-button-group",
  templateUrl: "./edge-button-group.html",
  styleUrls: ["./edge-button-group.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class EdgeButtonGroup {
  public edgegroupData = commongroupButton;
}
