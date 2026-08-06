import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { VerticalStylel } from "../../../../../shared/data/forms/form-controls/mega-options";

@Component({
  selector: "app-vertical-style",
  templateUrl: "./vertical-style.html",
  styleUrls: ["./vertical-style.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class VerticalStyle {
  public verticalstyleData = VerticalStylel;
}
