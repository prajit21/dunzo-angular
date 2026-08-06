import { Component, output, ChangeDetectionStrategy } from "@angular/core";

import { NgbTooltip } from "@ng-bootstrap/ng-bootstrap";

import { UserDetails } from "./user-details/user-details";

@Component({
  selector: "app-interview-mail",
  templateUrl: "./interview-mail.html",
  styleUrls: ["./interview-mail.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
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
