import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-toggle-between-modals",
  templateUrl: "./toggle-between-modals.html",
  styleUrls: ["./toggle-between-modals.scss"],
  imports: [],
})
export class ToggleBetweenModals {
  private modalService = inject(NgbModal);

  public modalRef1: NgbModalRef;

  togglefristmodal(togglefristcontent: TemplateRef<NgbModal>) {
    this.modalRef1 = this.modalService.open(togglefristcontent, {
      centered: true,
    });
  }

  togglesecoundmodal(togglesecoundcontent: TemplateRef<NgbModal>) {
    this.modalService.open(togglesecoundcontent, { centered: true });
    this.modalRef1.dismiss();
  }
}
