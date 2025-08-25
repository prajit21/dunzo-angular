import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-compose-email",
  templateUrl: "./compose-email.html",
  styleUrls: ["./compose-email.scss"],
  imports: [FormsModule, AngularEditorModule],
})
export class ComposeEmail {
  activeModal = inject(NgbActiveModal);

  public isShow: boolean = false;
  public isShow1: boolean = false;
  public htmlContent = "";
}
