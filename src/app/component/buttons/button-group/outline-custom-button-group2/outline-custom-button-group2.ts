import { Component } from "@angular/core";

import { outlinecustomData } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-outline-custom-button-group2",
  templateUrl: "./outline-custom-button-group2.html",
  styleUrls: ["./outline-custom-button-group2.scss"],
  imports: [],
})
export class OutlineCustomButtonGroup2 {
  public outlinecustom = outlinecustomData;
}
