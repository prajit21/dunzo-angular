import { Component } from "@angular/core";

import { CancelledOrders } from "./cancelled-orders/cancelled-orders";
import { DatatableOrderhistory } from "./datatable-orderhistory/datatable-orderhistory";
import { NewOrders } from "./new-orders/new-orders";
import { ShippedOrders } from "./shipped-orders/shipped-orders";

@Component({
  selector: "app-order-history",
  templateUrl: "./order-history.html",
  styleUrls: ["./order-history.scss"],
  imports: [NewOrders, ShippedOrders, CancelledOrders, DatatableOrderhistory],
})
export class OrderHistory {}
