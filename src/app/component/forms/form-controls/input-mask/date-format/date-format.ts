import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-date-format",
  templateUrl: "./date-format.html",
  styleUrls: ["./date-format.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class DateFormat {}
