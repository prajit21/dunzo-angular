import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-solid-border-style",
  templateUrl: "./solid-border-style.html",
  styleUrls: ["./solid-border-style.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class SolidBorderStyle {}
