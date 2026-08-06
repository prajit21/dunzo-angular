import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-basic-form",
  templateUrl: "./basic-form.html",
  styleUrls: ["./basic-form.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class BasicForm {}
