import { Component } from "@angular/core";

import { NgxPrintDirective } from "ngx-print";

import { Invoice5Table } from "./invoice5-table/invoice5-table";
import { Invoice5Top } from "./invoice5-top/invoice5-top";

@Component({
  selector: "app-invoice5",
  templateUrl: "./invoice5.html",
  styleUrls: ["./invoice5.scss"],
  imports: [Invoice5Top, Invoice5Table, NgxPrintDirective],
})
export class Invoice5 {}
