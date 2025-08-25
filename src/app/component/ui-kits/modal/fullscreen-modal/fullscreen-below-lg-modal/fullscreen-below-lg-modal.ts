import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-below-lg-modal",
  templateUrl: "./fullscreen-below-lg-modal.html",
  styleUrls: ["./fullscreen-below-lg-modal.scss"],
  imports: [Feathericon],
})
export class FullscreenBelowLgModal {
  private modalService = inject(NgbModal);

  FullscreenbelowLgModal(FullscreenbelowLgContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowLgContent, { size: "lg" });
  }
}
