import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-error404",
  templateUrl: "./error404.html",
  styleUrls: ["./error404.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class Error404 {}
