import { Component } from "@angular/core";

import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-default-file-upload",
  templateUrl: "./default-file-upload.html",
  styleUrls: ["./default-file-upload.scss"],
  imports: [DropzoneModule],
})
export class DefaultFileUpload {
  imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: "https://httpbin.org/post",
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public text =
    'Drag & Drop your files or <span class="text-danger">Browse</span>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
