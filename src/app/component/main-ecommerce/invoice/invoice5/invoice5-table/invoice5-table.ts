import { Component } from "@angular/core";

import { invoice5 } from "../../../../../shared/data/main-ecommerce/invoice";

@Component({
  selector: "app-invoice5-table",
  templateUrl: "./invoice5-table.html",
  styleUrls: ["./invoice5-table.scss"],
  imports: [],
})
export class Invoice5Table {
  public invoice5Data = invoice5;
}
