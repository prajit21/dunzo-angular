import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-new-categories",
  templateUrl: "./new-categories.html",
  styleUrls: ["./new-categories.scss"],
  imports: [AngularEditorModule, FormsModule],
})
export class NewCategories {
  activeModal = inject(NgbActiveModal);

  public htmlContent = "";
}
