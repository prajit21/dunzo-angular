import { NgClass } from "@angular/common";
import { Component, SimpleChanges, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import * as data from "../../../../shared/data/email/letter-box";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";
import { AddLabel } from "../letter-modal/add-label/add-label";
import { ComposeEmail } from "../letter-modal/compose-email/compose-email";
import { LetterboxUser } from "../letterbox-user/letterbox-user";

@Component({
  selector: "app-letterbox-sidebar",
  templateUrl: "./letterbox-sidebar.html",
  styleUrls: ["./letterbox-sidebar.scss"],
  imports: [ClickOutsideDirective, NgClass, LetterboxUser],
})
export class LetterboxSidebar {
  private modalService = inject(NgbModal);

  public email = data.emailFilter;
  public emailData: data.email;
  public selectedId: number;
  public statusData: boolean;
  public open: boolean = false;

  ngOnInit(_changes: SimpleChanges) {
    let getStatusdata = this.email.filter((data) => {
      return data.status == true;
    });
    this.statusData = getStatusdata[0]?.status;
  }

  letterbox(item: data.email) {
    const getdata = this.email.filter((data) => data.id == item.id);
    this.selectedId = getdata[0].id;
    this.email.filter((data) => {
      if (item.id == data.id) {
        data.status = true;
      } else {
        data.status = false;
      }
    });
  }

  composeEmail() {
    this.modalService.open(ComposeEmail, { size: "lg" });
  }

  addlable() {
    this.modalService.open(AddLabel, { size: "lg" });
  }

  openMenu() {
    this.open = !this.open;
  }

  clickOutside(): void {
    this.open = false;
  }
}
