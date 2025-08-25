import { Component } from "@angular/core";

import { BillingDetails } from "./billing-details/billing-details";
import { ProductTotal } from "./product-total/product-total";

@Component({
  selector: "app-checkout",
  templateUrl: "./checkout.html",
  styleUrls: ["./checkout.scss"],
  imports: [BillingDetails, ProductTotal],
})
export class Checkout {}
