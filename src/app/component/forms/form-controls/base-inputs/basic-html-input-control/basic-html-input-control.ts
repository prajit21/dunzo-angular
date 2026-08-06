import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Datalist } from "./datalist/datalist";
import { DateTime } from "./date-time/date-time";

@Component({
  selector: "app-basic-html-input-control",
  templateUrl: "./basic-html-input-control.html",
  styleUrls: ["./basic-html-input-control.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, DateTime, Datalist],
})
export class BasicHtmlInputControl {}
