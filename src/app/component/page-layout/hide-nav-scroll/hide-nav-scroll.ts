import { Component, HostListener, inject } from "@angular/core";

import { HideNavScrollService } from "../../../shared/services/hide-nav-scroll.service";

@Component({
  selector: "app-hide-nav-scroll",
  templateUrl: "./hide-nav-scroll.html",
  styleUrls: ["./hide-nav-scroll.scss"],
  imports: [],
})
export class HideNavScroll {
  private hidenav = inject(HideNavScrollService);

  public show: boolean = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (number > 250) {
      this.hidenav.show = true;
    } else {
      this.hidenav.show = false;
    }
  }
}
