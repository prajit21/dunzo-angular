import { Component } from "@angular/core";

import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-recent-activity",
  templateUrl: "./recent-activity.html",
  styleUrls: ["./recent-activity.scss"],
  imports: [ClickOutsideDirective],
})
export class RecentActivity {
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
