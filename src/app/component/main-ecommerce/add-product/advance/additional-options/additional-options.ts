import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { TagInputModule } from "ngx-chips";

@Component({
  selector: "app-additional-options",
  templateUrl: "./additional-options.html",
  styleUrls: ["./additional-options.scss"],
  imports: [FormsModule, AngularEditorModule, TagInputModule],
})
export class AdditionalOptions {
  public htmlContent = "";
  public items = [];
}
