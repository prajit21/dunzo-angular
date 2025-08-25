import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-profile-modal",
  templateUrl: "./profile-modal.html",
  styleUrls: ["./profile-modal.scss"],
  imports: [],
})
export class ProfileModal {
  private modalService = inject(NgbModal);

  profilemodal(profilecontant: TemplateRef<NgbModal>) {
    this.modalService.open(profilecontant, { centered: true });
  }
}
