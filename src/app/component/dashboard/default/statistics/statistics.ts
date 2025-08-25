import { Component } from "@angular/core";

import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.html",
  styleUrls: ["./statistics.scss"],
  imports: [ClickOutsideDirective],
})
export class Statistics {
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
