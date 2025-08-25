import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

import { AddProductsDetails } from "./add-products-details/add-products-details";
import { Advance } from "./advance/advance";
import { ProductCategories } from "./product-categories/product-categories";
import { ProductFormStepe } from "./product-form-stepe/product-form-stepe";
import { ProductsGallery } from "./products-gallery/products-gallery";
import { SellingPrice } from "./selling-price/selling-price";
import { AddProducts } from "../../../shared/data/main-ecommerce/add-product";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.html",
  styleUrls: ["./add-product.scss"],
  imports: [
    ProductFormStepe,
    NgClass,
    AddProductsDetails,
    ProductsGallery,
    ProductCategories,
    SellingPrice,
    Advance,
  ],
})
export class AddProduct {
  public stepsData = AddProducts;
  public activeSteps!: number;

  ngOnInit() {
    const data = AddProducts.filter((data) => {
      return data.stepNumber === 1;
    });

    this.activeSteps = data[0].stepNumber;
  }

  receiveChildData(step: number) {
    this.activeSteps = step;
  }
}
