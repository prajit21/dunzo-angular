import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-edges-input-style",
  templateUrl: "./edges-input-style.html",
  styleUrls: ["./edges-input-style.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class EdgesInputStyle {}
