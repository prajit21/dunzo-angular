import { Component, output } from "@angular/core";

import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

import { UserDetails } from "./user-details/user-details";

@Component({
  selector: "app-interview-mail",
  templateUrl: "./interview-mail.html",
  styleUrls: ["./interview-mail.scss"],
  imports: [NgbTooltip, UserDetails],
})
export class InterviewMail {
  readonly filterValue = output<boolean>();
  public open: boolean = false;

  openFilter() {
    this.open = !this.open;
    this.filterValue.emit(this.open);
  }
}
