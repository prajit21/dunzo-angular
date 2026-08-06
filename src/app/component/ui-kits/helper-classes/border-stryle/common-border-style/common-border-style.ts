import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { titleData } from "../../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-common-border-style",
  templateUrl: "./common-border-style.html",
  styleUrls: ["./common-border-style.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class CommonBorderStyle {
  readonly data = input<titleData[]>();
}
