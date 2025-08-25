import { AsyncPipe, DecimalPipe } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { orderHistory } from "../../../../shared/data/main-ecommerce/orders";
import {
  OrderdataTableDirective,
  SortEvent,
} from "../../../../shared/directives/orderdata.directive";
import { ORDERS } from "../../../../shared/interface/odershistory";
import { OrderService } from "../../../../shared/services/main-ecommerce/order.service";

@Component({
  selector: "app-datatable-orderhistory",
  templateUrl: "./datatable-orderhistory.html",
  styleUrls: ["./datatable-orderhistory.scss"],
  imports: [
    FormsModule,
    OrderdataTableDirective,
    RouterLink,
    Feathericon,
    NgbPagination,
    AsyncPipe,
  ],
  providers: [DecimalPipe, OrderService],
})
export class DatatableOrderhistory {
  service = inject(OrderService);

  public products$: Observable<ORDERS[]>;
  public total$: Observable<number>;
  public Data: ORDERS[];
  public orderHistoryData = orderHistory;

  readonly headers = viewChildren(OrderdataTableDirective);

  constructor() {
    const service = this.service;

    this.products$ = service.support$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.products$.subscribe((res) => {
      this.Data = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach((header) => {
      if (header.sortableOrder() !== column) {
        header.direction = "";
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
