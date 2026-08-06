import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import * as feather from "feather-icons";

@Component({
  selector: "app-feathericon",
  templateUrl: "./feathericon.html",
  styleUrls: ["./feathericon.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class Feathericon {
  public readonly icon = input<string>();
  readonly class = input<string>();

  ngAfterViewInit() {
    feather.replace();
  }
}
