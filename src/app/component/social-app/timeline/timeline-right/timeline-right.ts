import { Component } from "@angular/core";

import { Followers } from "./followers/followers";
import { Follwing } from "./follwing/follwing";
import { FriendsProfile } from "./friends-profile/friends-profile";
import { LatestPhotos } from "./latest-photos/latest-photos";
import { ProfileIntro } from "./profile-intro/profile-intro";

@Component({
  selector: "app-timeline-right",
  templateUrl: "./timeline-right.html",
  styleUrls: ["./timeline-right.scss"],
  imports: [ProfileIntro, Followers, Follwing, LatestPhotos, FriendsProfile],
})
export class TimelineRight {}
