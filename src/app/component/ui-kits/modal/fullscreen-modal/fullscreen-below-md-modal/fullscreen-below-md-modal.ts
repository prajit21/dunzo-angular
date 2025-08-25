import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-below-md-modal",
  templateUrl: "./fullscreen-below-md-modal.html",
  styleUrls: ["./fullscreen-below-md-modal.scss"],
  imports: [Feathericon],
})
export class FullscreenBelowMdModal {
  private modalService = inject(NgbModal);

  FullscreenbelowMdModal(FullscreenbelowMdContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowMdContent, { size: "md" });
  }
}
