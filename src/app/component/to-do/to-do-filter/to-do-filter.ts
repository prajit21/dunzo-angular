import { Component } from "@angular/core";

import { Feathericon } from "../../../shared/component/feathericon/feathericon";
import { ClickOutsideDirective } from "../../../shared/directives/outside.directive";

@Component({
  selector: "app-to-do-filter",
  templateUrl: "./to-do-filter.html",
  styleUrls: ["./to-do-filter.scss"],
  imports: [ClickOutsideDirective, Feathericon],
})
export class ToDoFilter {
  public open: boolean = false;

  openFilter() {
    this.open = !this.open;
  }

  clickOutside(): void {
    this.open = false;
  }
}
