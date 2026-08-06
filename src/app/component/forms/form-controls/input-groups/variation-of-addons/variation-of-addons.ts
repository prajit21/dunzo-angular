import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-variation-of-addons",
  templateUrl: "./variation-of-addons.html",
  styleUrls: ["./variation-of-addons.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class VariationOfAddons {}
