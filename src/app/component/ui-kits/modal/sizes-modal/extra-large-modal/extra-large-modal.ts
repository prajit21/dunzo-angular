import {
  Component,
  TemplateRef,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-extra-large-modal",
  templateUrl: "./extra-large-modal.html",
  styleUrls: ["./extra-large-modal.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Feathericon],
})
export class ExtraLargeModal {
  private modalService = inject(NgbModal);

  ExtraLargemodal(ExtralargeContent: TemplateRef<NgbModal>) {
    this.modalService.open(ExtralargeContent, { size: "xl" });
  }
}
