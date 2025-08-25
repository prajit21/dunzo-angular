import { Component } from "@angular/core";

import { DropzoneConfigInterface, DropzoneModule } from "ngx-dropzone-wrapper";

@Component({
  selector: "app-upload-file",
  templateUrl: "./upload-file.html",
  styleUrls: ["./upload-file.scss"],
  imports: [DropzoneModule],
})
export class UploadFile {
  Config: DropzoneConfigInterface = {
    clickable: true,
    url: "https://httpbin.org/post",
    addRemoveLinks: true,
    parallelUploads: 1,
  };

  public text =
    '<i class="icon-cloud-up"></i><h4>Drop files here or click to upload.</h4><span class="note needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  onUploadError(_args: DropzoneConfigInterface): void {}

  onUploadSuccess(_args: DropzoneConfigInterface): void {}
}
