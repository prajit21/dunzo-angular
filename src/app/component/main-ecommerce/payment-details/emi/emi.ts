import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-emi",
  templateUrl: "./emi.html",
  styleUrls: ["./emi.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class Emi {}
