import { Component } from "@angular/core";

import { NgxPrintDirective } from "ngx-print";

import { Invoice3Table } from "./invoice3-table/invoice3-table";
import { Invoice3Top } from "./invoice3-top/invoice3-top";
import { TotalInvoice3 } from "./total-invoice3/total-invoice3";

@Component({
  selector: "app-invoice3",
  templateUrl: "./invoice3.html",
  styleUrls: ["./invoice3.scss"],
  imports: [Invoice3Top, Invoice3Table, TotalInvoice3, NgxPrintDirective],
})
export class Invoice3 {}
