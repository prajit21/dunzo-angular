import { Component, TemplateRef, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-tooltips-popovers",
  templateUrl: "./tooltips-popovers.html",
  styleUrls: ["./tooltips-popovers.scss"],
  imports: [],
})
export class TooltipsPopovers {
  private modalService = inject(NgbModal);

  tooltipModal(tooltipmodalContent: TemplateRef<NgbModal>) {
    this.modalService.open(tooltipmodalContent);
  }
}
