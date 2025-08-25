import { Component } from "@angular/core";

import { Image, GalleryModule } from "@ks89/angular-modal-gallery";

import { Brand } from "./brand/brand";
import { DescriptionTab } from "./description-tab/description-tab";
import { Details } from "./details/details";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.html",
  styleUrls: ["./product-page.scss"],
  imports: [GalleryModule, Details, Brand, DescriptionTab],
})
export class ProductPage {
  public imagesRect: Image[] = [
    new Image(
      0,
      { img: "assets/images/ecommerce/01.jpg" },
      { img: "assets/images/ecommerce/01.jpg" },
    ),
    new Image(
      1,
      { img: "assets/images/ecommerce/02.jpg" },
      { img: "assets/images/ecommerce/02.jpg" },
    ),
    new Image(
      2,
      { img: "assets/images/ecommerce/03.jpg" },
      { img: "assets/images/ecommerce/03.jpg" },
    ),
    new Image(
      3,
      { img: "assets/images/ecommerce/04.jpg" },
      { img: "assets/images/ecommerce/04.jpg" },
    ),
    new Image(
      4,
      { img: "assets/images/ecommerce/05.jpg" },
      { img: "assets/images/ecommerce/05.jpg" },
    ),
    new Image(
      5,
      { img: "assets/images/ecommerce/06.jpg" },
      { img: "assets/images/ecommerce/06.jpg" },
    ),
    new Image(
      6,
      { img: "assets/images/ecommerce/07.jpg" },
      { img: "assets/images/ecommerce/07.jpg" },
    ),
    new Image(
      7,
      { img: "assets/images/ecommerce/08.jpg" },
      { img: "assets/images/ecommerce/08.jpg" },
    ),
  ];
}
