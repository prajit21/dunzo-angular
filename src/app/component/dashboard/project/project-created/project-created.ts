import { Component } from "@angular/core";

import { NgApexchartsModule } from "ng-apexcharts";

import { CreatedProject } from "../../../../shared/data/dashboard/project/project-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-project-created",
  templateUrl: "./project-created.html",
  styleUrls: ["./project-created.scss"],
  imports: [ClickOutsideDirective, NgApexchartsModule],
})
export class ProjectCreated {
  public projectCreatedChart = CreatedProject;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
