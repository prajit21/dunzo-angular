import { Component, inject } from "@angular/core";

import { NgbRatingConfig, NgbRating } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import {
  Neworders,
  Order,
} from "../../../../shared/data/main-ecommerce/orders";

@Component({
  selector: "app-new-orders",
  templateUrl: "./new-orders.html",
  styleUrls: ["./new-orders.scss"],
  imports: [NgbRating, Feathericon],
})
export class NewOrders {
  config = inject(NgbRatingConfig);

  public rateing = 5;
  public orders = Neworders;

  constructor() {
    const config = this.config;

    config.max = 5;
    config.readonly = true;
  }

  close(item: Order) {
    this.orders.splice(this.orders.indexOf(item), 1);
  }
}
