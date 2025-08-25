import { Component } from "@angular/core";

import { projectData } from "../../../../shared/data/user/users-edit";

@Component({
  selector: "app-add-projects-upload",
  templateUrl: "./add-projects-upload.html",
  styleUrls: ["./add-projects-upload.scss"],
  imports: [],
})
export class AddProjectsUpload {
  public projectitem = projectData;
}
