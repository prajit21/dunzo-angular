import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Feathericon } from "../../../../../shared/component/feathericon/feathericon";
import * as data from "../../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-activity-log",
  templateUrl: "./activity-log.html",
  styleUrls: ["./activity-log.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [Feathericon],
})
export class ActivityLog {
  public activityLogData = data.activityLog;
}
