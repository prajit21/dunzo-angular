import { Component } from "@angular/core";

import { allData } from "../../../shared/data/search-result/search-result";

@Component({
  selector: "app-all",
  templateUrl: "./all.html",
  styleUrls: ["./all.scss"],
  imports: [],
})
export class All {
  public allData = allData;
}
