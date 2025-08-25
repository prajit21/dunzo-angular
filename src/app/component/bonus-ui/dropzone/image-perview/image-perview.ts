import { Component } from "@angular/core";

import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-image-perview",
  templateUrl: "./image-perview.html",
  styleUrls: ["./image-perview.scss"],
  imports: [DropzoneModule],
})
export class ImagePerview {
  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: "https://httpbin.org/post",
    acceptedFiles: "image/*",
    addRemoveLinks: true,
  };

  public text =
    'Drag & Drop your files or <span class="text-danger">Browse</span>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
