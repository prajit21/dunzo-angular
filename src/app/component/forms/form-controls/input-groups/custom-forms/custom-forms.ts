import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-custom-forms",
  templateUrl: "./custom-forms.html",
  styleUrls: ["./custom-forms.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class CustomForms {}
