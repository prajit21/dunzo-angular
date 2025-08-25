import { Component } from "@angular/core";

import { invoice3 } from "../../../../../shared/data/main-ecommerce/invoice";

@Component({
  selector: "app-invoice3-table",
  templateUrl: "./invoice3-table.html",
  styleUrls: ["./invoice3-table.scss"],
  imports: [],
})
export class Invoice3Table {
  public invoice3Data = invoice3;
}
