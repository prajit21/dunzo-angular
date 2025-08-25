import { Component } from "@angular/core";

import { darkThemAlert } from "../../../../shared/data/ui-kits/alert/alert";

@Component({
  selector: "app-link-color-dark-theme",
  templateUrl: "./link-color-dark-theme.html",
  styleUrls: ["./link-color-dark-theme.scss"],
  imports: [],
})
export class LinkColorDarkTheme {
  public darkThemeData = darkThemAlert;
}
