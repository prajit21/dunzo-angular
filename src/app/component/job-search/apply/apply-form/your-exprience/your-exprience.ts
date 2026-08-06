import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-your-exprience",
  templateUrl: "./your-exprience.html",
  styleUrls: ["./your-exprience.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class YourExprience {}
