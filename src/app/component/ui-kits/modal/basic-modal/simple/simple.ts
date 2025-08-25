import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.html",
  styleUrls: ["./simple.scss"],
  imports: [Feathericon],
})
export class Simple {
  private modalService = inject(NgbModal);

  simpleModal(simpleContent: TemplateRef<NgbModal>) {
    this.modalService.open(simpleContent);
  }
}
