import {
  Component,
  TemplateRef,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-centered-modal",
  templateUrl: "./centered-modal.html",
  styleUrls: ["./centered-modal.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class CenteredModal {
  private modalService = inject(NgbModal);

  CenteredModal(CenteredContent: TemplateRef<NgbModal>) {
    this.modalService.open(CenteredContent, { centered: true });
  }
}
