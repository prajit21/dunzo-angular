import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { comments } from "../../../../shared/data/blog/blog-data";

@Component({
  selector: "app-blog-comment",
  templateUrl: "./blog-comment.html",
  styleUrls: ["./blog-comment.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class BlogComment {
  readonly data = input<comments[]>();
}
