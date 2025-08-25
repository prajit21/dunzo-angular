import { Component } from "@angular/core";

import { simplePricingCard } from "../../../../shared/data/main-ecommerce/pricing";

@Component({
  selector: "app-simple-pricing-card",
  templateUrl: "./simple-pricing-card.html",
  styleUrls: ["./simple-pricing-card.scss"],
  imports: [],
})
export class SimplePricingCard {
  public simplepricing = simplePricingCard;
}
