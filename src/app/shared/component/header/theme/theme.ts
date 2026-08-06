import { NgClass } from "@angular/common";
import { Component, inject, ChangeDetectionStrategy } from "@angular/core";

import { LayoutService } from "../../../services/layout.service";

@Component({
  selector: "app-theme",
  templateUrl: "./theme.html",
  styleUrls: ["./theme.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgClass],
})
export class Theme {
  layout = inject(LayoutService);

  public dark: boolean =
    this.layout.config.settings.layout_version == "dark-only" ? true : false;

  layoutToggle() {
    this.dark = !this.dark;
    this.dark
      ? document.body.classList.add("dark-only")
      : document.body.classList.remove("dark-only");
    this.layout.config.settings.layout_version = this.dark
      ? "dark-only"
      : "light-only";
  }
}
