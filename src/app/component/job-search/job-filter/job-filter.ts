import { Component } from "@angular/core";

import { NgbCollapse } from "@ng-bootstrap/ng-bootstrap";

import * as Data from "../../../shared/data/job-search/job-search";

@Component({
  selector: "app-job-filter",
  templateUrl: "./job-filter.html",
  styleUrls: ["./job-filter.scss"],
  imports: [NgbCollapse],
})
export class JobFilter {
  public filterData = Data.filterData;
  public filterChackBox = Data.filterChackBox;
  public isCollapsed = false;
  public isCollapsed2 = false;
  public isCollapsed3 = false;
  public isCollapsed4 = false;
  public OpenFilter: boolean = false;

  openFilter() {
    this.OpenFilter = !this.OpenFilter;
  }
}
