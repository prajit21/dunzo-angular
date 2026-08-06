import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgxPrintDirective } from "ngx-print";

import { Invoice6Table } from "./invoice6-table/invoice6-table";
import { Invoice6Top } from "./invoice6-top/invoice6-top";

@Component({
  selector: "app-invoice6",
  templateUrl: "./invoice6.html",
  styleUrls: ["./invoice6.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Invoice6Top, Invoice6Table, NgxPrintDirective],
})
export class Invoice6 {}
