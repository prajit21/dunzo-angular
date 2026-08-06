import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ProjectCreateForm } from "./project-create-form/project-create-form";
import { UploadFile } from "./upload-file/upload-file";

@Component({
  selector: "app-create-new",
  templateUrl: "./create-new.html",
  styleUrls: ["./create-new.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [ProjectCreateForm, UploadFile],
})
export class CreateNew {}
