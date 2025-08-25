import { DecimalPipe, AsyncPipe } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbHighlight, NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

import {
  NgbdSortableHeaderDirective,
  SortEvent,
} from "../../../shared/directives/sortable.directive";
import { supportDB } from "../../../shared/interface/support";
import { TableService } from "../../../shared/services/table.service";

@Component({
  selector: "app-data-table",
  templateUrl: "./data-table.html",
  styleUrls: ["./data-table.scss"],
  providers: [TableService, DecimalPipe],
  imports: [
    FormsModule,
    NgbdSortableHeaderDirective,
    NgbHighlight,
    NgbPagination,
    AsyncPipe,
    DecimalPipe,
  ],
})
export class DataTable {
  service = inject(TableService);

  public tableData$: Observable<supportDB[]>;
  public Data: supportDB[];
  public total$: Observable<number>;

  readonly headers = viewChildren(NgbdSortableHeaderDirective);

  constructor() {
    const service = this.service;

    this.tableData$ = service.supportdata$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.tableData$.subscribe((res) => {
      this.Data = res;
    });
  }

  onSort({ column, direction }: SortEvent) {
    this.headers().forEach((header) => {
      if (header.sortable() !== column) {
        header.direction = "";
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
