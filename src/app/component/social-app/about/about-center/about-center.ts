import { Component } from "@angular/core";

import { ActivityLog } from "./activity-log/activity-log";
import { CommonAddFriends } from "./common-add-friends/common-add-friends";
import { HobbiesEduction } from "./hobbies-eduction/hobbies-eduction";
import { Feathericon } from "../../../../shared/component/feathericon/feathericon";
import * as data from "../../../../shared/data/social-media/social-media-data";

@Component({
  selector: "app-about-center",
  templateUrl: "./about-center.html",
  styleUrls: ["./about-center.scss"],
  imports: [CommonAddFriends, Feathericon, HobbiesEduction, ActivityLog],
})
export class AboutCenter {
  public addFriendsData = data.peopleKnowYouData;
  public hobbiesAndInterestData = data.hobbiedAndInterestData;
  public eductionData = data.eductionData;
}
