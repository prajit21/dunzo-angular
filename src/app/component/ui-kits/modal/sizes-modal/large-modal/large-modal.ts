import {
  Component,
  TemplateRef,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-large-modal",
  templateUrl: "./large-modal.html",
  styleUrls: ["./large-modal.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Feathericon],
})
export class LargeModal {
  private modalService = inject(NgbModal);

  LargeModal(largeContent: TemplateRef<NgbModal>) {
    this.modalService.open(largeContent, { size: "lg" });
  }
}
