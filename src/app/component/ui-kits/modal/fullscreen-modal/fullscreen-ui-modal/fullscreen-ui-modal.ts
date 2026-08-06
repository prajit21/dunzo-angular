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
  selector: "app-fullscreen-ui-modal",
  templateUrl: "./fullscreen-ui-modal.html",
  styleUrls: ["./fullscreen-ui-modal.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Feathericon],
})
export class FullscreenUiModal {
  private modalService = inject(NgbModal);

  public FullscreenData = ModalData;

  FullscreenbelowModal(FullscreenbelowContent: TemplateRef<NgbModal>) {
    this.modalService.open(FullscreenbelowContent, { fullscreen: true });
  }
}
