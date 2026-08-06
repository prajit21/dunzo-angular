import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";

import { Category } from "../../../../shared/data/learning/learning";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.html",
  styleUrls: ["./categories.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgbCollapse],
})
export class Categories {
  public Categories = Category;
  public isCollapsed = false;
}
