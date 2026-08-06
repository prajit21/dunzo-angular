import { Component, ChangeDetectionStrategy } from "@angular/core";

import { simplePricingCard } from "../../../../shared/data/main-ecommerce/pricing";

@Component({
  selector: "app-simple-pricing-card",
  templateUrl: "./simple-pricing-card.html",
  styleUrls: ["./simple-pricing-card.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class SimplePricingCard {
  public simplepricing = simplePricingCard;
}
