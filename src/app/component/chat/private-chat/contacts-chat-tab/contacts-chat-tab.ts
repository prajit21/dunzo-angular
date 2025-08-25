import { Component } from "@angular/core";

import {
  NgbNav,
  NgbNavItem,
  NgbNavItemRole,
  NgbNavLink,
  NgbNavLinkBase,
  NgbNavContent,
  NgbNavOutlet,
} from "@ng-bootstrap/ng-bootstrap";

import { Chats, Contacts } from "../../../../shared/data/chat/chat";

@Component({
  selector: "app-contacts-chat-tab",
  templateUrl: "./contacts-chat-tab.html",
  styleUrls: ["./contacts-chat-tab.scss"],
  imports: [
    NgbNav,
    NgbNavItem,
    NgbNavItemRole,
    NgbNavLink,
    NgbNavLinkBase,
    NgbNavContent,
    NgbNavOutlet,
  ],
})
export class ContactsChatTab {
  public active = 1;
  public privateData = Chats;
  public contactsData = Contacts;
  public openid: number;
  public isOpen: boolean = false;

  openMenu(id: number) {
    this.contactsData.filter((da) => {
      if (da.id == id) {
        this.openid = id;
        this.isOpen = !this.isOpen;
      }
    });
  }
}
