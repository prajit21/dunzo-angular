import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-centered-modal",
  templateUrl: "./centered-modal.html",
  styleUrls: ["./centered-modal.scss"],
  imports: [],
})
export class CenteredModal {
  private modalService = inject(NgbModal);

  CenteredModal(CenteredContent: TemplateRef<NgbModal>) {
    this.modalService.open(CenteredContent, { centered: true });
  }
}
