import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { staps } from "../../../../shared/data/main-ecommerce/add-product";

@Component({
  selector: "app-product-form-stepe",
  templateUrl: "./product-form-stepe.html",
  styleUrls: ["./product-form-stepe.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class ProductFormStepe {
  readonly stepsData = input.required<staps[]>();
  readonly activeSteps = input.required<number>();
}
