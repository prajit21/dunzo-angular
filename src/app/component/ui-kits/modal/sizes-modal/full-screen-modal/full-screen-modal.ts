import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-full-screen-modal",
  templateUrl: "./full-screen-modal.html",
  styleUrls: ["./full-screen-modal.scss"],
  imports: [Feathericon],
})
export class FullScreenModal {
  private modalService = inject(NgbModal);

  FullScreenModal(fullScreenContent: TemplateRef<NgbModal>) {
    this.modalService.open(fullScreenContent, { fullscreen: true });
  }
}
