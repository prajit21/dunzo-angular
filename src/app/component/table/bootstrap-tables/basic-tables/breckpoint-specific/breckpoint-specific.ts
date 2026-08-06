import { Component, ChangeDetectionStrategy } from "@angular/core";

import { breckpointSpecific } from "../../../../../shared/data/table/bootstrap-table/basic-tables";

@Component({
  selector: "app-breckpoint-specific",
  templateUrl: "./breckpoint-specific.html",
  styleUrls: ["./breckpoint-specific.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class BreckpointSpecific {
  public breckpointData = breckpointSpecific;
}
