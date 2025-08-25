import { Component } from "@angular/core";

import { commentsData } from "../../../shared/data/learning/learning";
import { BlogComment } from "../../blog/blog-single/blog-comment/blog-comment";
import { LearningFilter } from "../learning-filter/learning-filter";

@Component({
  selector: "app-detailed-course",
  templateUrl: "./detailed-course.html",
  styleUrls: ["./detailed-course.scss"],
  imports: [BlogComment, LearningFilter],
})
export class DetailedCourse {
  public commentsData = commentsData;
}
