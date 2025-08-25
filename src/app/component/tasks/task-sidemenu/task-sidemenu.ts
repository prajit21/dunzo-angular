import { Component, Output, inject } from "@angular/core";

import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import * as Data from "../../../shared/data/tasks/task-list";
import { ClickOutsideDirective } from "../../../shared/directives/outside.directive";
import { AllTasks } from "../all-tasks/all-tasks";
import { AddtasksTag } from "../tasks-modal/addtasks-tag/addtasks-tag";
import { NewTasks } from "../tasks-modal/new-tasks/new-tasks";

@Component({
  selector: "app-task-sidemenu",
  templateUrl: "./task-sidemenu.html",
  styleUrls: ["./task-sidemenu.scss"],
  imports: [ClickOutsideDirective, Feathericon, AllTasks],
})
export class TaskSidemenu {
  private modalService = inject(NgbModal);

  @Output() selectedheading_id: number;
  @Output() selectedTagId: number;
  public taskSidemenu = Data.TaskData;
  public taskTagSidemenu = Data.TagData;
  public open: boolean = false;

  getData(title_id: number) {
    const getHeadingData = this.taskSidemenu.filter((data) => {
      return data.title_id === title_id;
    });
    this.selectedheading_id = getHeadingData[0].title_id;
  }

  getTagData(title_id: number) {
    const getTagData = this.taskTagSidemenu.filter((data) => {
      return data.title_id === title_id;
    });

    this.selectedTagId = getTagData[0].title_id;
  }

  openMenu() {
    this.open = !this.open;
  }

  openAddTask() {
    this.modalService.open(NewTasks, { size: "lg" });
  }

  openAddTag() {
    this.modalService.open(AddtasksTag, { size: "lg" });
  }

  clickOutside(): void {
    this.open = false;
  }
}
