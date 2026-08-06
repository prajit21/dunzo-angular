import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-error401",
  templateUrl: "./error401.html",
  styleUrls: ["./error401.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class Error401 {}
