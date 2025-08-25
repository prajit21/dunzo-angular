import { Component } from "@angular/core";

import { SocialProfile } from "./social-profile/social-profile";

@Component({
  selector: "app-social-app",
  templateUrl: "./social-app.html",
  styleUrls: ["./social-app.scss"],
  imports: [SocialProfile],
})
export class SocialApp {}
