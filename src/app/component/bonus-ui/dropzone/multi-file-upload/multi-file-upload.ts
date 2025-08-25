import { Component } from "@angular/core";

import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-multi-file-upload",
  templateUrl: "./multi-file-upload.html",
  styleUrls: ["./multi-file-upload.scss"],
  imports: [DropzoneModule],
})
export class MultiFileUpload {
  public imageConfig: DropzoneConfigInterface = {
    clickable: true,
    url: "https://httpbin.org/post",
    uploadMultiple: true,
    addRemoveLinks: true,
  };

  public text =
    '<i class="icon-cloud-up"></i><h4>Drop files here or click to upload.</h4><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
