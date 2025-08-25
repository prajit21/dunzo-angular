import { AsyncPipe, CommonModule, DecimalPipe, NgClass } from "@angular/common";
import { Component, inject, viewChildren } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { NgbPagination } from "@ng-bootstrap/ng-bootstrap";
import { Observable } from "rxjs";

import { supportDB } from "../../../shared/data/support-ticket/support-ticket";
import {
  NgbdSortableHeaderDirective2Directive,
  SortEvent,
} from "../../../shared/directives/support-ticket.directive";
import { SupportTicketService } from "../../../shared/services/support-ticket.service";

@Component({
  selector: "app-support-ticket-data-table",
  templateUrl: "./support-ticket-data-table.html",
  styleUrls: ["./support-ticket-data-table.scss"],
  imports: [
    FormsModule,
    NgbdSortableHeaderDirective2Directive,
    NgClass,
    CommonModule,
    NgbPagination,
    AsyncPipe,
  ],
  providers: [SupportTicketService, DecimalPipe],
})
export class SupportTicketDataTable {
  service = inject(SupportTicketService);

  public countries$: Observable<supportDB[]>;
  public Data: supportDB[];
  public total$: Observable<number>;

  readonly headers = viewChildren(NgbdSortableHeaderDirective2Directive);

  constructor() {
    const service = this.service;

    this.countries$ = service.support$;
    this.total$ = service.total$;
  }

  ngOnInit() {
    this.countries$.subscribe((res) => {
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
