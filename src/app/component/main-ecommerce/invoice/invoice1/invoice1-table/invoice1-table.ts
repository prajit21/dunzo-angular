import { Component } from "@angular/core";

import { invoice1 } from "../../../../../shared/data/main-ecommerce/invoice";

@Component({
  selector: "app-invoice1-table",
  templateUrl: "./invoice1-table.html",
  styleUrls: ["./invoice1-table.scss"],
  imports: [],
})
export class Invoice1Table {
  public invoiceData = invoice1;
}
