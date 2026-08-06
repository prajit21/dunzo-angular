import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-offer-style-border",
  templateUrl: "./offer-style-border.html",
  styleUrls: ["./offer-style-border.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class OfferStyleBorder {}
