import { Component, ChangeDetectionStrategy } from "@angular/core";

import { TopSection } from "./top-section/top-section";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.html",
  styleUrls: ["./product-list.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [TopSection],
})
export class ProductList {}
