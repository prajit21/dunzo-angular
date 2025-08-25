import { Component } from "@angular/core";

import {
  learningTopData,
  learningData,
} from "../../../shared/data/learning/learning";
import { LearningFilter } from "../learning-filter/learning-filter";

@Component({
  selector: "app-learning-list",
  templateUrl: "./learning-list.html",
  styleUrls: ["./learning-list.scss"],
  imports: [LearningFilter],
})
export class LearningList {
  public learningTopData = learningTopData;
  public learningData = learningData;
}
