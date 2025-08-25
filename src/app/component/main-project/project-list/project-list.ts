import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import {
  Project,
  ProjectLists,
} from "../../../shared/data/main-project/project-list";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.html",
  styleUrls: ["./project-list.scss"],
  imports: [NgClass, Feathericon, RouterLink],
})
export class ProjectList {
  public active = 1;
  public openTab: string = "All";
  public ProjectLists = ProjectLists;
  public listUser: Project[] = [];
  public filterData: Project[] = this.ProjectLists;

  public tabbed(val: string) {
    this.openTab = val;
    this.filterData =
      val !== "All"
        ? this.ProjectLists.filter((data: Project) => {
            return data.badge == this.openTab ? true : false;
          })
        : this.ProjectLists;
  }
}
