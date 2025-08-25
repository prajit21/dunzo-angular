import { TitleCasePipe } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-outline-color-variant",
  templateUrl: "./outline-color-variant.html",
  styleUrls: ["./outline-color-variant.scss"],
  imports: [FormsModule, TitleCasePipe],
})
export class OutlineColorVariant {
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
