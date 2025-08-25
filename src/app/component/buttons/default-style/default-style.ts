import { Component } from "@angular/core";

import {
  DefaultButtons,
  styleButton,
} from "../../../shared/data/buttons/default-style";

@Component({
  selector: "app-default-style",
  templateUrl: "./default-style.html",
  styleUrls: ["./default-style.scss"],
  imports: [],
})
export class DefaultStyle {
  public defaultstyleData = DefaultButtons;
  public StylebuttonData = styleButton;
}
