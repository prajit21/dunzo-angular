import { Component, input, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import { button } from "../../../../shared/data/ui-kits/tag-pills/tag-pills";

@Component({
  selector: "app-common-bedge-pills",
  templateUrl: "./common-bedge-pills.html",
  styleUrls: ["./common-bedge-pills.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Feathericon],
})
export class CommonBedgePills {
  readonly data = input<button[]>();
}
