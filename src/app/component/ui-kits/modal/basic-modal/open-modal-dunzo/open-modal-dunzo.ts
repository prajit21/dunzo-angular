import { NgClass } from "@angular/common";
import { Component, TemplateRef, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-open-modal-dunzo",
  templateUrl: "./open-modal-dunzo.html",
  styleUrls: ["./open-modal-dunzo.scss"],
  imports: [FormsModule, NgClass],
})
export class OpenModalDunzo {
  private modalService = inject(NgbModal);

  public validate = false;

  public submit() {
    this.validate = !this.validate;
    this.validate = true;
  }

  OpenModal(openmodal: TemplateRef<NgbModal>) {
    this.modalService.open(openmodal);
  }
}
