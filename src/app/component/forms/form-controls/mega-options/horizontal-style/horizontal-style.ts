import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HorizontalStylel } from "../../../../../shared/data/forms/form-controls/mega-options";

@Component({
  selector: "app-horizontal-style",
  templateUrl: "./horizontal-style.html",
  styleUrls: ["./horizontal-style.scss"],
  imports: [FormsModule],
})
export class HorizontalStyle {
  public horizontalStyleData = HorizontalStylel;
}
