import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { titleData } from "../../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-common-border-displays",
  templateUrl: "./common-border-displays.html",
  styleUrls: ["./common-border-displays.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class CommonBorderDisplays {
  readonly data = input<titleData[]>();
}
