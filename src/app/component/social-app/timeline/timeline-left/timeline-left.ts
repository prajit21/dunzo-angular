import { Component } from "@angular/core";

import { ActivityFeed } from "./activity-feed/activity-feed";
import { MutualFriends } from "./mutual-friends/mutual-friends";
import { MyProfile } from "./my-profile/my-profile";

@Component({
  selector: "app-timeline-left",
  templateUrl: "./timeline-left.html",
  styleUrls: ["./timeline-left.scss"],
  imports: [MyProfile, MutualFriends, ActivityFeed],
})
export class TimelineLeft {}
