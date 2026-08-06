import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CommonOutline } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-outline-button-group",
  templateUrl: "./outline-button-group.html",
  styleUrls: ["./outline-button-group.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class OutlineButtonGroup {
  public outlinedata = CommonOutline;
}
