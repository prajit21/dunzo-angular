import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.html",
  styleUrls: ["./cart.scss"],
  imports: [NgClass, RouterLink],
})
export class Cart {
  public products: boolean = false;

  cart() {
    this.products = !this.products;
  }
}
