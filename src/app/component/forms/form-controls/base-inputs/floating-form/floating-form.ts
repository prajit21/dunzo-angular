import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-floating-form",
  templateUrl: "./floating-form.html",
  styleUrls: ["./floating-form.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class FloatingForm {}
