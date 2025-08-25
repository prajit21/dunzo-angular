import { NgClass } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { LayoutService } from "../../../services/layout.service";

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.html",
  styleUrls: ["./color-picker.scss"],
  imports: [FormsModule, NgClass],
})
export class ColorPicker {
  layout = inject(LayoutService);

  public primary: string = "#307EF3";
  public secondary: string = "#EBA31D";
  public MIXLayout: string = "default";

  public primary_color = localStorage.getItem("primary_color") || "#307EF3";
  public secondary_color = localStorage.getItem("secondary_color") || "#EBA31D";

  constructor() {
    document.documentElement.style.setProperty(
      "--theme-default",
      localStorage.getItem("primary_color"),
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      localStorage.getItem("secondary_color"),
    );
    var primary =
      localStorage.getItem("primary_color") ||
      this.layout.config.color.secondary_color;
    var secondary =
      localStorage.getItem("secondary_color") ||
      this.layout.config.color.secondary_color;
    this.layout.config.color.primary_color = primary;
    this.layout.config.color.secondary_color = secondary;
    localStorage.getItem("primary_color") ||
      this.layout.config.color.primary_color;
    localStorage.getItem("secondary_color") ||
      this.layout.config.color.secondary_color;
  }

  applyColor() {
    localStorage.setItem("primary_color", this.primary_color);
    localStorage.setItem("secondary_color", this.secondary_color);
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
    window.location.reload();
  }

  resetColor() {
    document.documentElement.style.setProperty("--theme-default", "#307EF3");
    document.documentElement.style.setProperty("--theme-secondary", "#EBA31D");
    (<HTMLInputElement>document.getElementById("ColorPicker1")).value =
      "#24695c";
    (<HTMLInputElement>document.getElementById("ColorPicker2")).value =
      "#EBA31D";
    this.layout.config.color.primary_color = "#307EF3";
    this.layout.config.color.secondary_color = "#EBA31D";
  }

  customizeMixLayout(val: string) {
    this.MIXLayout = val;
    this.layout.config.settings.layout_version = val;
    document.body?.classList.remove("light-only", "dark-sidebar", "dark-only");
    if (val === "default") {
      document.body?.classList.add("light-only");
    } else if (val === "dark-sidebar") {
      document.body?.classList.add("dark-sidebar");
    } else {
      document.body?.classList.add("dark-only");
    }
  }
}
