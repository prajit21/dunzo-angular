import { NgClass, AsyncPipe, DecimalPipe } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

import {
  NgbRatingConfig,
  NgbRating,
  NgbPagination,
} from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

import {
  productListData,
  productListInterface,
} from "../../../../shared/data/main-ecommerce/product-list";
import {
  ProductListDirective,
  SortEvent,
} from "../../../../shared/directives/product-list.directive";
import { ProductListService } from "../../../../shared/services/main-ecommerce/product-list.service";

@Component({
  selector: "app-product-data-table",
  templateUrl: "./product-data-table.html",
  styleUrls: ["./product-data-table.scss"],
  providers: [ProductListService, DecimalPipe],
  imports: [
    FormsModule,
    ProductListDirective,
    NgClass,
    NgbRating,
    RouterLink,
    NgbPagination,
    AsyncPipe,
  ],
})
export class ProductDataTable {
  service = inject(ProductListService);
  config = inject(NgbRatingConfig);

  public products$: Observable<productListInterface[]>;
  public total$: Observable<number>;
  public Data: productListInterface[];
  public PRODUCTLIST = productListData;

  readonly headers = viewChildren(ProductListDirective);

  constructor() {
    const service = this.service;
    const config = this.config;

    config.max = 5;
    config.readonly = true;
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
      if (header.sortable() !== column) {
        header.direction = "";
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
