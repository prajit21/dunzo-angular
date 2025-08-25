import { Component } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { ClickOutsideDirective } from "../../../shared/directives/outside.directive";

@Component({
  selector: "app-file-manager-sidebar",
  templateUrl: "./file-manager-sidebar.html",
  styleUrls: ["./file-manager-sidebar.scss"],
  imports: [ClickOutsideDirective, Feathericon],
})
export class FileManagerSidebar {
  public open: boolean = false;

  openFilter() {
    this.open = !this.open;
  }

  clickOutside(): void {
    this.open = false;
  }
}
