import { Component } from "@angular/core";

import { ColoredBreadcrumb } from "./colored-breadcrumb/colored-breadcrumb";
import { DefaultBreadcrumb } from "./default-breadcrumb/default-breadcrumb";
import { DividerBreadcrumb } from "./divider-breadcrumb/divider-breadcrumb";
import { IconsBreadcrumb } from "./icons-breadcrumb/icons-breadcrumb";
import { VariationBreadcrumb } from "./variation-breadcrumb/variation-breadcrumb";

@Component({
  selector: "app-breadcrumb",
  templateUrl: "./breadcrumb.html",
  styleUrls: ["./breadcrumb.scss"],
  imports: [
    DefaultBreadcrumb,
    DividerBreadcrumb,
    IconsBreadcrumb,
    VariationBreadcrumb,
    ColoredBreadcrumb,
  ],
})
export class Breadcrumb {}
