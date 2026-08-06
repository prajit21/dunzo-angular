import { Component, ChangeDetectionStrategy } from "@angular/core";

import { AllAlertsTable } from "./all-alerts-table/all-alerts-table";

@Component({
  selector: "app-alerts-table",
  templateUrl: "./alerts-table.html",
  styleUrls: ["./alerts-table.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [AllAlertsTable],
})
export class AlertsTable {}
