import { Component, ChangeDetectionStrategy } from "@angular/core";

import { AboutCenter } from "./about-center/about-center";
import { TimelineLeft } from "../timeline/timeline-left/timeline-left";
import { TimelineRight } from "../timeline/timeline-right/timeline-right";

@Component({
  selector: "app-about",
  templateUrl: "./about.html",
  styleUrls: ["./about.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [TimelineLeft, AboutCenter, TimelineRight],
})
export class About {}
