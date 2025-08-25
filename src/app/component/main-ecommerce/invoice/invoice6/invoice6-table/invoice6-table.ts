import { Component } from "@angular/core";

import { invoice6 } from "../../../../../shared/data/main-ecommerce/invoice";

@Component({
  selector: "app-invoice6-table",
  templateUrl: "./invoice6-table.html",
  styleUrls: ["./invoice6-table.scss"],
  imports: [],
})
export class Invoice6Table {
  public invoice6Data = invoice6;
}
