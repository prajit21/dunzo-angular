import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-raise-input-style",
  templateUrl: "./raise-input-style.html",
  styleUrls: ["./raise-input-style.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class RaiseInputStyle {}
