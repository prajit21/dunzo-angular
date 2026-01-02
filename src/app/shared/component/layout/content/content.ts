import { NgClass } from "@angular/common";
import { Component, HostListener, inject } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";

import { HideNavScrollService } from "../../../services/hide-nav-scroll.service";
import { LayoutService } from "../../../services/layout.service";
import { NavmenuService } from "../../../services/navmenu.service";
import { Breadcrumb } from "../../breadcrumb/breadcrumb";
import { Customizer } from "../../customizer/customizer";
import { Footer } from "../../footer/footer";
import { Header } from "../../header/header";
import { Sidebar } from "../../sidebar/sidebar";

@Component({
  selector: "app-content",
  templateUrl: "./content.html",
  styleUrls: ["./content.scss"],
  imports: [
    Header,
    Sidebar,
    Breadcrumb,
    RouterOutlet,
    Footer,
    Customizer,
    NgClass,
  ],
})
export class Content {
  hidenav = inject(HideNavScrollService);
  navmenu = inject(NavmenuService);
  layout = inject(LayoutService);
  private router = inject(Router);

  public innerWidth: number;

  @HostListener("window:resize")
  onResize() {
    const isMobile = window.innerWidth < 1200;

    this.navmenu.isDisplay = isMobile;

    if (isMobile) {
      this.layout.config.settings.sidebar_type = "compact-wrapper";
    }
  }

  ngOnInit(): void {
    this.router.url;
    this.innerWidth = window.innerWidth;
  }
}
