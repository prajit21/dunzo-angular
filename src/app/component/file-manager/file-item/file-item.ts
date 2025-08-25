import { Component } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import * as fileData from "../../../shared/data/file-manager/file-manager";

@Component({
  selector: "app-file-item",
  templateUrl: "./file-item.html",
  styleUrls: ["./file-item.scss"],
  imports: [Feathericon],
})
export class FileItem {
  public active = 1;
  public Quickdata = fileData.Quickdata;
  public FoldersData = fileData.FoldersData;
  public FilesData = fileData.FilesData;
}
