import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";
import { EmailInbox } from "../email-inbox/email-inbox";
import { EmailUser } from "../email-user/email-user";
import { NewMail } from "../new-mail/new-mail";

@Component({
  selector: "app-email-sidebar",
  templateUrl: "./email-sidebar.html",
  styleUrls: ["./email-sidebar.scss"],
  imports: [ClickOutsideDirective, NgClass, EmailUser, NewMail, EmailInbox],
})
export class EmailSidebar {
  public active = 2;
  public openTab: string = "inbox";
  public open: boolean = false;

  constructor() {}

  public tabbed(val: string) {
    this.openTab = val;
  }

  openMenu() {
    this.open = !this.open;
  }

  clickOutside(): void {
    this.open = false;
  }
}
