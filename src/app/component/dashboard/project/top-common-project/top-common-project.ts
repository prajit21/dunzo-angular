import { NgStyle } from "@angular/common";
import { Component } from "@angular/core";

import { ProjectcommonData } from "../../../../shared/data/dashboard/project/project";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-top-common-project",
  templateUrl: "./top-common-project.html",
  styleUrls: ["./top-common-project.scss"],
  imports: [ClickOutsideDirective, NgStyle],
})
export class TopCommonProject {
  public ProjectData = ProjectcommonData;
  public openid: number;
  public isOpen: boolean = false;

  openMenu(id: number) {
    this.ProjectData.filter((data) => {
      if (data.id == id) {
        this.openid = this.openid !== data.id ? data.id : 0;
        this.isOpen = !this.isOpen;
      }
    });
  }
  clickOutside(): void {
    this.isOpen = false;
  }
}
