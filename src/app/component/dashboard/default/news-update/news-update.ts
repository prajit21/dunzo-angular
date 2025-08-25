import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { NewsUpdates } from "../../../../shared/data/dashboard/default-data";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-news-update",
  templateUrl: "./news-update.html",
  styleUrls: ["./news-update.scss"],
  imports: [ClickOutsideDirective, NgClass, RouterLink],
})
export class NewsUpdate {
  public NewsData = NewsUpdates;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
