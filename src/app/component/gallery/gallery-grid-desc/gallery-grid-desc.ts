import { Component, inject } from "@angular/core";

import {
  Gallery,
  GalleryItem,
  ImageItem,
  ImageSize,
  ThumbnailsPosition,
} from "ng-gallery";
import { Lightbox, GallerizeDirective } from "ng-gallery/lightbox";

import { gallerydes } from "../../../shared/data/gallery/gallery-grid";

@Component({
  selector: "app-gallery-grid-desc",
  templateUrl: "./gallery-grid-desc.html",
  styleUrls: ["./gallery-grid-desc.scss"],
  imports: [GallerizeDirective],
})
export class GalleryGridDesc {
  gallery = inject(Gallery);
  lightbox = inject(Lightbox);

  public galleryGrid = gallerydes;
  public items!: GalleryItem[];

  ngOnInit() {
    this.items = this.galleryGrid.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }),
    );
    const lightboxRef = this.gallery.ref("lightbox");

    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });

    lightboxRef.load(this.items);
  }
}
