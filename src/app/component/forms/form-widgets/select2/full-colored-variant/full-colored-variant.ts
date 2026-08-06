import { TitleCasePipe } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-full-colored-variant",
  templateUrl: "./full-colored-variant.html",
  styleUrls: ["./full-colored-variant.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, TitleCasePipe],
})
export class FullColoredVariant {
  colors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "inverse",
  ];
}
