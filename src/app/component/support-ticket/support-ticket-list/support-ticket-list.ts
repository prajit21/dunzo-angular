import { Component } from "@angular/core";

import { ticketListStatus } from "../../../shared/data/support-ticket/support-ticket";

@Component({
  selector: "app-support-ticket-list",
  templateUrl: "./support-ticket-list.html",
  styleUrls: ["./support-ticket-list.scss"],
  imports: [],
})
export class SupportTicketList {
  public ticketData = ticketListStatus;
}
