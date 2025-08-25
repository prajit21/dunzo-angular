import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-add-label",
  templateUrl: "./add-label.html",
  styleUrls: ["./add-label.scss"],
  imports: [FormsModule],
})
export class AddLabel {
  activeModal = inject(NgbActiveModal);
}
