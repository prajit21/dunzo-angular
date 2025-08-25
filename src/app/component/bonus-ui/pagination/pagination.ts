import { Component } from "@angular/core";

import { ActiveDisabled } from "./active-disabled/active-disabled";
import { AlignmentPagination } from "./alignment-pagination/alignment-pagination";
import { DefaultPagination } from "./default-pagination/default-pagination";
import { IconsPagination } from "./icons-pagination/icons-pagination";
import { RoundedPagination } from "./rounded-pagination/rounded-pagination";
import { SizingPagination } from "./sizing-pagination/sizing-pagination";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.html",
  styleUrls: ["./pagination.scss"],
  imports: [
    DefaultPagination,
    ActiveDisabled,
    IconsPagination,
    RoundedPagination,
    AlignmentPagination,
    SizingPagination,
  ],
})
export class Pagination {}
