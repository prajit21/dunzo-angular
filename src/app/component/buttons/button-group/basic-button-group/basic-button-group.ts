import { Component, ChangeDetectionStrategy } from "@angular/core";

import { commongroupButton } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-basic-button-group",
  templateUrl: "./basic-button-group.html",
  styleUrls: ["./basic-button-group.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class BasicButtonGroup {
  public basicgropuData = commongroupButton;
}
