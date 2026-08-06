import { Component, ChangeDetectionStrategy } from "@angular/core";

import { CommentOne } from "./comment-one/comment-one";
import { CommentTwo } from "./comment-two/comment-two";

@Component({
  selector: "app-timeline-center",
  templateUrl: "./timeline-center.html",
  styleUrls: ["./timeline-center.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [CommentOne, CommentTwo],
})
export class TimelineCenter {}
