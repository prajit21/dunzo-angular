import { Component } from "@angular/core";

import { GridColumn } from "./grid-column/grid-column";
import { GridOptions } from "./grid-options/grid-options";
import { HorizontalAlignment } from "./horizontal-alignment/horizontal-alignment";
import { Nesting } from "./nesting/nesting";
import { Offset } from "./offset/offset";
import { Order } from "./order/order";
import { VerticalAlignment } from "./vertical-alignment/vertical-alignment";

@Component({
  selector: "app-grid",
  templateUrl: "./grid.html",
  styleUrls: ["./grid.scss"],
  imports: [
    GridOptions,
    GridColumn,
    VerticalAlignment,
    HorizontalAlignment,
    Nesting,
    Order,
    Offset,
  ],
})
export class Grid {}
