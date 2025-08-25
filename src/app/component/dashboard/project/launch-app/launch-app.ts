import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-launch-app",
  templateUrl: "./launch-app.html",
  styleUrls: ["./launch-app.scss"],
  imports: [ClickOutsideDirective, RouterLink],
})
export class LaunchApp {
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
