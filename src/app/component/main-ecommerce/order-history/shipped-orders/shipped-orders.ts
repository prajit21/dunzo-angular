import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import {
  ShippedOrder,
  Order,
} from "../../../../shared/data/main-ecommerce/orders";

@Component({
  selector: "app-shipped-orders",
  templateUrl: "./shipped-orders.html",
  styleUrls: ["./shipped-orders.scss"],
  imports: [NgbRating, Feathericon],
})
export class ShippedOrders {
  config = inject(NgbRatingConfig);

  public shipped = ShippedOrder;
  public rateing = 5;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }

  close(item: Order) {
    this.shipped.splice(this.shipped.indexOf(item), 1);
  }
}
