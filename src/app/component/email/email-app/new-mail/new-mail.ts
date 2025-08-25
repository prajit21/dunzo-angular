import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";

@Component({
  selector: "app-new-mail",
  templateUrl: "./new-mail.html",
  styleUrls: ["./new-mail.scss"],
  imports: [FormsModule, AngularEditorModule],
})
export class NewMail {
  public htmlContent = "";
}
