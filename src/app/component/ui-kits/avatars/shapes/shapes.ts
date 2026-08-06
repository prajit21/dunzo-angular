import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Shape } from "../../../../shared/data/ui-kits/avatar/avavtar";

@Component({
  selector: "app-shapes",
  templateUrl: "./shapes.html",
  styleUrls: ["./shapes.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class Shapes {
  public shapesData = Shape;
}
