import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-upload-files",
  templateUrl: "./upload-files.html",
  styleUrls: ["./upload-files.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class UploadFiles {}
