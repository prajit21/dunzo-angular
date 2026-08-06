import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { titleData } from "../../../../../shared/data/ui-kits/helper-classes/helper-classes";

@Component({
  selector: "app-common-background",
  templateUrl: "./common-background.html",
  styleUrls: ["./common-background.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class CommonBackground {
  readonly data = input<titleData[]>();
}
