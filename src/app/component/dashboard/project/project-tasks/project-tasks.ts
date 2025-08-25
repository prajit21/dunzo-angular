import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Tasks } from "../../../../shared/data/dashboard/project/project";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-project-tasks",
  templateUrl: "./project-tasks.html",
  styleUrls: ["./project-tasks.scss"],
  imports: [ClickOutsideDirective, RouterLink],
})
export class ProjectTasks {
  public TasksData = Tasks;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
