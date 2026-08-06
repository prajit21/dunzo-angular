import { Component, ChangeDetectionStrategy } from "@angular/core";

import { horizontalTimeline } from "../../../../shared/data/bonus-ui/timeline";

@Component({
  selector: "app-horizontal-timeline",
  templateUrl: "./horizontal-timeline.html",
  styleUrls: ["./horizontal-timeline.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [],
})
export class HorizontalTimeline {
  public horizontalTimelineData = horizontalTimeline;
}
