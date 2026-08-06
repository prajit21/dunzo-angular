import { Component, ChangeDetectionStrategy } from "@angular/core";

import { allData } from "../../../shared/data/search-result/search-result";

@Component({
  selector: "app-all",
  templateUrl: "./all.html",
  styleUrls: ["./all.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class All {
  public allData = allData;
}
