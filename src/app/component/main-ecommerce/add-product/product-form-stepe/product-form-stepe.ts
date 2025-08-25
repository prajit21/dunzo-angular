import { Component, input } from "@angular/core";

import { staps } from "../../../../shared/data/main-ecommerce/add-product";

@Component({
  selector: "app-product-form-stepe",
  templateUrl: "./product-form-stepe.html",
  styleUrls: ["./product-form-stepe.scss"],
  imports: [],
})
export class ProductFormStepe {
  readonly stepsData = input.required<staps[]>();
  readonly activeSteps = input.required<number>();
}
