import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import {
  activeTasks,
  activity,
} from "../../../../shared/data/dashboard/default-data";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-active-tasks",
  templateUrl: "./active-tasks.html",
  styleUrls: ["./active-tasks.scss"],
  imports: [ClickOutsideDirective, NgClass, RouterLink],
})
export class ActiveTasks {
  public activeTasks = activeTasks;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  close(data: activity) {
    this.activeTasks.splice(this.activeTasks.indexOf(data), 1);
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
