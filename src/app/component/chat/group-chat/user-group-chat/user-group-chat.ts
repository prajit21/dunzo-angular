import { Component, ChangeDetectionStrategy } from "@angular/core";

import { massage } from "../../../../shared/data/chat/chat";

@Component({
  selector: "app-user-group-chat",
  templateUrl: "./user-group-chat.html",
  styleUrls: ["./user-group-chat.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class UserGroupChat {
  public MsgData = massage;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }
}
