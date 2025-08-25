import { Component } from "@angular/core";

import { SupportTicketDataTable } from "./support-ticket-data-table/support-ticket-data-table";
import { SupportTicketList } from "./support-ticket-list/support-ticket-list";

@Component({
  selector: "app-support-ticket",
  templateUrl: "./support-ticket.html",
  styleUrls: ["./support-ticket.scss"],
  imports: [SupportTicketList, SupportTicketDataTable],
})
export class SupportTicket {}
