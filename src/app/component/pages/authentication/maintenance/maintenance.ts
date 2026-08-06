import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-maintenance",
  templateUrl: "./maintenance.html",
  styleUrls: ["./maintenance.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class Maintenance {}
