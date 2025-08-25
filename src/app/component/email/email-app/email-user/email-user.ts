import { Component } from "@angular/core";

import { Users } from "../../../../shared/data/email/email-app";

@Component({
  selector: "app-email-user",
  templateUrl: "./email-user.html",
  styleUrls: ["./email-user.scss"],
  imports: [],
})
export class EmailUser {
  public userData = Users;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}
