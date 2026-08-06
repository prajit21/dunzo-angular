import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.html",
  styleUrls: ["./cart.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class Cart {
  public products: boolean = false;

  cart() {
    this.products = !this.products;
  }
}
