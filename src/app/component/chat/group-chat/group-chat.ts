import { Component } from "@angular/core";

import { UserGroupChat } from "./user-group-chat/user-group-chat";
import { ContactsChatTab } from "../private-chat/contacts-chat-tab/contacts-chat-tab";

@Component({
  selector: "app-group-chat",
  templateUrl: "./group-chat.html",
  styleUrls: ["./group-chat.scss"],
  imports: [ContactsChatTab, UserGroupChat],
})
export class GroupChat {}
