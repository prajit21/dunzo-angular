import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-fullscreen-below-sm-modal",
  templateUrl: "./fullscreen-below-sm-modal.html",
  styleUrls: ["./fullscreen-below-sm-modal.scss"],
  imports: [Feathericon],
})
export class FullscreenBelowSmModal {
  private modalService = inject(NgbModal);

  FullscreenbelowSmModal(FullscreenbelowSmContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowSmContent, { size: "sm" });
  }
}
