import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";

@Component({
  selector: "app-new-mail",
  templateUrl: "./new-mail.html",
  styleUrls: ["./new-mail.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, AngularEditorModule],
})
export class NewMail {
  public htmlContent = "";
}
