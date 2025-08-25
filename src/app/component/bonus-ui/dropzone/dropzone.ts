import { Component } from "@angular/core";

import { DefaultFileUpload } from "./default-file-upload/default-file-upload";
import { ImagePerview } from "./image-perview/image-perview";
import { MultiFileUpload } from "./multi-file-upload/multi-file-upload";
import { SingleFileUpload } from "./single-file-upload/single-file-upload";

@Component({
  selector: "app-dropzone",
  templateUrl: "./dropzone.html",
  styleUrls: ["./dropzone.scss"],
  imports: [DefaultFileUpload, ImagePerview, SingleFileUpload, MultiFileUpload],
})
export class Dropzone {}
