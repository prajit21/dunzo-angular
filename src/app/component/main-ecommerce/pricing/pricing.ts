import { Component } from "@angular/core";

import { BecomeMember } from "./become-member/become-member";
import { SimplePricingCard } from "./simple-pricing-card/simple-pricing-card";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.html",
  styleUrls: ["./pricing.scss"],
  imports: [BecomeMember, SimplePricingCard],
})
export class Pricing {}
