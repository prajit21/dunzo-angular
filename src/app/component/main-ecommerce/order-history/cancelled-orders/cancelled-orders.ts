import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import {
  CancelledOrder,
  Order,
} from "../../../../shared/data/main-ecommerce/orders";

@Component({
  selector: "app-cancelled-orders",
  templateUrl: "./cancelled-orders.html",
  styleUrls: ["./cancelled-orders.scss"],
  imports: [NgbRating, Feathericon],
})
export class CancelledOrders {
  config = inject(NgbRatingConfig);

  public cancelled = CancelledOrder;
  public rateing = 5;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }

  close(item: Order) {
    this.cancelled.splice(this.cancelled.indexOf(item), 1);
  }
}
