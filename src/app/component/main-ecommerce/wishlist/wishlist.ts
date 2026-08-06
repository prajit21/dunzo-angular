import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

import { whislist } from "../../../shared/data/main-ecommerce/wishlist";

@Component({
  selector: "app-wishlist",
  templateUrl: "./wishlist.html",
  styleUrls: ["./wishlist.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class Wishlist {
  public wishlistData = whislist;
}
