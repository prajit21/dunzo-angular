import { Component } from "@angular/core";

import { NgxPrintDirective } from "ngx-print";

import { Invoice4Table } from "./invoice4-table/invoice4-table";
import { Invoice4Top } from "./invoice4-top/invoice4-top";
import { TotalInvoice4 } from "./total-invoice4/total-invoice4";

@Component({
  selector: "app-invoice4",
  templateUrl: "./invoice4.html",
  styleUrls: ["./invoice4.scss"],
  imports: [Invoice4Top, Invoice4Table, TotalInvoice4, NgxPrintDirective],
})
export class Invoice4 {}
