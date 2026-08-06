import { Component, ChangeDetectionStrategy } from "@angular/core";

import { ContextualClass } from "../../../../shared/data/ui-kits/lists/lists";

@Component({
  selector: "app-contextual-classes",
  templateUrl: "./contextual-classes.html",
  styleUrls: ["./contextual-classes.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class ContextualClasses {
  public contextualData = ContextualClass;
}
