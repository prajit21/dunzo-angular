import { Component, TemplateRef, inject } from "@angular/core";
import { RouterLink } from "@angular/router";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-balance-modal",
  templateUrl: "./balance-modal.html",
  styleUrls: ["./balance-modal.scss"],
  imports: [RouterLink, Feathericon],
})
export class BalanceModal {
  private modalService = inject(NgbModal);

  BalanceModal(Balancecontant: TemplateRef<NgbModal>) {
    this.modalService.open(Balancecontant, { centered: true });
  }
}
