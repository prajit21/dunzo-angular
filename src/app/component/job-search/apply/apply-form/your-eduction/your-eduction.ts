import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-your-eduction",
  templateUrl: "./your-eduction.html",
  styleUrls: ["./your-eduction.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule],
})
export class YourEduction {}
