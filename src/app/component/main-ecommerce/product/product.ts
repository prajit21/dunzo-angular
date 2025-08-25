import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Filter } from "./filter/filter";
import { ProductBox } from "./product-box/product-box";
import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { ClickOutsideDirective } from "../../../shared/directives/outside.directive";
import { ProductBoxFilterService } from "../../../shared/services/main-ecommerce/product-box-filter.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.html",
  styleUrls: ["./product.scss"],
  imports: [
    ClickOutsideDirective,
    Feathericon,
    FormsModule,
    Filter,
    ProductBox,
  ],
})
export class Product {
  private ProductBoxFilterService = inject(ProductBoxFilterService);

  public listView: boolean = false;
  public openSidebar: boolean = false;
  public OpenFilter: boolean = false;

  gridOpens() {
    this.listView = false;
    this.ProductBoxFilterService.gridOpen();
  }
  listOpens() {
    this.listView = true;
    this.ProductBoxFilterService.listOpen();
  }
  grid2s() {
    this.listView = false;
    this.ProductBoxFilterService.grid2();
  }
  grid3s() {
    this.listView = false;
    this.ProductBoxFilterService.grid3();
  }
  grid6s() {
    this.listView = false;
    this.ProductBoxFilterService.grid6();
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
  }
  openFilter() {
    this.openSidebar = !this.openSidebar;
  }

  clickOutside(): void {
    this.openSidebar = false;
  }
}
