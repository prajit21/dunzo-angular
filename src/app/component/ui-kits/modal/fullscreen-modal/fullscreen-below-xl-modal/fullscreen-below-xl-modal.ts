import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-below-xl-modal",
  templateUrl: "./fullscreen-below-xl-modal.html",
  styleUrls: ["./fullscreen-below-xl-modal.scss"],
  imports: [Feathericon],
})
export class FullscreenBelowXlModal {
  private modalService = inject(NgbModal);

  FullscreenbelowXlModal(FullscreenbelowXlContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowXlContent, { size: "xl" });
  }
}
