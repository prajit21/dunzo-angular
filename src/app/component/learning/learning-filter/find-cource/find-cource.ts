import { Component } from "@angular/core";

import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { findCourse } from "../../../../shared/data/learning/learning";

@Component({
  selector: "app-find-cource",
  templateUrl: "./find-cource.html",
  styleUrls: ["./find-cource.scss"],
  imports: [NgbCollapse, Feathericon],
})
export class FindCource {
  public findCourse = findCourse;
  public isCollapsed = false;
}
