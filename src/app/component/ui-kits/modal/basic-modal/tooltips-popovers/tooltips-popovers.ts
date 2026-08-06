import {
  Component,
  TemplateRef,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-tooltips-popovers",
  templateUrl: "./tooltips-popovers.html",
  styleUrls: ["./tooltips-popovers.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class TooltipsPopovers {
  private modalService = inject(NgbModal);

  tooltipModal(tooltipmodalContent: TemplateRef<NgbModal>) {
    this.modalService.open(tooltipmodalContent);
  }
}
