import { Component } from "@angular/core";

import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-leads-status",
  templateUrl: "./leads-status.html",
  styleUrls: ["./leads-status.scss"],
  imports: [ClickOutsideDirective],
})
export class LeadsStatus {
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
