import { Component, ChangeDetectionStrategy } from "@angular/core";
import { RouterLink } from "@angular/router";

import { upcomingProjectCard } from "../../../../shared/data/dashboard/project/project";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-upcoming-projects-cards",
  templateUrl: "./upcoming-projects-cards.html",
  styleUrls: ["./upcoming-projects-cards.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [RouterLink, ClickOutsideDirective],
})
export class UpcomingProjectsCards {
  public UpcomingProjectsCards = upcomingProjectCard;
  public isOpen: boolean = false;

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
