import { Component, ChangeDetectionStrategy } from "@angular/core";

import { outlineData } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-outline-custom-button-group",
  templateUrl: "./outline-custom-button-group.html",
  styleUrls: ["./outline-custom-button-group.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class OutlineCustomButtonGroup {
  public outlinebuttonData = outlineData;
}
