import { Component } from "@angular/core";

import { basicTimeline } from "../../../../shared/data/bonus-ui/timeline";

@Component({
  selector: "app-basic-timeline",
  templateUrl: "./basic-timeline.html",
  styleUrls: ["./basic-timeline.scss"],
  imports: [],
})
export class BasicTimeline {
  public basictimelineData = basicTimeline;
}
