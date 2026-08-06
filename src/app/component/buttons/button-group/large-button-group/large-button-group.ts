import { Component, ChangeDetectionStrategy } from "@angular/core";

import { commongroupButton } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-large-button-group",
  templateUrl: "./large-button-group.html",
  styleUrls: ["./large-button-group.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class LargeButtonGroup {
  public largbuttongroup = commongroupButton;
}
