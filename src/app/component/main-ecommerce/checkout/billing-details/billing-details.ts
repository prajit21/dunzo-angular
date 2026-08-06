import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-billing-details",
  templateUrl: "./billing-details.html",
  styleUrls: ["./billing-details.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class BillingDetails {}
