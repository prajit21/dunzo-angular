import { NgClass } from "@angular/common";
import { Component } from "@angular/core";

import { About } from "../about/about";
import { Friends } from "../friends/friends";
import { Photos } from "../photos/photos";
import { Timeline } from "../timeline/timeline";

@Component({
  selector: "app-social-profile",
  templateUrl: "./social-profile.html",
  styleUrls: ["./social-profile.scss"],
  imports: [NgClass, Timeline, About, Friends, Photos],
})
export class SocialProfile {
  public active = 1;
  public openTab: string = "timeline";

  public tabbed(val: string) {
    this.openTab = val;
  }
}
