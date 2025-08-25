import { Component } from "@angular/core";

import { caption } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-caption",
  templateUrl: "./caption.html",
  styleUrls: ["./caption.scss"],
  imports: [],
})
export class Caption {
  public captionData = caption;
}
