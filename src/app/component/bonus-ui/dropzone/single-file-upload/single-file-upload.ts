import { Component } from "@angular/core";

import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-single-file-upload",
  templateUrl: "./single-file-upload.html",
  styleUrls: ["./single-file-upload.scss"],
  imports: [DropzoneModule],
})
export class SingleFileUpload {
  imageConfig: DropzoneConfigInterface = {
    url: "https://httpbin.org/post",
    clickable: true,
    uploadMultiple: false,
    maxFiles: 1,
    addRemoveLinks: true,
  };

  public text =
    '<i class="icon-cloud-up"></i><h4>Drop files here or click to upload.</h4><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
