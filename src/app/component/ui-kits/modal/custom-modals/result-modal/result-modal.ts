import { Component, TemplateRef, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-result-modal",
  templateUrl: "./result-modal.html",
  styleUrls: ["./result-modal.scss"],
  imports: [FormsModule],
})
export class ResultModal {
  private modalService = inject(NgbModal);

  ResultModal(resultcontant: TemplateRef<NgbModal>) {
    this.modalService.open(resultcontant, { centered: true });
  }
}
