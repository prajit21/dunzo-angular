import { Component } from "@angular/core";

import { radioButton } from "../../../../shared/data/buttons/button-group";

@Component({
  selector: "app-radio-button-group",
  templateUrl: "./radio-button-group.html",
  styleUrls: ["./radio-button-group.scss"],
  imports: [],
})
export class RadioButtonGroup {
  public radiobuttonData = radioButton;
}
