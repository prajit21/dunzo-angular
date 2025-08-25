import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { inlineStyle } from "../../../../../shared/data/forms/form-controls/mega-options";

@Component({
  selector: "app-inline-style",
  templateUrl: "./inline-style.html",
  styleUrls: ["./inline-style.scss"],
  imports: [FormsModule],
})
export class InlineStyle {
  public inlineData = inlineStyle;
}
