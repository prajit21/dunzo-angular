import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { notifications } from "../../../../shared/data/dashboard/default-data";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-notifications",
  templateUrl: "./notifications.html",
  styleUrls: ["./notifications.scss"],
  imports: [ClickOutsideDirective, RouterLink],
})
export class Notifications {
  public notificationsData = notifications;
  public isOpen: boolean = false;
  public openid: number;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  openMenu1(id: number) {
    this.notificationsData.filter((data) => {
      if (data.id === id) {
        data.isShow = !data.isShow;
      }
    });
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
