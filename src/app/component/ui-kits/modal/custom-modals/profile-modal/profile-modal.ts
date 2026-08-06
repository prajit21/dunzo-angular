import {
  Component,
  TemplateRef,
  inject,
  ChangeDetectionStrategy,
} from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-profile-modal",
  templateUrl: "./profile-modal.html",
  styleUrls: ["./profile-modal.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class ProfileModal {
  private modalService = inject(NgbModal);

  profilemodal(profilecontant: TemplateRef<NgbModal>) {
    this.modalService.open(profilecontant, { centered: true });
  }
}
