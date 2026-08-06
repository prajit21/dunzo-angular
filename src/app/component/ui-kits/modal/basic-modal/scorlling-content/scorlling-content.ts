import {
  Component,
  TemplateRef,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";
import { ModalData } from "../../../../../shared/data/ui-kits/modal/modal";

@Component({
  selector: "app-scorlling-content",
  templateUrl: "./scorlling-content.html",
  styleUrls: ["./scorlling-content.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Feathericon],
})
export class ScorllingContent {
  private modalService = inject(NgbModal);

  public scrollData = ModalData;

  scrollingModal(scrollingContent: TemplateRef<NgbModal>) {
    this.modalService.open(scrollingContent);
  }
}
