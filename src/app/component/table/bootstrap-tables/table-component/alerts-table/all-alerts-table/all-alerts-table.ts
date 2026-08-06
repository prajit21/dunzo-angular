import { NgClass } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "app-all-alerts-table",
  templateUrl: "./all-alerts-table.html",
  styleUrls: ["./all-alerts-table.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass],
})
export class AllAlertsTable {
  public alerts: boolean = true;
  public alerts2: boolean = true;

  close() {
    this.alerts = false;
  }

  close2() {
    this.alerts2 = false;
  }
}
