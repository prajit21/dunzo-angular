import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-select-sizing",
  templateUrl: "./select-sizing.html",
  styleUrls: ["./select-sizing.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class SelectSizing {}
