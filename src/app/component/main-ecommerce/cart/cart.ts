import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { cartItem } from "../../../shared/data/main-ecommerce/cart";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.html",
  styleUrls: ["./cart.scss"],
  imports: [Feathericon, RouterLink],
})
export class Cart {
  public cartData = cartItem;

  decrement(id: number) {
    if (this.cartData[id - 1].counter > 1) {
      this.cartData[id - 1].counter -= 1;
    }
  }

  increment(id: number) {
    this.cartData[id - 1].counter += 1;
  }
}
