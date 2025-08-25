import { Component } from "@angular/core";

import { lightThemeAlert } from "../../../../shared/data/ui-kits/alert/alert";

@Component({
  selector: "app-link-color-light-theme",
  templateUrl: "./link-color-light-theme.html",
  styleUrls: ["./link-color-light-theme.scss"],
  imports: [],
})
export class LinkColorLightTheme {
  public lightThemeData = lightThemeAlert;
}
