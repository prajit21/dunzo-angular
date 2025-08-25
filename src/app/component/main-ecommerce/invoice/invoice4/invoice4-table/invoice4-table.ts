import { Component } from "@angular/core";

import { invoice4 } from "../../../../../shared/data/main-ecommerce/invoice";

@Component({
  selector: "app-invoice4-table",
  templateUrl: "./invoice4-table.html",
  styleUrls: ["./invoice4-table.scss"],
  imports: [],
})
export class Invoice4Table {
  public invoice4Data = invoice4;
}
