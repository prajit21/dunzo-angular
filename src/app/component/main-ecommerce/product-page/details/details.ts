import { Component, ChangeDetectionStrategy } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.html",
  styleUrls: ["./details.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [FormsModule, RouterLink],
})
export class Details {}
