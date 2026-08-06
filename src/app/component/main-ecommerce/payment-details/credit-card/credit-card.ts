import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-credit-card",
  templateUrl: "./credit-card.html",
  styleUrls: ["./credit-card.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class CreditCard {}
