import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AngularEditorModule } from "@kolkov/angular-editor";
import { NgSelectModule } from "@ng-select/ng-select";
import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-blog-add-post",
  templateUrl: "./blog-add-post.html",
  styleUrls: ["./blog-add-post.scss"],
  imports: [
    FormsModule,
    NgSelectModule,
    AngularEditorModule,
    CommonModule,
    DropzoneModule,
  ],
})
export class BlogAddPost {
  public files: File[] = [];
  public selectedCityIds: string[] = [];
  public selectedCityId: number = 0;
  public selectedUserIds: number[] = [];
  public htmlContent = "";
  public Config: DropzoneConfigInterface = {
    clickable: true,
    url: "https://httpbin.org/post",
    addRemoveLinks: true,
    parallelUploads: 1,
  };
  public cities2 = [
    { id: 1, name: "LifeStyle" },
    { id: 2, name: "Travel" },
  ];

  public text =
    '<i class="icon-cloud-up"></i><h4 class="f-w-700 mb-0">Drag & Drop your files or Browse</h4>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
