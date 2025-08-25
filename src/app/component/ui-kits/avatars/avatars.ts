import { Component } from "@angular/core";

import { Grouping } from "./grouping/grouping";
import { Ratio } from "./ratio/ratio";
import { Shapes } from "./shapes/shapes";
import { Sizes } from "./sizes/sizes";
import { StatusIndicator } from "./status-indicator/status-indicator";

@Component({
  selector: "app-avatars",
  templateUrl: "./avatars.html",
  styleUrls: ["./avatars.scss"],
  imports: [Sizes, StatusIndicator, Shapes, Ratio, Grouping],
})
export class Avatars {}
