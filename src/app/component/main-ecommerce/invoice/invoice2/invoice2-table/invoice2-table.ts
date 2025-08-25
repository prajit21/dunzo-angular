import { Component } from "@angular/core";

import { invoice2 } from "../../../../../shared/data/main-ecommerce/invoice";

@Component({
  selector: "app-invoice2-table",
  templateUrl: "./invoice2-table.html",
  styleUrls: ["./invoice2-table.scss"],
  imports: [],
})
export class Invoice2Table {
  public invoice2Data = invoice2;
}
