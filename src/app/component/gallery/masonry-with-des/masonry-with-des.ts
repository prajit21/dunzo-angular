import { Component, viewChild } from "@angular/core";

import { GallerizeDirective } from "ng-gallery/lightbox";
import {
  NgxMasonryComponent,
  NgxMasonryOptions,
  NgxMasonryModule,
} from "ngx-masonry";

@Component({
  selector: "app-masonry-with-des",
  templateUrl: "./masonry-with-des.html",
  styleUrls: ["./masonry-with-des.scss"],
  imports: [GallerizeDirective, NgxMasonryModule],
})
export class MasonryWithDes {
  public masonryOptions: NgxMasonryOptions = {
    gutter: 20,
  };

  readonly masonry = viewChild(NgxMasonryComponent);

  masonryImages: (string | boolean)[][];
  limit = 20;

  dummyPictures = [
    [false, "assets/images/masonry/1.jpg"],
    [false, "assets/images/masonry/2.jpg"],
    [false, "assets/images/masonry/3.jpg"],
    [false, "assets/images/masonry/4.jpg"],
    [false, "assets/images/masonry/5.jpg"],
    [false, "assets/images/masonry/6.jpg"],
    [false, "assets/images/masonry/8.jpg"],
    [false, "assets/images/masonry/9.jpg"],
    [false, "assets/images/masonry/10.jpg"],
    [false, "assets/images/masonry/11.jpg"],
    [false, "assets/images/masonry/12.jpg"],
    [false, "assets/images/masonry/14.jpg"],
    [false, "assets/images/masonry/15.jpg"],
    [false, "assets/images/masonry/13.jpg"],
  ];

  ngOnInit() {
    this.masonryImages = this.dummyPictures.slice(0, this.limit);
  }

  itemsLoaded() {}
}
