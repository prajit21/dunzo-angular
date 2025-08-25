import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./details.html",
  styleUrls: ["./details.scss"],
  imports: [FormsModule, RouterLink],
})
export class Details {}
