import { Component } from "@angular/core";

import { TimelineCenter } from "./timeline-center/timeline-center";
import { TimelineLeft } from "./timeline-left/timeline-left";
import { TimelineRight } from "./timeline-right/timeline-right";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.html",
  styleUrls: ["./timeline.scss"],
  imports: [TimelineLeft, TimelineCenter, TimelineRight],
})
export class Timeline {}
