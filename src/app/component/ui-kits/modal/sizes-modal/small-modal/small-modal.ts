import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-small-modal",
  templateUrl: "./small-modal.html",
  styleUrls: ["./small-modal.scss"],
  imports: [Feathericon],
})
export class SmallModal {
  private modalService = inject(NgbModal);

  SmallModal(smallContent: TemplateRef<NgbModal>) {
    this.modalService.open(smallContent, { size: "sm" });
  }
}
