import { Component, ChangeDetectionStrategy } from "@angular/core";

import { FileItem } from "./file-item/file-item";
import { FileManagerSidebar } from "./file-manager-sidebar/file-manager-sidebar";

@Component({
  selector: "app-file-manager",
  templateUrl: "./file-manager.html",
  styleUrls: ["./file-manager.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FileManagerSidebar, FileItem],
})
export class FileManager {}
