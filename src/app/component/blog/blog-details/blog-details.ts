import { SlicePipe } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

import { blogData } from "../../../shared/data/blog/blog-data";

@Component({
  selector: "app-blog-details",
  templateUrl: "./blog-details.html",
  styleUrls: ["./blog-details.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [SlicePipe],
})
export class BlogDetails {
  public blog = blogData;
}
