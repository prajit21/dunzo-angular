import { Component } from "@angular/core";

import { NgxPrintDirective } from "ngx-print";

import { Invoice1Table } from "./invoice1-table/invoice1-table";

@Component({
  selector: "app-invoice1",
  templateUrl: "./invoice1.html",
  styleUrls: ["./invoice1.scss"],
  imports: [Invoice1Table, NgxPrintDirective],
})
export class Invoice1 {}
