import { Component } from "@angular/core";

import { ContactsChatTab } from "./contacts-chat-tab/contacts-chat-tab";
import { UserChat } from "./user-chat/user-chat";

@Component({
  selector: "app-private-chat",
  templateUrl: "./private-chat.html",
  styleUrls: ["./private-chat.scss"],
  imports: [ContactsChatTab, UserChat],
})
export class PrivateChat {}
