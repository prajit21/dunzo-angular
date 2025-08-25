import { Component, inject } from "@angular/core";

import { NgbCalendar, NgbDatepicker } from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";

import { raderchart } from "../../../../shared/data/dashboard/project/project-chart";
import { ClickOutsideDirective } from "../../../../shared/directives/outside.directive";

@Component({
  selector: "app-upcoming-meeting",
  templateUrl: "./upcoming-meeting.html",
  styleUrls: ["./upcoming-meeting.scss"],
  imports: [ClickOutsideDirective, NgbDatepicker, NgApexchartsModule],
})
export class UpcomingMeeting {
  private calendar = inject(NgbCalendar);

  public isOpen: boolean = false;
  public raderchartData = raderchart;
  public date!: { year: number; month: number };

  openMenu() {
    this.isOpen = !this.isOpen;
  }

  clickOutside(): void {
    this.isOpen = false;
  }
}
