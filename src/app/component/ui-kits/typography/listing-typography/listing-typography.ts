import { Component } from "@angular/core";

import {
  UnorderList,
  orderList,
} from "../../,./../../../shared/data/ui-kits/typogaraphy/typogaraphy";

@Component({
  selector: "app-listing-typography",
  templateUrl: "./listing-typography.html",
  styleUrls: ["./listing-typography.scss"],
  imports: [],
})
export class ListingTypography {
  public listData = UnorderList;
  public orderData = orderList;
}
