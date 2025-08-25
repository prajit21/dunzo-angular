import { Component } from "@angular/core";

import { NgxPrintDirective } from "ngx-print";

import { Invoice2Table } from "./invoice2-table/invoice2-table";
import { Invoice2Top } from "./invoice2-top/invoice2-top";
import { TotalInvoice2 } from "./total-invoice2/total-invoice2";

@Component({
  selector: "app-invoice2",
  templateUrl: "./invoice2.html",
  styleUrls: ["./invoice2.scss"],
  imports: [Invoice2Top, Invoice2Table, TotalInvoice2, NgxPrintDirective],
})
export class Invoice2 {}
