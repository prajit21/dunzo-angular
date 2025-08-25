import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-below-xxl-modal",
  templateUrl: "./fullscreen-below-xxl-modal.html",
  styleUrls: ["./fullscreen-below-xxl-modal.scss"],
  imports: [Feathericon],
})
export class FullscreenBelowXxlModal {
  private modalService = inject(NgbModal);

  FullscreenbelowXxlModal(FullscreenbelowXxlContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowXxlContent, { size: "xxl" });
  }
}
