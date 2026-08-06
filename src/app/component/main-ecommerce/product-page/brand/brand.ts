import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../shared/component/feathericon/feathericon";

@Component({
  selector: "app-brand",
  templateUrl: "./brand.html",
  styleUrls: ["./brand.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Feathericon],
})
export class Brand {}
