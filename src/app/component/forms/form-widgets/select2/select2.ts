import { Component } from "@angular/core";

import { Defaultselect2 } from "./defaultselect2/defaultselect2";
import { FullColoredVariant } from "./full-colored-variant/full-colored-variant";
import { OutlineColorVariant } from "./outline-color-variant/outline-color-variant";

@Component({
  selector: "app-select2",
  templateUrl: "./select2.html",
  styleUrls: ["./select2.scss"],
  imports: [Defaultselect2, OutlineColorVariant, FullColoredVariant],
})
export class Select2 {}
