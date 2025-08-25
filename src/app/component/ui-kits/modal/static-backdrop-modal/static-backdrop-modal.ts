import { Component, TemplateRef, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-static-backdrop-modal",
  templateUrl: "./static-backdrop-modal.html",
  styleUrls: ["./static-backdrop-modal.scss"],
  imports: [FormsModule],
})
export class StaticBackdropModal {
  private modalService = inject(NgbModal);

  StaticBackdropModal(StaticBackdropContent: TemplateRef<NgbModal>) {
    this.modalService.open(StaticBackdropContent, { centered: true });
  }
}
