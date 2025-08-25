import { Component } from "@angular/core";

import { massage } from "../../../../shared/data/chat/chat";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-user-chat",
  templateUrl: "./user-chat.html",
  styleUrls: ["./user-chat.scss"],
  imports: [ClickOutsideDirective],
})
export class UserChat {
  public MsgData = massage;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
