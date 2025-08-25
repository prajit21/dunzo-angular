import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { projectSummary } from "../../../../shared/data/dashboard/project/project";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-project-summary",
  templateUrl: "./project-summary.html",
  styleUrls: ["./project-summary.scss"],
  imports: [ClickOutsideDirective, RouterLink],
})
export class ProjectSummary {
  public projectSummaryData = projectSummary;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
