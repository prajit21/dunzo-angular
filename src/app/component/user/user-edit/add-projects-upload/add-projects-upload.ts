import { Component, ChangeDetectionStrategy } from "@angular/core";

import { projectData } from "../../../../shared/data/user/users-edit";

@Component({
  selector: "app-add-projects-upload",
  templateUrl: "./add-projects-upload.html",
  styleUrls: ["./add-projects-upload.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class AddProjectsUpload {
  public projectitem = projectData;
}
