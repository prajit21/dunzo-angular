import { Component } from "@angular/core";

import { breckpointSpecific } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-breckpoint-specific",
  templateUrl: "./breckpoint-specific.html",
  styleUrls: ["./breckpoint-specific.scss"],
  imports: [],
})
export class BreckpointSpecific {
  public breckpointData = breckpointSpecific;
}
