import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-view-profile",
  templateUrl: "./view-profile.html",
  styleUrls: ["./view-profile.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink],
})
export class ViewProfile {}
