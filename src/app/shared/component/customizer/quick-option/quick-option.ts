import { NgClass } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";

import { LayoutService } from "../../../services/layout.service";

@Component({
  selector: "app-quick-option",
  templateUrl: "./quick-option.html",
  styleUrls: ["./quick-option.scss"],
  imports: [NgClass],
})
export class QuickOption {
  layout = inject(LayoutService);

  public layoutType: string = "ltr";
  public sidebarType: string = "compact-wrapper";
  public screenwidth = window.innerWidth;
  public icon: string = "fill-svg";

  customizeLayoutType(val: string) {
    this.layoutType = val;
    this.layout.config.settings.layout_type = val;
    if (val == "rtl") {
      document.getElementsByTagName("html")[0].setAttribute("dir", val);
      document.body.className = "rtl";
    } else if (val == "box-layout") {
      document.getElementsByTagName("html")[0].setAttribute("dir", val);
      document.body.className = "box-layout";
    } else {
      document.getElementsByTagName("html")[0].removeAttribute("dir");
      document.body.className = "";
    }
  }

  customizeSidebarType(val: string) {
    if (this.screenwidth < 1200) {
      if (val == "horizontal-wrapper") {
        this.layout.config.settings.sidebar_type = "compact-wrapper";
      }
    } else {
      this.sidebarType = val;
      this.layout.config.settings.sidebar_type = val;
      this.layout.customizer = "";
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.screenwidth = (event.target as Window).innerWidth;
  }

  svgIcon(val: string) {
    this.icon = val;
    this.layout.config.settings.icon = val;
    if (val == "fill-svg") {
      document
        .getElementsByTagName("page-sub-header")[0]
        ?.setAttribute("icon", val);
    } else {
      document
        .getElementsByTagName("page-sub-header")[0]
        ?.setAttribute("icon", val);
    }
  }
}
