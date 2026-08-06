import { Component, ChangeDetectionStrategy } from "@angular/core";

import { defaultRedio } from "../../../../../shared/data/forms/form-controls/checkbox-radio";

@Component({
  selector: "app-default-radio",
  templateUrl: "./default-radio.html",
  styleUrls: ["./default-radio.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class DefaultRadio {
  public redio = defaultRedio;
}
